

var pingMsg = []
var pingInterval

pingMsg[0] = 0


function startPing(){
	pingInterval = setInterval(Ping, 800)
}

function Ping(){
	pingMsg[1] = 0
	pingMsg[2] = +new Date()

	console.log('in here')

	for (var i = 0 ; i < 4 ; i++){
		if (user[i] != 0){
			console.log('sending')
			user[i].send(pingMsg)
		}
	}
}

startPing()