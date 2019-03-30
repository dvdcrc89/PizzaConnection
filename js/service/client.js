var Client = {};
// var playerAction = new PlayerAction(game)
Client.socket = io('http://localhost:55000');

Client.sendAction = function(action,pizza){
    console.log("test sent");
    Client.socket.emit("action",{action,pizza});
};
Client.socket.on("start",function(){
    console.log("received")
    game.state.start('Game');
;
})
Client.socket.on("gameover",function(isWinner){
    console.log("received")
    game.state.start('Menu');
;
})
Client.socket.on("disconnect",function(){
    console.log("player has disconnet");
})
// Client.askNewPlayer = function(){
//     Client.socket.emit('newplayer');
// };

// Client.sendClick = function(x,y){
//   Client.socket.emit('click',{x:x,y:y});
// };

// // Client.socket.on('server_action',function(data){
// //     PlayerAction.dispatch2(data);
// // });

// Client.socket.on('allplayers',function(data){
//     console.log(data);
//     for(var i = 0; i < data.length; i++){
//         Game.addNewPlayer(data[i].id,data[i].x,data[i].y);
//     }

//     Client.socket.on('move',function(data){
//         Game.movePlayer(data.id,data.x,data.y);
//     });

//     Client.socket.on('remove',function(id){
//         Game.removePlayer(id);
//     });
// });