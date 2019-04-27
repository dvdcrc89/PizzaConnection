let height = window.innerHeight;
if(height>783) height=783
let width = window.innerWidth
if (width>1366*2) width=1366*2
console.log(window.innerHeight);
let game = new Phaser.Game(1150,653 , Phaser.AUTO, '');
let golbalMatch = {}
game.state.add('Boot', PizzaConnection.Boot);
game.state.add('Menu', PizzaConnection.Menu);
game.state.add('Preloader', PizzaConnection.Preload);
game.state.add('Game', PizzaConnection.Game);
game.state.add('Loading', PizzaConnection.Loading);
game.state.add('Win', PizzaConnection.Win);
game.state.add('Lose', PizzaConnection.Lose);
// game.state.add('MainMenu', JustRun.MainMenu);
// game.state.add('GameOver', JustRun.GameOver);


game.state.start('Boot');