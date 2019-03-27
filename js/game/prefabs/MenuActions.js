MenuActions = function(game) {
    this.game = game;

    const actions = {
        START_GAME: "[MENU] START GAME",
    }


    this.get = function() {
        return actions;
    }

    this.dispatch = function(action) {
        switch (action) {
            case actions.START_GAME:
                game.state.start('Loading');
                Client.socket.emit("join");
                break;

        }
    }


}
