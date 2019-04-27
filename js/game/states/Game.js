PizzaConnection.Game = function(orders) {
}
PizzaConnection.Game.prototype = {
    create: function() { 
        let rnd = game.add.text(200,400,"ROUND "+ golbalMatch.round,{
            font: "bold 64px Arial", fill: "#4d4d4d4", boundsAlignH: "center", boundsAlignV: "middle"
        })
        setTimeout(()=>{
            rnd.kill();
            this.uiBuilder = new UIBuilder(game);
            this.uiBuilder.createStage();
            this.uiBuilder.setupOrderList();
            this.uiBuilder.createButtons();
            backMusic = game.add.audio('a_game');
            backMusic.play();
            this.uiBuilder.createOrder()
        },3000)
        
},

    update: function(){ },

}