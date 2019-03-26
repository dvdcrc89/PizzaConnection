PizzaConnection.Menu = {
    preload: function() {
        this.ready = true;

    },
    create: function() {
        // this.preloadBar.cropEnabled = false;
    },
    update: function() {
        if (this.ready === true) {
            this.state.start('Game');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};