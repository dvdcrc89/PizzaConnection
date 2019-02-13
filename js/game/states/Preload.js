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
        this.load.spritesheet('person_1', 'assets/images/people/person_1.png', 300, 416, 2);
        this.load.spritesheet('person_2', 'assets/images/people/person_2.png', 300, 416, 2);
        this.load.spritesheet('person_3', 'assets/images/people/person_3.png', 300, 416, 2);


        this.load.image('pizza', 'assets/images/pizza.png');
        this.load.image('table', 'assets/images/table.png');
        this.load.image('background', 'assets/images/background.png');

        //buttons
        this.load.image('b_artichokes', 'assets/images/buttons/b_artichokes.png');
        this.load.image('b_basil', 'assets/images/buttons/b_basil.png');
        this.load.image('b_ham', 'assets/images/buttons/b_ham.png');
        this.load.image('b_salami', 'assets/images/buttons/b_salami.png');
        this.load.image('b_oregano', 'assets/images/buttons/b_oregano.png');
        this.load.image('b_mushroom', 'assets/images/buttons/b_mushroom.png');
        this.load.image('b_mozzarella', 'assets/images/buttons/b_mozzarella.png');
        this.load.image('b_sauce', 'assets/images/buttons/b_sauce.png');
        this.load.image('b_oven', 'assets/images/buttons/b_oven.png');
        this.load.image('b_delete', 'assets/images/buttons/b_delete.png');

        this.load.image('o_people', 'assets/images/o_people.png');
        this.load.image('o_table', 'assets/images/o_table.png');


        this.load.spritesheet('opponent', 'assets/images/opponent.png', 420, 399, 3);





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