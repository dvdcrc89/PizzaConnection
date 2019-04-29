UIBuilder = function(game) {
    this.game = game;


    this.createStage = function() {
        this.game.stage.backgroundColor = "#4488AA";
        this.opponent = game.add.sprite(600, 120, "opponent");
        this.opponent.scale.setTo(.35);
        this.opponent.animations.add("move");
        this.opponent.animations.play("move", 2, true);
        this.o_viewBack = game.add.sprite(810, 10, "o_viewBack");
        this.o_viewBack.scale.setTo(.6);
        this.o_table = game.add.sprite(0, 250, "o_table");
        this.o_table.scale.setTo(.6);
        this.opeople = game.add.sprite(120, 230, "o_people");
        this.opeople.scale.setTo(.5);
        this.people = new People(game, 300);
        this.people.addXPeople(7, 2);
        this.table = game.add.sprite(0, 470, "table");
        this.table.scale.setTo(.6);
    };
    this.setupOrderList = function() {
        this.menuButton = game.add.button(700, 490, "b_menu", () => { this.pizzaList.alpha = this.pizzaList.alpha == 1 ? 0:1},this, 2, 1, 0);
        this.menuButton.scale.setTo(.2);
        this.playerAction = new PlayerAction(game);
        this.pizzaList = game.add.sprite(50, 70, "pizzaList");
        this.pizzaList.scale.setTo(.3);
        this.pizzaList.alpha = 0;
        this.orderList = game.add.sprite(810, 300, "orderList");
        this.orderList.scale.setTo(.4);
    };
    this.createButtons = function() {
        new Command(game, this.playerAction, Phaser.Keyboard.ONE, this.playerAction.get().ADD_MOZZARELLA).createButton(430, 500, 50, 50, "b_mozzarella", "b_salami");
        new Command(game, this.playerAction, Phaser.Keyboard.TWO, this.playerAction.get().ADD_BASIL).createButton(500, 500, 50, 50, "b_basil");
        new Command(game, this.playerAction, Phaser.Keyboard.THREE, this.playerAction.get().ADD_OREGANO).createButton(570, 500, 50, 50, "b_oregano");
        new Command(game, this.playerAction, Phaser.Keyboard.FOUR, this.playerAction.get().ADD_HAM).createButton(640, 500, 50, 50, "b_ham");
        new Command(game, this.playerAction, Phaser.Keyboard.FIVE, this.playerAction.get().ADD_SAUCE).createButton(430, 560, 50, 50, "b_sauce");
        new Command(game, this.playerAction, Phaser.Keyboard.SIX, this.playerAction.get().ADD_SALAMI).createButton(500, 560, 50, 50, "b_salami");
        new Command(game, this.playerAction, Phaser.Keyboard.SEVEN, this.playerAction.get().ADD_ARTICHOKES).createButton(570, 560, 50, 50, "b_artichokes");
        new Command(game, this.playerAction, Phaser.Keyboard.EIGHT, this.playerAction.get().ADD_MUSHROOM).createButton(640, 560, 50, 50, "b_mushroom");
        new Command(game, this.playerAction, Phaser.Keyboard.SPACEBAR, this.playerAction.get().PIZZA_COMPLETE).createButton(476, 450, 70, 40, "b_oven");
        new Command(game, this.playerAction, Phaser.Keyboard.ENTER, this.playerAction.get().TRASH_PIZZA).createButton(590, 450, 70, 40, "b_delete");
    };

    this.createOrder = function(){
        if(this.orders) this.orders.destroy();
        this.orders = game.add.group();
        console.log("running");
        x = 860;
        y = 368;   
        globalMatch.orders.forEach((order,index)=>{
            let you ="";
            let him ="";
            console.log(isP1,globalMatch.pizza1,globalMatch.pizza2);
            if((isP1 && globalMatch.pizza1 === index) || (!isP1 && globalMatch.pizza2 === index) ){
                you = "Me";
            } 
            if((!isP1 && globalMatch.pizza1 === index) || (isP1 && globalMatch.pizza2 === index) ){
                him = "You"
            }
            this.orders.add(this.game.add.text(x,y+(index*41),you+"  "+order+"  "+him,{
                font: "bold 18px Arial", fill: "#4d4d4d4", boundsAlignH: "center", boundsAlignV: "middle"
            }))
           });

    }
    this.showRounds = function (){
            this.yourScore =  game.add.sprite(30, 20, "p_"+(isP1? globalMatch.p1 : globalMatch.p2)+"r");
            this.yourScore.scale.setTo(.1);
            this.hisScore = game.add.sprite(220, 20, "o_"+(!isP1? globalMatch.p1 : globalMatch.p2)+"r");
            this.hisScore.scale.setTo(.1);
        }

    Client.socket.on("orders",function(match){
        console.log("orders received");
        globalMatch = match;
        setTimeout(()=>this.createOrder(),300);
    }.bind(this))
}

UIBuilder.prototype = Object.create(Phaser.Sprite.prototype);

UIBuilder.prototype.constructor = UIBuilder;