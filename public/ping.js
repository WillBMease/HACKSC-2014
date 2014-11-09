

var pingMsg = []
var pingInterval

pingMsg[0] = 0


function startPing(){
	pingInterval = setInterval(Ping, 800)
}

function Ping(){
	pingMsg[1] = 0
	pingMsg[2] = +new Date()

	for (var i = 1 ; i < userLimit ; i++){
		if (user[i] != 0){
			user[i].send(pingMsg)
		}
	}
}

// startPing()


$('#status').text('Waiting for user to join')