Button = function(game,command,keyFrame) {

    this.game = game;
    this.command = command;
    this.keyFrame = keyFrame;
    this.button;
    this.fn = ()=>this.command.execute();
    
    this.createButton = function(x,y,width,height) {
        let button = game.add.button(x, y, this.keyFrame, this.fn, this);
        button.anchor.setTo(0.5, 0.5);
        button.width = width;
        button.height = height;
        this.button = button;

    }
}
Button.prototype = Object.create(Phaser.Sprite.prototype);
Button.prototype.constructor = Button;