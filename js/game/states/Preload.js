PizzaConnection.Preload = {
    preload: function() {
        this.ready = false;
        // this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        // this.splash.anchor.setTo(0.5);
        // this.splash.scale.setTo(1)

        // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'preloadbar');
        // this.preloadBar.anchor.setTo(0.5);

        // this.load.setPreloadSprite(this.preloadBar);

        // this.load.image('background', 'assets/images/background.png');

        //load season sprites

        this.load.spritesheet('s_artichokes', 'assets/images/seasoning/s_artichokes.png', 315, 510, 13);
        this.load.spritesheet('s_basil', 'assets/images/seasoning/s_basil.png', 293, 510, 13);
        this.load.spritesheet('s_ham', 'assets/images/seasoning/s_ham.png', 315, 510, 13);
        this.load.spritesheet('s_mozzarella', 'assets/images/seasoning/s_mozzarella.png', 313, 510, 13);
        this.load.spritesheet('s_mushroom', 'assets/images/seasoning/s_mushroom.png', 315, 510, 13);
        this.load.spritesheet('s_oregano', 'assets/images/seasoning/s_oregano.png', 315, 510, 13);
        this.load.spritesheet('s_salami', 'assets/images/seasoning/s_salami.png', 315, 510, 13);
        this.load.spritesheet('s_sauce', 'assets/images/seasoning/s_sauce.png', 315, 510, 13);
        this.load.image('pizza', 'assets/images/pizza.png');
        this.load.image('table', 'assets/images/table.png');

        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function() {
        // this.preloadBar.cropEnabled = false;
    },
    update: function() {
        if (this.ready === true) {
            this.state.start('Game');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};