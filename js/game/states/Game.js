PizzaConnection.Game = function(orders) {
}
PizzaConnection.Game.prototype = {
    create: function() { 
        this.uiBuilder = new UIBuilder(game);
        this.uiBuilder.createStage();
        this.uiBuilder.setupOrderList();
        this.uiBuilder.createButtons();
        backMusic = game.add.audio('a_game');
        backMusic.play();
},

    update: function(){ },

}