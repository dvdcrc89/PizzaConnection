PlayerAction = function(game) {
    this.game = game;
    this.pizzaDresser = new PizzaDresser(game, new Pizza(game,100,400,0.6));;
    this.ingredients = new Ingredients(game);

    const actions = {
        ADD_MOZZARELLA: "[SEASON] ADD MOZZARELLA",
        ADD_BASIL: "[SEASON] ADD BASIL",
        ADD_ARTICHOKES: "[SEASON] ADD ARTICHOKES",
        ADD_HAM: "[SEASON] ADD HAM",
        ADD_MUSHROOM: "[SEASON] ADD MUSHROOM",
        ADD_OREGANO: "[SEASON] ADD OREGANO",
        ADD_SALAMI: "[SEASON] ADD SALAMI",
        ADD_SAUCE: "[SEASON] ADD SAUCE",
        TRASH_PIZZA: "[PIZZA] TRASH PIZZA AWAY",
        PIZZA_COMPLETE: "[PIZZA] DELIVER PIZZA",
    }


    this.get = function() {
        return actions;
    }

    this.dispatch = function(action) {
        switch (action) {
            case actions.ADD_MOZZARELLA:
                this.pizzaDresser.season_action(this.ingredients.getAll().mozzarella);
                break;
            case actions.ADD_BASIL:
                this.pizzaDresser.season_action(this.ingredients.getAll().basil);
                break;
            case actions.ADD_ARTICHOKES:
                this.pizzaDresser.season_action(this.ingredients.getAll().artichokes);
                break;
            case actions.ADD_HAM:
                this.pizzaDresser.season_action(this.ingredients.getAll().ham);
                break;
            case actions.ADD_MUSHROOM:
                this.pizzaDresser.season_action(this.ingredients.getAll().mushroom);
                break;
            case actions.ADD_OREGANO:
                this.pizzaDresser.season_action(this.ingredients.getAll().oregano);
                break;
            case actions.ADD_SALAMI:
                this.pizzaDresser.season_action(this.ingredients.getAll().salami);
                break;
            case actions.ADD_SAUCE:
                this.pizzaDresser.season_action(this.ingredients.getAll().sauce);
                break;
            case actions.TRASH_PIZZA:
                this.pizzaDresser.setPizza(new Pizza(game,100,400,0.6));
                break;
            case actions.PIZZA_COMPLETE:
                break;

        }
    }


}
PlayerAction.prototype = Object.create(Phaser.Sprite.prototype);
PlayerAction.prototype.ructor = PlayerAction;