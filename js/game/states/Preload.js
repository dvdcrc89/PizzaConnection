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

        this.load.image('youwin', 'assets/images/buttons/youwin.png');
        this.load.image('youlose', 'assets/images/buttons/youlose.png');

        this.load.image('me','assets/images/score/p_pinpoint.png');
        this.load.image('him','assets/images/score/o_pinpoint.png')

        this.load.image('pizza', 'assets/images/pizza.png');
        this.load.image('o_pizza', 'assets/images/opponent/o_pizza.png')
        this.load.image('table', 'assets/images/table.png');
        this.load.image('background', 'assets/images/background.png');
        this.load.image('pizzaList','assets/images/pizzaList.png')
        this.load.image('orderList','assets/images/orderList.png')
        this.load.image('o_viewBack','assets/images/opponent/o_viewBack.png')


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
        this.load.image('b_menu','assets/images/buttons/b_menu.png')
        this.load.image('b_backmenu','assets/images/buttons/b_backmenu.png')

        //menu
        this.load.image('m_background', 'assets/images/buttons/background.png');
        this.load.image('m_start', 'assets/images/buttons/start.png');
        this.load.image('m_option', 'assets/images/buttons/option.png');
        this.load.image('m_title', 'assets/images/buttons/title.png');
        this.load.image('m_pizzaBack', 'assets/images/buttons/pizzaBack.png');

        this.load.image('scoreboard', 'assets/images/roundBoard.png');
        this.load.image('round', 'assets/images/round.png');

        this.load.image('o_people', 'assets/images/opponent/o_people.png');
        this.load.image('o_table', 'assets/images/o_table.png');

        this.load.image('o_0r','assets/images/score/o_0x.png');
        this.load.image('o_1r','assets/images/score/o_1x.png');
        this.load.image('o_2r','assets/images/score/o_2x.png');
        this.load.image('p_0r','assets/images/score/p_0x.png');
        this.load.image('p_1r','assets/images/score/p_1x.png');
        this.load.image('p_2r','assets/images/score/p_2x.png');
        
        this.load.spritesheet('opponent', 'assets/images/opponent/opponent.png', 420, 399, 3);

        this.load.audio('a_menu', 'assets/sounds/menu.mp3')
        this.load.audio('a_game', 'assets/sounds/game.mp3')
        this.load.audio('a_yes', 'assets/sounds/yes.wav')
        this.load.audio('a_no', 'assets/sounds/no.wav')
        this.load.audio('a_win', 'assets/sounds/win.wav')
        this.load.audio('a_lose', 'assets/sounds/lose.wav')








        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function() {
        // this.preloadBar.cropEnabled = false;

    },
    update: function() {
      
        if (this.ready === true) {
            soundManager = new SoundManager(game);
            this.state.start('Menu');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};