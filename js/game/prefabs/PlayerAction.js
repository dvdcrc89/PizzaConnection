PlayerAction = function(game) {
    
     const actions = {
        ADD_MOZZARELLA : "[SEASON] ADD MOZZARELLA",
        ADD_BASIL : "[SEASON] ADD BASIL",
        ADD_ARTICHOKES : "[SEASON] ADD ARTICHOKES",
        ADD_HAM : "[SEASON] ADD HAM",
        ADD_MUSHROOM : "[SEASON] ADD MUSHROOM",
        ADD_OREGANO : "[SEASON] ADD MOZZARELLA",
        ADD_SALAMI : "[SEASON] ADD MOZZARELLA",
        ADD_SAUCE : "[SEASON] ADD MOZZARELLA",
        THROW_PIZZA : "[PIZZA] TROW PIZZA AWAY",
        PIZZA_COMPLETE : "[PIZZA] DELIVER PIZZA",
    }


    this.get = function(){
        return actions;
    }

    this.dispatch = function(action){
        switch(action){
            case actions.ADD_MOZZARELLA : console.log("add mozzarella")
                                  break;  

        }
    }


}
PlayerAction.prototype = Object.create(Phaser.Sprite.prototype);
PlayerAction.prototype.ructor = PlayerAction;