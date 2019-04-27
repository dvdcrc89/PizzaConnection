var Client = {};
// var playerAction = new PlayerAction(game)
Client.socket = io('https://dvdcrc89.github.io/PizzaConnection/');

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

