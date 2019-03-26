PizzaConnection.Menu = {
        preload: function() {
        this.background =  game.add.sprite( 0, 0 , 'm_background');
        this.background.scale.setTo(0.6);
        this.start = game.add.sprite(game.world.centerX,game.world.centerY + 50, 'm_start')
        this.start.scale.setTo(0.7)
        this.start.anchor.setTo(0.5)
        this.start.alpha = 0;
        game.add.tween(this.start).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);        
        this.title = game.add.sprite(game.world.centerX,game.world.centerY - 100,'m_title')
        this.title.scale.setTo(0.5)
        this.title.anchor.setTo(0.5)
        game.add.tween(this.title).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.pizzaBack = game.add.sprite(-10,600,'m_pizzaBack')
        this.pizzaBack.anchor.setTo(0.5)
        this.pizzaBack.scale.setTo(0.5)
        game.add.tween(this.pizzaBack).from( { x: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
    },
    create: function() {
        // this.preloadBar.cropEnabled = false;
    },
    update: function() {
        this.pizzaBack.angle += 1;
            // this.state.start('Game');
    },
    onLoadComplete: function() {

    }
};