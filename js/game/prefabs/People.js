People = function(game,startY) {

    this.game = game;
    this.people = game.add.group();
    this.startY = startY;


    this.addXPeople = function(num,row){
        for(let i=row;i>=0;i--){ 
            for(let i2=0;i2<(num-i);i2++){
                let x = 50+(this.game.width-100)/num *i2 + i*77;
                let size = (Math.random()*10-5)/100;
                this.addPerson(x,startY+i*30,0.5+size-i/9);
            }
        }
    }
    this.addPerson = function(x,y,scale) {
        let key = "person_"+(Math.floor(Math.random()*3)+1);
        let person = new Person(this.game,x,y,scale,key);
        this.people.add(person);
    }

}
People.prototype = Object.create(Phaser.Sprite.prototype);
People.prototype.constructor = People;

Person = function(game,x,y,scale,key) {

    this.game = game;
    Phaser.Sprite.call(this,game, x,y,key);
    this.scale.setTo(scale);
    this.animations.add('move');
    this.animations.play('move', 1, true);
    this.animate = function(){
        this.animations.play('move', 1, false);

    }

}
Person.prototype = Object.create(Phaser.Sprite.prototype);
Person.prototype.constructor = Person;