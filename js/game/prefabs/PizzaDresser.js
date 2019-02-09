
PizzaDresser = function(game,pizza) {
    this.game = game;
    this.pizza = pizza;



this.season_action = function(ingredient){
        let dress = game.add.sprite(this.pizza.x+25,this.pizza.y-(220), ingredient);
        dress.scale.setTo(0.7);
        dress.animations.add('season');
        dress.animations.play('season', 23, false);
        this.pizza.addIngredient(dress);

    }

 this.getPizza = function(){
     return this.pizza;
 }   

 this.setPizza = function(pizza){
     this.pizza.destroy();
     this.pizza = pizza;
 }
}
PizzaDresser.prototype = Object.create(Phaser.Sprite.prototype);
PizzaDresser.prototype.constructor = PizzaDresser;