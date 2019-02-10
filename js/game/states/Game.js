PizzaConnection.Game = function() {}
PizzaConnection.Game = {

    create: function() {
        this.background = game.add.tileSprite(0, 0, game.width, 500 - 1, 'background');
        this.people = new People(game,300);
        this.people.addXPeople(7,2);
        this.table = game.add.sprite(0, 470, 'table');
        this.table.scale.setTo(0.6);
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
            this.pizzaDresser.season_action(this.ingredients.getAll().oregano);
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            this.pizzaDresser.setPizza(new Pizza(game,100,400,0.6));
        }
    },
}