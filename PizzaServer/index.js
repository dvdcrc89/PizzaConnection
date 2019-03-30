const PORT = 55000;

var server = require('http').createServer();
var io = require('socket.io')(server);
let roomno = 0;
let playerToMarry = null;
let game = [];

const ingredients = {
    mozzarella: "s_mozzarella",
    basil: "s_basil",
    ham: "s_ham",
    artichokes: "s_artichokes",
    mushroom: "s_mushroom",
    oregano: "s_oregano",
    salami: "s_salami",
    sauce: "s_sauce",
}
const pizzasName = {
    margherita: "Margherita",
    marinara: "Marinara",
    hammush: "Ham and Mushrooms",
    diavola: "Diavola",
    capricciosa: "Capricciosa",
    meat: "Meat Feast"
}
const pizzas = [{
    name: pizzasName.margherita,
    ingredients: [ingredients.mozzarella, ingredients.basil]
}, {
    name: pizzasName.marinara,
    ingredients: [ingredients.oregano]
}, {
    name: pizzasName.hammush,
    ingredients: [ingredients.mozzarella, ingredients.mushroom, ingredients.ham]
}, {
    name: pizzasName.diavola,
    ingredients: [ingredients.mozzarella, ingredients.salami]
}, {
    name: pizzasName.capricciosa,
    ingredients: [ingredients.mozzarella, ingredients.mushroom, ingredients.ham, ingredients.artichokes]
}, {
    name: pizzasName.meat,
    ingredients: [ingredients.mozzarella, ingredients.mushroom, ingredients.ham, ingredients.artichokes, ingredients.salami]
}]
const PIZZA_COMPLETE = "[PIZZA] DELIVER PIZZA";
const WRONG_PIZZA= "[PIZZA] WRONG PIZZA"
const GAME_OVER= "[GAME] GAME OVER";


io.sockets.on('connection', function(client) {

    client.on('join', function() {
        if (!playerToMarry) {
            playerToMarry = client;
        } else {
            roomno++
            let id = "ROOM" + roomno;
            playerToMarry.join(id);
            client.join(id);
            client.emit("start");
            playerToMarry.emit("start");
            setGame(client, playerToMarry, id);
            playerToMarry = null;
        }

    });

    client.on('action', function(data) {
        
        client.emit('server_action', {
            type: data.action,
            isMe: true
        });
        Object.keys(client.rooms).forEach(function(room) {
            client.broadcast.to(room).emit('server_action', {
                type: data.action,
                isMe: false
            });
        });
        if(data.action===PIZZA_COMPLETE){
            handlePizzaComplete(data.pizza,client);
            let isPizzaCorrect = validatePizza(pizzasName.diavola,data.pizza);
            if(isPizzaCorrect){
                
            } else {

            }
        }
    });
    client.on('disconnect', function() {
        // if(getGameByClient(client).length>0){
        //         console.log('DISCONNESSO!!! ');
        //         let game = getGameByClient(client);
        //         client.broadcast.in(game.roomId).emit('disconnect',game);
        //         removeGame(client);
        //         client.disconnect();
        // }
    });
});
server.listen(PORT, function() {
    console.log('Listening on ' + server.address().port);
});

function setGame(client1, client2, roomId) {
    orders = ["Margherita", "Capricciosa", "Diavola", "Margherita"]
    match = {
        orders,
        client1: client1.id,
        client2: client2.id,
        pizza1: 0,
        pizza2: 0,
        roomId
    }
    game.push(match);
}

function getGameByClient(client) {
    return game.filter(match => match.client1 === client.id || match.client2 === client.id)[0];
}

function getGameByRoom(roomId) {
    return game.filter(match => match.roomId === roomId)[0];
}

function removeGame(client) {
    game.splice(game.indexOf(getGameByClient(client)), 1);
}

function validatePizza(pizzaType, pizza) {
    if (pizza[0] != ingredients.sauce) {
        return false;
    }
    let isCorrect = true;
    let correctIngredients = pizzas.filter(pizza => pizza.name === pizzaType)[0].ingredients;
    correctIngredients.sort();
    pizza.shift();
    pizza.sort();
    console.log(correctIngredients);
    correctIngredients.forEach((ingredient, index) => {
        if (ingredient != pizza[index]) {
            isCorrect = false;
        }
    })
    return isCorrect;
}

function handlePizzaComplete(pizza,client){
    let match = getGameByClient(client);
    let isP1 = match.client1 == client.id ? true : false;
    let pizzaIndex = isP1 ? match.pizza1 : match.pizza2;
    let isCorrect = validatePizza(match.orders[pizzaIndex],pizza,client);
    if(!isCorrect){
        client.emit('server_action', {
            type: WRONG_PIZZA,
            isMe: true
        });
        Object.keys(match.roomId).forEach(function(room) {
            client.broadcast.to(room).emit('server_action', {
                type: WRONG_PIZZA,
                isMe: false
            });
        });
        return false;
    } else {
        game[game.indexOf(match)] = updateGameObject(isP1,match,client);
    }
}

function updateGameObject(isP1,match,client){
    if(!isGameEnded(isP1,match,client)){
        if(isP1) return {...match,pizza1:match.pizza1+1}
        else return {...match,pizza2:match.pizza2+1}

    }
}



function isGameEnded(isP1,match,client){
    if(isP1){
        console.log(match.pizza2,match.orders.length)
        if(match.pizza1 >= match.orders.length-1){
            client.emit('server_action', {
                type: GAME_OVER,
                isMe: true
            });
       
                client.broadcast.to(match.roomId).emit('server_action', {
                    type: GAME_OVER,
                    isMe: false
                }); 
                console.log("P1 won");
            return true;
        }
    } else { 
        console.log(match.pizza2,match.orders.length)
        if(match.pizza2 >= match.orders.length-1){
            client.emit('server_action', {
                type: GAME_OVER,
                isMe: true
            });
                client.broadcast.to(match.roomId).emit('server_action', {
                    type: GAME_OVER,
                    isMe: false
                });
                console.log("P2 won");
            return true;
        }

    }
    return false;
}    

function randomOrders(num){
    let pizzas = Object.keys(pizzasName);

}