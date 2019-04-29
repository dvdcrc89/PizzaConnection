MenuActions = function(game) {
    this.game = game;

    const actions = {
        START_GAME: "[MENU] START GAME",
        BACK_TO_MENU: "[MENU] BACK TO MENU",
    }


    this.get = function() {
        return actions;
    }

    this.dispatch = function(action) {
        switch (action) {
            case actions.BACK_TO_MENU:
            console.log("Menu");
            globalMatch = {};
            isP1 = null;
            game.state.start('Menu');
                break;
            case actions.START_GAME:
                // game.scale.startFullScreen(false);
                game.state.start('Loading');
                Client.socket.emit("join");
                break;
        }
    }


}
