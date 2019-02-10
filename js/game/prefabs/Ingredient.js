Ingredient = function(game, pizza, ingredient, deltaX, deltaY, scale) {
    this.game = game;
    this.pizza = pizza;
    Phaser.Sprite.call(this, this.game, this.pizza.x + deltaX, this.pizza.y + deltaY, ingredient);
    this.scale.setTo(scale);
    this.animations.add('season');
    this.animations.play('season', 23, false);

}
Ingredient.prototype = Object.create(Phaser.Sprite.prototype);
Ingredient.prototype.constructor = Ingredient;