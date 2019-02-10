Ingredients = function(game) {

    this.ingredients = {
        mozzarella: "s_mozzarella",
        basil: "s_basil",
        ham: "s_ham",
        artichokes: "s_artichokes",
        mushroom: "s_mushroom",
        oregano: "s_oregano",
        salami: "s_salami",
        sauce: "s_sauce",
    }

    this.getAll = function() {
        return this.ingredients;
    }

    this.compose = function(ingredients) {
        this.ingredients = ingredients;
    }

}
Ingredients.prototype = Object.create(Phaser.Sprite.prototype);
Ingredients.prototype.constructor = Ingredients;