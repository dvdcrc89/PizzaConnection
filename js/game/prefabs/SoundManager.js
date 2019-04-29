SoundManager = function(game) {
this.game = game;
this.sounds = {
      MENU_SOUND: this.game.add.audio('a_menu'),
      GAME_SOUND: this.game.add.audio('a_game'),
      YES_SOUND: this.game.add.audio('a_yes'),
      NO_SOUND: this.game.add.audio('a_no'),
      WIN_SOUND: this.game.add.audio('a_win'),
      LOSE_SOUND: this.game.add.audio('a_lose'),

  }

  this.get = function(){
      return this.sounds;
  }

  this.play = function(sound){
      let volume = 1
    if(sound === this.sounds.MENU_SOUND || sound === this.sounds.GAME_SOUND){
        sound.loop = true;
        volume = 0.1;
    }  
    console.log(sound);
    sound.volume = volume;
    sound.play(); 
  }

  this.stop = function(sound){
      sound.stop();
  } 

  this.stopAll = function(){
    Object.keys(this.sounds).forEach(function (key) {
        this.get()[key].stop();
     }.bind(this));
  }
}
SoundManager.prototype = Object.create(Phaser.Sprite.prototype);
SoundManager.prototype.constructor = SoundManager;