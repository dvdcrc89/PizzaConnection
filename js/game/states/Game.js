PizzaConnection.Game = function() {}
PizzaConnection.Game = {

    create: function() {
        this.background = game.add.tileSprite(0, 0, game.width, 500 - 1, 'background');
        this.people = new People(game,300);
        this.people.addXPeople(7,2);
        this.table = game.add.sprite(0, 470, 'table');
        this.table.scale.setTo(0.6);
        this.playerAction = new PlayerAction(game);
        console.log(this.playerAction)
        this.c = new Controller(game);

             this.mozzButton  = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.ONE,
             this.playerAction.get().ADD_MOZZARELLA),'b_mozzarella').createButton(430,500,50,50);
            
             this.mozzButton1 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.TWO,
             this.playerAction.get().ADD_BASIL),'b_basil').createButton(500,500,50,50);
            
             this.mozzButton2 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.THREE,
             this.playerAction.get().ADD_OREGANO),'b_oregano').createButton(570,500,50,50);
            
             this.mozzButton3 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.FOUR,
             this.playerAction.get().ADD_HAM),'b_ham').createButton(640,500,50,50);
            
             this.mozzButton4 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.FIVE,
             this.playerAction.get().ADD_SAUCE),'b_sauce').createButton(430,560,50,50);
            
             this.mozzButton5 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.SIX,
             this.playerAction.get().ADD_SALAMI),'b_salami').createButton(500,560,50,50);
            
             this.mozzButton6 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.SEVEN,
             this.playerAction.get().ADD_ARTICHOKES),'b_artichokes').createButton(570,560,50,50);
            
             this.mozzButton7 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.EIGHT,
             this.playerAction.get().ADD_MUSHROOM),'b_mushroom').createButton(640,560,50,50);
            
             this.mozzButton8 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.SPACEBAR,
             this.playerAction.get().TRASH_PIZZA),'b_oven').createButton(476,450,70,40);
            
             this.mozzButton9 = new Button(game,new Command(game,
             this.playerAction,
             Phaser.Keyboard.ENTER,
             this.playerAction.get().TRASH_PIZZA),'b_delete').createButton(590,450,70,40);
        
    },

    update: function(){
        this.c.listen();
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            this.pizzaDresser.setPizza(new Pizza(game,100,400,0.6));
        }
    },
}