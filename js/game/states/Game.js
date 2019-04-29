PizzaConnection.Game = function(orders) {
}
PizzaConnection.Game.prototype = {
    create: function() { 
        let background =  game.add.sprite( 0, 0 , 'm_background');
        background.scale.setTo(0.6);
        let rnd = game.add.text(game.world.centerX-300,game.world.centerY-200,"ROUND "+ globalMatch.round,{
            font: "bold 100px Sans", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle"
        
        })

        setTimeout(()=>{
            background.kill();
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