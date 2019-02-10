
PizzaDresser = function(game,pizza) {
    this.game = game;
    this.pizza = pizza;



this.season_action = function(ingredient){
    if(!this.pizza.hasIngredient(ingredient))
        this.pizza.addIngredient(
            new Ingredient(this.game,this.pizza,ingredient,25,-220,0.7),ingredient
            );
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

