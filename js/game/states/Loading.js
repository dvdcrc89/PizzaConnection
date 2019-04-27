PizzaConnection.Loading = function(){}
PizzaConnection.Loading = {
    preload: function() {
        music.stop()
        this.background =  game.add.sprite( 0, 0 , 'm_background');
        this.background.scale.setTo(0.6);
        this.pizzaBack = game.add.sprite(game.world.centerX,300,'m_pizzaBack')
        this.pizzaBack.anchor.setTo(0.5)
        this.pizzaBack.scale.setTo(0.5)
        game.add.tween(this.pizzaBack).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        game.add.text(200,400,"Looking for an opponent",{
            font: "bold 64px Arial", fill: "#4d4d4d4", boundsAlignH: "center", boundsAlignV: "middle"
        })
    },
    update: function() {
        this.pizzaBack.angle += 1;
    },
}