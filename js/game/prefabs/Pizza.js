Pizza = function(game, x, y, scale,key) {
    this.game = game;
    Phaser.Sprite.call(this, game, x, y, key);
    game.add.existing(this);
    this.scale.setTo(scale);
    this.ingredients = game.add.group();
    this.ingredientsArray = []

    this.addIngredient = function(ingredient, ingredientKey) {
        this.ingredients.add(ingredient);
        this.ingredientsArray.push(ingredientKey);
    }

    this.hasIngredient = function(ingredientKey) {
        return this.ingredientsArray.includes(ingredientKey) ? true : false;
    }
    this.getIngredients = function(){
        return this.ingredientsArray;
    }

}
Pizza.prototype = Object.create(Phaser.Sprite.prototype);
Pizza.prototype.constructor = Pizza;