const PizzaConnection = function() {};
PizzaConnection.Menu = {
    preload: function() {

    },
    create: function() {
        this.game.stage.backgroundColor = '#fff';
        this.input.maxPointers = 1;
        console.log("i am in the menu")
        this.state.start('Game');
    }
};