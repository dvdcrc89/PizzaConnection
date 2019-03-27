PlayerAction = function(game) {
    this.game = game;
    this.pizzaDresser = new PizzaDresser(game, new Pizza(game,100,400,0.6,'pizza'));
    this.pizzaDresser2 = new PizzaDresser(game, new Pizza(game,820,60,0.6, 'o_pizza'));
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
        Client.sendAction(action,this.pizzaDresser.getPizzaString());
     }
    
    Client.socket.on('server_action',function(action){
        console.log(action);
        switch (action.type) {
            case actions.ADD_MOZZARELLA:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().mozzarella);
                break;
            case actions.ADD_BASIL:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().basil);
                break;
            case actions.ADD_ARTICHOKES:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().artichokes);
                break;
            case actions.ADD_HAM:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().ham);
                break;
            case actions.ADD_MUSHROOM:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().mushroom);
                break;
            case actions.ADD_OREGANO:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().oregano);
                break;
            case actions.ADD_SALAMI:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().salami);
                break;
            case actions.ADD_SAUCE:
                this.dresserSelector(action.isMe).season_action(this.ingredients.getAll().sauce);
                break;
            case actions.TRASH_PIZZA:
                let dresserSelector = this.dresserSelector(action.isMe);
                let key = action.isMe ? 'pizza' : 'o_pizza';
                dresserSelector.setPizza(
                    new Pizza(game,dresserSelector.getPizza().x,dresserSelector.getPizza().y,0.6,key));
                break;
            case actions.PIZZA_COMPLETE:
                break;

        }
    }.bind(this));

    this.dresserSelector = function(isMe){
        return isMe ? this.pizzaDresser : this.pizzaDresser2;
    }

}
PlayerAction.prototype = Object.create(Phaser.Sprite.prototype);
PlayerAction.prototype.ructor = PlayerAction;