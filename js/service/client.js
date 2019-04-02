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
})
Client.socket.on("gameover",function(isWinner){
    console.log("received")
    game.state.start('Menu');
;
})
Client.socket.on("disconnect",function(){
    console.log("player has disconnet");
})

