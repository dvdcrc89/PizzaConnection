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
	ingredients: [ingredients.mozzarella, ingredients.mushroom, ingredients.ham, ingredients.salami]
}]
const PIZZA_COMPLETE = "[PIZZA] DELIVER PIZZA";
const WRONG_PIZZA = "[PIZZA] WRONG PIZZA"
const GAME_OVER = "[GAME] GAME OVER";


io.sockets.on('connection', function (client) {

	client.on('join', function () {
		console.log("Active Game:", game.length);
		if (!playerToMarry) {
			playerToMarry = client;
		} else {
			roomno++
			let id = "ROOM" + roomno;
			playerToMarry.join(id);
			client.join(id);
			let match = setGame(client, playerToMarry, id,1);
			let isP1 = match.client1 == client.id ? true : false;

			client.emit("start",{match,isP1});
			playerToMarry.emit("start",{match,isP1:!isP1});
			playerToMarry = null;
			sendOrders(match, client);
		}

	});

	client.on('action', function (data) {

		client.emit('server_action', {
			type: data.action,
			isMe: true
		});
		Object.keys(client.rooms).forEach(function (room) {
			client.broadcast.to(room).emit('server_action', {
				type: data.action,
				isMe: false
			});
		});
		if (data.action === PIZZA_COMPLETE) {
			handlePizzaComplete(data.pizza, client);
			validatePizza(pizzasName.diavola, data.pizza);
			
		}
	});
	client.on('disconnect', function () {
		// if(getGameByClient(client).length>0){
		//         console.log('DISCONNESSO!!! ');
		//         let game = getGameByClient(client);
		//         client.broadcast.in(game.roomId).emit('disconnect',game);
		//         removeGame(client);
		//         client.disconnect();
		// }
	});
});
server.listen(PORT, function () {
	console.log('Listening on ' + server.address().port);
});

function setGame(client1, client2, roomId,round) {
	orders = randomOrders(4);

	match = {
		orders,
		client1: client1.id,
		client2: client2.id,
		pizza1: 0,
		pizza2: 0,
		roomId,
        round: 1,
        p1: 0,
        p2:0

	}
	game.push(match);
	return match;


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

function handlePizzaComplete(pizza, client) {
	let match = getGameByClient(client);
	let isP1 = match.client1 == client.id ? true : false;
	let pizzaIndex = isP1 ? match.pizza1 : match.pizza2;
	let isCorrect = validatePizza(match.orders[pizzaIndex], pizza, client);
	if (!isCorrect) {
		client.emit('server_action', {
			type: WRONG_PIZZA,
			isMe: true
		});
		client.broadcast.to(match.roomId).emit('server_action', {
			type: WRONG_PIZZA,
			isMe: false
		});
		console.log("WRONG PIZZA");
		console.log("**********************");
		return false;
	} else {
		let updatedMatch = updateGameObject(isP1, match, client);
		console.log(updatedMatch);
		if (updatedMatch) {
			game[game.indexOf(match)] = updatedMatch;
			sendOrders(updatedMatch, client);
		}
	}
}

function updateGameObject(isP1, match, client) {
	if (!isRoundEnded(isP1, match, client))
		return isP1 ? { ...match,
			pizza1: match.pizza1 + 1
		} : { ...match,
			pizza2: match.pizza2 + 1
		}

	return false
}
function isRoundEnded(isP1, match, client) {
    if (isP1 && match.pizza1 >= match.orders.length - 1) {
        if(match.p1 === 2){
            client.emit('gameover', true);
            client.broadcast.to(match.roomId).emit('gameover', false);
            return true;
        } else{
           let updateMatch = match;
            updateMatch.p1 = match.p1+1;
            updateMatch.round = match.round+1
            updateMatch.orders = randomOrders(4);
            updateMatch.pizza1 = 0;
            updateMatch.pizza2 = 0;
			game[game.indexOf(match)] = updateMatch;
			let isP1 = match.client1 == client.id ? true : false;
            client.emit("start",{match:updateMatch,isP1});
            client.broadcast.to(match.roomId).emit('start', {match:updateMatch,isP1:!isP1});
            return true;
        }

    } else if (!isP1 && match.pizza2 >= match.orders.length - 1) {
        if(match.p2 === 2){
            client.emit('gameover', true);
            client.broadcast.to(match.roomId).emit('gameover', false);
            return true;
        } else{
           let updateMatch = match;
            updateMatch.p2 = match.p2+1;
            updateMatch.round = match.round+1
            updateMatch.orders = randomOrders(4);
            updateMatch.pizza1 = 0;
            updateMatch.pizza2 = 0;
            game[game.indexOf(match)] = updateMatch;
            client.emit("start",updateMatch);
            client.broadcast.to(match.roomId).emit('start', updateMatch);
            return true;
        }

    }
    return false;
    
}

// function isRoundEnded(isP1, match, client) {
// 	if ((isP1 && match.pizza1 >= match.orders.length - 1) || (!isP1 && match.pizza2 >= match.orders.length - 1)) {
//         console.log(match,"gameover")
//         client.emit('gameover', true);
// 		client.broadcast.to(match.roomId).emit('gameover', false);
// 		return true;
// 	}
// 	return false;
// }

function randomOrders(num) {
	return Object.values(pizzasName).sort(() => 0.5 - Math.random()).slice(0, num);

}

function sendOrders(match, client) {
	client.emit('orders', match)
	
	client.broadcast.to(match.roomId).emit('orders', match);
}