var socket = io() ;

 console.log('in here')
    socket.on('test', function (data) {
        console.log('data is: ' + data)
        var thisID = data.length - 1
        if (data[thisID] != peer.id) {
            var c = peer.connect(data[thisID]);
            console.log('this is a TEST: ' + c)
          c.on('open', function(){
            connect(c);
            });
            c.on('error', function(err){ alert(err) }); 
        }
    });
