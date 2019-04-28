PizzaConnection.Menu = {
        preload: function() {
        this.menuAction = new MenuActions(game)
        music = game.add.audio('a_menu');
        music.play();
        this.background =  game.add.sprite( 0, 0 , 'm_background');
        this.background.scale.setTo(0.6);
        this.title = game.add.sprite(game.world.centerX,game.world.centerY - 100,'m_title')
        this.title.scale.setTo(0.5)
        this.title.anchor.setTo(0.5)
        game.add.tween(this.title).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.pizzaBack = game.add.sprite(-10,600,'m_pizzaBack')
        this.pizzaBack.anchor.setTo(0.5)
        this.pizzaBack.scale.setTo(0.5)
        game.add.tween(this.pizzaBack).from( { x: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.start = new Command (game,
        this.menuAction,
        Phaser.Keyboard.ENTER,
        this.menuAction.get().START_GAME).createButton(game.world.centerX,game.world.centerY + 50, 358,133, 'm_start',);
            // this.start.button.alpha = 0;
            // game.add.tween(this.start.button).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
    },
    create: function() {
        // this.preloadBar.cropEnabled = false;
    },
    update: function() {
        this.pizzaBack.angle += 1;
    },
};