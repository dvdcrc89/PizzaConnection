PizzaConnection.Game = function() {}
PizzaConnection.Game = {

    create: function() {
    
        this.table = game.add.sprite(0, 270, 'table');
        this.table.scale.setTo(0.4);
        // this.pizza = game.add.sprite(100, 400, 'pizza');
        // this.pizza.scale.setTo(0.60);
        this.ingredients = new Ingredients(game);
        this.pizzaDresser = new PizzaDresser(game, new Pizza(game,100,400,0.6));
        this.playerAction = new PlayerAction(game)
        console.log(this.playerAction)
        this.mozzarella = new Command(game,
                                this.playerAction,
                                Phaser.Keyboard.SPACEBAR,
                                this.playerAction.get().ADD_MOZZARELLA
                                );
        this.c = new Controller(game);
        this.c.addCommand(this.mozzarella);    
    },

    update: function(){
        this.c.listen();
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        this.pizzaDresser.season_action(this.ingredients.getAll().mozzarella);

        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            this.pizzaDresser.season_action(this.ingredients.getAll().sauce);
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            this.pizzaDresser.season_action(this.ingredients.getAll().ham);
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            this.pizzaDresser.setPizza(new Pizza(game,100,400,0.6));
        }
    },
    // season: function(pizza,ingredient){
        
    //         console.log(this.pizza.x);
    //         this.oregano =  game.add.sprite(pizza.x+25,pizza.y-(220), ingredient);
    //         this.oregano.scale.setTo(0.7);
    //         this.oregano.animations.add('season');
    //         this.oregano.animations.play('season', 18, false);
       
    //         console.log(this.oregano.x,this.oregano.y);

        
    // }
}