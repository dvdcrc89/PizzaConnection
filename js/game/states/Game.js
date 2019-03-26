PizzaConnection.Game = function() {}
PizzaConnection.Game = {

    create: function() {
        // this.background = game.add.tileSprite(0, 0, game.width, 500 - 1, 'background');

        game.stage.backgroundColor = "#4488AA";
       
        this.opponent =  game.add.sprite(600, 120, 'opponent');
        this.opponent.scale.setTo(0.35)
        this.opponent.animations.add("move");
        this.opponent.animations.play("move",2,true);
        this.o_table = game.add.sprite(0, 250, 'o_table');
        this.o_table.scale.setTo(0.6)
        this.opeople = game.add.sprite(120, 230, 'o_people');
        this.opeople.scale.setTo(0.5);
        this.people = new People(game,300);
        this.people.addXPeople(7,2);
        this.table = game.add.sprite(0, 470, 'table');
        this.table.scale.setTo(0.6);
        this.playerAction = new PlayerAction(game);
        console.log(this.playerAction)
        this.c = new Controller(game);

             this.mozzButton  = new Command(game,this.playerAction,Phaser.Keyboard.ONE,this.playerAction.get().ADD_MOZZARELLA).createButton(430,500,50,50,'b_mozzarella','b_salami');
            
             this.mozzButton1 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.TWO,
             this.playerAction.get().ADD_BASIL).createButton(500,500,50,50,'b_basil');
            
             this.mozzButton2 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.THREE,
             this.playerAction.get().ADD_OREGANO).createButton(570,500,50,50,'b_oregano');
            
             this.mozzButton3 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.FOUR,
             this.playerAction.get().ADD_HAM).createButton(640,500,50,50,'b_ham');
            
             this.mozzButton4 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.FIVE,
             this.playerAction.get().ADD_SAUCE).createButton(430,560,50,50,'b_sauce');
            
             this.mozzButton5 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.SIX,
             this.playerAction.get().ADD_SALAMI).createButton(500,560,50,50,'b_salami');
            
             this.mozzButton6 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.SEVEN,
             this.playerAction.get().ADD_ARTICHOKES).createButton(570,560,50,50,'b_artichokes');
            
             this.mozzButton7 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.EIGHT,
             this.playerAction.get().ADD_MUSHROOM).createButton(640,560,50,50,'b_mushroom');
            
             this.mozzButton8 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.SPACEBAR,
             this.playerAction.get().TRASH_PIZZA).createButton(476,450,70,40,'b_oven');
            
             this.mozzButton9 = new Command(game,
             this.playerAction,
             Phaser.Keyboard.ENTER,
             this.playerAction.get().TRASH_PIZZA).createButton(590,450,70,40,'b_delete');
            
             console.log(this.mozzButton3);
       
             

    },

    update: function(){
        this.c.listen();
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            this.pizzaDresser.setPizza(new Pizza(game,100,400,0.6));
        }
    },
}