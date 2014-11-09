
    var synchronize = []
    var benchmark = []
//var ready2;

function dataProcess(index, c){
  
        user[index] = c 

        // loadRound()
        // callPeer()

user[index].on('close', function(err){ 
  alert(user[index].peer + ' has left the chat.') 
  user[index] = 0
});


user[index].on('data', function(data){

  // latency measure
  if (data[0] == 0){     
    if (data[1] == 0){   // send ping back to user
      data[1] = 1
      for (var i = 1 ; i < userLimit ; i++){
        if (user[i] != 0){
           user[i].send(data)
        }
      }
    }
    else if (data[1] == 1){     // receive ping back and calculate latency
      var newDate = +new Date();
      var latency = newDate - data[2];
      // var color;
      //   if (latency <= 25)
      //     color = 'green'
      //   else if (latency <= 40)
      //     color = 'yellow'
      //   else if (latency <= 60)
      //     color = 'orange'
      //   else
      //     color = 'red'
          
      //     $('#messages').empty()
      //     $('#messages').css('color', color).text('<br>Now chatting with ' + user[index].peer + ": " + latency + "ms")       
    }
  }

  // receiving ready from other player
  else if (data[0] == 1){
    s.opponentReady = true;

    if(s.userReady[1] == true && s.done == false)
    {
      s.random = Math.floor((Math.random() * 4) + 1)
      synchronize[0] = 6
      synchronize[1] = 0
      synchronize[2] = +new Date()
      synchronize[3] = s.random

      s.done = true;
      // myo_.redCountDown();
    for (var i = 0 ; i < 2 ; i++){
      if (user[i] != 0){
        user[i].send(synchronize)
      }
    }
    }
  }
  
  else if (data[0] == 2){
    console.log(data[1])
  }

  // draw time of opponent
  else if (data[0] == 3){
    s.receivedTime = true;
    s.oppFired = true;
    s.opponentTime = data[1];
    $('#oppTimeSeconds').text(data[1]);
    console.log('draw time of opponent: ' + data[1]);
    // if(s.userFired == true) {
    //   if (s.drawTime[1] < s.opponentTime) {
    //     console.log("Good job!")
    //     // --s.opponentLives;
    //   }
    //   else {
    //     console.log("You lost a life!")
    //     // --s.myLives;
    //   }
    //   // myo_.endSequence();
    // }
  }

  else if (data[0] == 4) { //userPlayAgain[]
    s.opponentPlayAgain = true;
    if(s.userPlayAgain[1] == true && s.playAgainDone == false)
    {
      s.playAgainDone = true;
      clearInterval(s.yellowLight);
      clearInterval(s.redLight);
      myo_.reset();
      myo_.primeMyo();
    }
  }

  //cheat play again
  else if (data[0] == 5) {
    clearInterval(s.yellowLight);
    clearInterval(s.redLight);
    myo_.reset();
    myo_.primeMyo();
  }

  else if (data[0] == 6){
    if (data[1] == 0){
      data[1] = 1
      benchmark[0] = data[2]
      s.random = data[3]
      for (var i = 0 ; i < 2 ; i++){
        if (user[i] != 0){
          user[i].send(data)
        }
      }
    }

    else if (data[1] == 1){
      var newerDate = +new Date()
      var rtt = (newerDate - synchronize[2])
      data[1] = 2
      data[2] = rtt
      data[3] = 0
      data[3] = +new Date()
      console.log('rtt: ' + rtt)

      for (var i = 0 ; i < 2 ; i++){
        if (user[i] != 0){
          user[i].send(data)
        }
      }
    // setTimeout(function(){
        myo_.redCountDown();
      // }, 500)
    }

    else if (data[1] == 2){
      console.log(data[3])
      console.log(benchmark[0])
      var offset = data[3] - benchmark[0]
      offset += data[2]
      console.log('offset: ' + offset)
      // setTimeout(function(){
        myo_.redCountDown();
      // }, 500 - offset)
    }
  }
});

user[index].on('close', function(err){ 
$('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
  user[index] = 0 
});

}