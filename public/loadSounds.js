window.onload = init;
var context;
var bufferLoader;
var gunshot, gunload, shotgunload, holster, ricochet
  
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

function init() {
  // Fix up prefixing

  bufferLoader = new BufferLoader(
    context,
    [
      '/sounds/gunshot.mp3',
      '/sounds/shotgunload.mp3',
      '/sounds/holster.mp3',
      '/sounds/ricochet.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  gunshot = bufferList[0]
  shotgunload = bufferList[1]
  holster = bufferList[2]
  console.log("sounds loaded!")
}

function playSound(sound){
  var source = context.createBufferSource()
  if (sound == 'gunshot'){
    source.buffer = gunshot
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'gunload'){
    source.buffer = gunload
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'shotgunload'){
    source.buffer = shotgunload
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'holster'){
    source.buffer = holster
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'ricochet'){
    source.buffer = ricochet
    source.connect(context.destination)
    source.start(0)
  }
      source.onended = function() {
      source.stop()
    }
}

    var source; 
    var audio0 = new Audio(); 

function playIntro(){  
    audio0.src = '/sounds/westsong.mp3';
    audio0.controls = true;
    audio0.autoplay = true;
    audio0.loop = true;
    source = context.createMediaElementSource(audio0);
    source.connect(context.destination);
    audio0.play(0)
}
playIntro()

function killIntro(){
  audio0.pause()
  audio0.currentTime = 0;
}