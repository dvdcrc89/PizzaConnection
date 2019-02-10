Command = function(game, playerAction, key, action) {

    this.game = game;
    this.key = this.game.input.keyboard.addKey(key);
    this.action = action;
    this.playerAction = playerAction;

    this.execute = function() {
        this.playerAction.dispatch(this.action);
    }

    this.getKey = function() {
        return this.key;
    }

    this.setKey = function(key) {
        this.key = key;
    }
}
Command.prototype = Object.create(Phaser.Sprite.prototype);
Command.prototype.constructor = Command;