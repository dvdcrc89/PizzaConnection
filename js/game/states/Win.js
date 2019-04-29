PizzaConnection.Win = function() {
}
PizzaConnection.Win.prototype = {
    create: function() { 
        this.background =  game.add.sprite( 0, 0 , 'm_background');
        this.background.scale.setTo(0.6);
        this.menuAction = new MenuActions(game);

        this.backmenu=  new Command(
            game,
            this.menuAction,
            Phaser.Keyboard.ENTER,
            this.menuAction.get().BACK_TO_MENU,
        )
        
        this.backmenu.createButton(50, 50,100,50, 'b_backmenu');
        this.youwin =  game.add.sprite( game.world.centerX -280, game.world.centerY -150, 'youwin');
        this.youwin.scale.setTo(0.6);        
        game.add.tween(this.youwin).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.pizzaBack = game.add.sprite(1500,600,'m_pizzaBack')
        this.pizzaBack.anchor.setTo(0.5)
        this.pizzaBack.scale.setTo(0.5)
        game.add.tween(this.pizzaBack).from( { x: -200 }, 10000, Phaser.Easing.Linear.Out, true).loop(true);
        win = game.add.audio('a_win');
        win.play();
},

    update: function(){
        this.pizzaBack.angle += 2;
     },

}