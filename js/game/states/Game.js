PizzaConnection.Game = function() {}
PizzaConnection.Game = {

    create: function() {

        this.pizza = game.add.sprite(0, 330, 'pizza');
        this.pizza.scale.setTo(0.80);

        this.pizzaEnemy = game.add.sprite(game.width-360, 330, 'pizza');
        this.pizzaEnemy.scale.setTo(0.8);
        
    },

    update: function(){
     
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        this.season(this.pizza,"s_sauce");
        this.season(this.pizzaEnemy,"s_sauce");

        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            this.season(this.pizza,"s_mozzarella");
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            this.season(this.pizza,"s_basil");
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            this.season(this.pizza,"s_ham");
        }
    },
    season: function(pizza,ingredient){
        
            console.log(this.pizza.x);
            this.oregano =  game.add.sprite(pizza.x+40,pizza.y-(284), ingredient);
            this.oregano.scale.setTo(0.9);
            this.oregano.animations.add('season');
            this.oregano.animations.play('season', 18, false);
       
            console.log(this.oregano.x,this.oregano.y);

        
    }
}