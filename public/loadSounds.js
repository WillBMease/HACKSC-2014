window.onload = init;
var context;
var bufferLoader;
var gunshot, gunload, shotgunload
  
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

function init() {
  // Fix up prefixing

  bufferLoader = new BufferLoader(
    context,
    [
      '/sounds/gunshot.mp3',
      '/sounds/shotgunload.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  gunshot = bufferList[0]
  shotgunload = bufferList[1]
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
      source.onended = function() {
      source.stop()
    }
}