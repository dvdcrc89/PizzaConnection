const PORT = 55000;

var server = require('http').createServer();
var io = require('socket.io')(server);
let roomno = 0;
let playerToMarry = null;
let game = [];
io.sockets.on('connection', function(client) {

    client.on('join', function() {
        if (!playerToMarry) {
            playerToMarry = client;
        } else {
            roomno++
            let id = "ROOM" + roomno;
            playerToMarry.join(id);
            client.join(id);
            client.emit("start");
            playerToMarry.emit("start");
            setGame(client, playerToMarry,id);
            playerToMarry = null;
        }

    });

    client.on('action', function(data) {
        console.log(data);
        client.emit('server_action', {
            type: data.action,
            isMe: true
        });
        Object.keys(client.rooms).forEach(function(room) {
            client.broadcast.to(room).emit('server_action', {
                type: data.action,
                isMe: false
            });
        });
    });
        client.on('disconnect', function () {
            // if(getGameByClient(client).length>0){
            //         console.log('DISCONNESSO!!! ');
            //         let game = getGameByClient(client);
            //         client.broadcast.in(game.roomId).emit('disconnect',game);
            //         removeGame(client);
            //         client.disconnect();
            // }
    });
});
server.listen(PORT, function() {
    console.log('Listening on ' + server.address().port);
});

function setGame(client1, client2,roomId) {
    orders = ["Margherita", "Capricciosa", "Diavola", "Margherita"]
    match = {
        orders,
        client1: client1.id,
        client2: client2.id,
        pizza1: 0,
        pizza2: 0,
        roomId
    }
    game.push(match);
}

function getGameByClient(client) {
    return game.filter(match => match.client1 === client.id || match.client2 === client.id);
}
function getGameByRoom(roomId) {
    return game.filter(match => match.roomId === roomId);
}
function removeGame(client) {
    game.splice(game.indexOf(getGameByClient(client)), 1);
}