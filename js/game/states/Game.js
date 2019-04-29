PizzaConnection.Game = function(orders) {
}
PizzaConnection.Game.prototype = {
    create: function() { 
        let round =  game.add.sprite( 0, 5 , 'round');
        let rnd = game.add.text(game.world.centerX-250,game.world.centerY + 200,"ROUND "+ globalMatch.round,{
            font: "bold 100px Sans", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle"
        
        })

        setTimeout(()=>{
            round.kill();
            rnd.kill();
            this.uiBuilder = new UIBuilder(game);
            this.uiBuilder.createStage();
            this.uiBuilder.setupOrderList();
            this.uiBuilder.createButtons();
            backMusic = game.add.audio('a_game');
            backMusic.play();
            this.uiBuilder.createOrder();
            this.uiBuilder.showRounds();
        },3000)
        
},

    update: function(){ },

}