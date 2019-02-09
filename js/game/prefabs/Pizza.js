
Pizza = function(game,x,y,scale) {
    this.game = game;
    Phaser.Sprite.call(this, game, x, y, "pizza");
    game.add.existing(this);
    this.scale.setTo(scale);
    this.ingredients = game.add.group();

    this.addIngredient = function(ingredient){
        this.ingredients.add(ingredient);
    }




}
Pizza.prototype = Object.create(Phaser.Sprite.prototype);
Pizza.prototype.constructor = Pizza;