let height = window.innerHeight;
if(height>783) height=783
let width = window.innerWidth
if (width>1366*2) width=1366*2
let game = new Phaser.Game(800,650 , Phaser.AUTO, '');

game.state.add('Boot', PizzaConnection.Boot);
game.state.add('Preloader', PizzaConnection.Preload);
game.state.add('Game', PizzaConnection.Game);
// game.state.add('MainMenu', JustRun.MainMenu);
// game.state.add('GameOver', JustRun.GameOver);


game.state.start('Boot');