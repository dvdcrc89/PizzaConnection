PizzaConnection.Win = function() {
}
PizzaConnection.Win.prototype = {
    create: function() { 
        game.add.text(200,400,"You Win!",{
            font: "bold 64px Arial", fill: "#4d4d4d4", boundsAlignH: "center", boundsAlignV: "middle"
        })
},

    update: function(){ },

}