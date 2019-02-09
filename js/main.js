let height = window.innerHeight;
let width = window.innerWidth
console.log(height,width)
var game = new Phaser.Game(width,height , Phaser.AUTO, '');

game.state.add('Boot', PizzaConnection.Boot);
game.state.add('Preloader', PizzaConnection.Preload);
game.state.add('Game', PizzaConnection.Game);
// game.state.add('MainMenu', JustRun.MainMenu);
// game.state.add('GameOver', JustRun.GameOver);


game.state.start('Boot');