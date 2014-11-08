

//var ready2;

function dataProcess(index, c){



// var newer, older = 0
var averagecount = 0; 
// var logger = []   // counts how many of each delay there is
  
        user[index] = c 

          // Receive the incoming message and play it calling midi function
            
user[index].on('data', function(data){
      if (data[0] == 0){        // latency measure
        if (data[1] == 0){   // send ping back to user
          data[1] = 1
          for (var i = 0 ; i < 4 ; i++){
            if (user[i] != 0){
               user[i].send(data)
          }
        }
      }
        else if (data[1] == 1){     // receive ping back and calculate latency
          var newDate = +new Date()
          var latency = newDate - data[2]

              var color
            if (latency <= 25)
              color = 'green'
            else if (latency <= 40)
              color = 'yellow'
            else if (latency <= 60)
              color = 'orange'
            else
              color = 'red'
              
              $('#messages').empty()
              $('#messages').css('color', color).text('<br>Now chatting with ' + user[index].peer + ": " + latency + "ms")        
        }
      }

      else if (data[0] == 1){       // receiving ready from other player
        ready2 = true;
        if(ready1[1] == true && ready2 == true && done == false)
        {
          done = true
          counter();
          console.log("START!");
        }
      }
      
        else if (data[0] == 2){
          console.log(data[1])
        }

        else if (data[0] == 3){
          console.log('draw time of opponent: ' + data[1])
        }
});
          user[index].on('close', function(err){ 
          $('#messages').append('<br>' + user[index].peer + ' has left the chat.'); 
            user[index] = 0 
          });

}