$(function(){



//déclaration des 3 stats principales du joueur ====================================

var totalOfMutantPerSecond = 0; // la production de mutant par seconde du joueur
var numberOfMutantCurrently = 0; // mutant actuellement en possession par le joueur
var totalOfMutant = 0; // nombre de mutant au total du joueur durant toute la partie

//==================================================================================



// définition de la class qui va nous permettre de créer des améliorations =================================================================================

 class update {
 	constructor(name, price, mutantPerSecondAdd, quantity, sumOfMutantPerSecondAdd, totalMutantProduct) {
 		this.name = name; //nom de l'amélioration
 		this.price = price; // le prix de l'amélioration
 		this.mutantPerSecondAdd = mutantPerSecondAdd; // la productivité que va apporter l'amélioration
 		this.quantity = quantity; // le nombre de cette amélioration posséder par le joueur
 		this.sumOfMutantPerSecondAdd = sumOfMutantPerSecondAdd; // la somme de la productivité par seconde de l'amélioration (mutantPerSecondAdd * quantity)
 		this.totalMutantProduct = totalMutantProduct; // la somme total de mutant produit par cette amélioration
 	}
 }

 //=========================================================================================================================================================



// déclaration des améliorations disponibles dans le jeu ================

var angel = new update("Angel", 1, 0.1, 0, 0, 0);
var beast = new update("Beast", 5, 0.5, 0, 0, 0);
var iceman = new update("Iceman", 25, 2.5, 0, 0, 0);
var pixie = new update("Pixie", 128, 10, 0, 0, 0);
var jubilee = new update("Jubilee", 640, 50, 0, 0, 0);
var majik = new update("Majik", 3200, 256, 0, 0, 0);
var gambit = new update("Gambit", 16000, 1280, 0, 0, 0);
var emmaFrost = new update("Emma Frost", 80000, 6400, 0, 0, 0);
var namor = new update("Namor", 400000, 32000, 0, 0, 0);
var storm = new update("Storm", 2000000, 160000, 0, 0, 0);
var deadpool = new update("Deadpool", 10000000, 800000, 0, 0, 0);
var magneto = new update("Magneto", 50000000, 4000000, 0, 0, 0);

//=======================================================================



//AU LANCEMENT DU JEU ==============================================================================================

//l'actualisation tous les 0.1 seconde du jeu =====================================================================

setInterval(score, 100);

//mise a jour des stats principales du joueur
function score () {
	document.getElementById("totalOfMutantPerSecond").innerHTML = (parseFloat(totalOfMutantPerSecond).toFixed(1));
	document.getElementById("numberOfMutantCurrently").innerHTML = (parseFloat(numberOfMutantCurrently).toFixed(1));
	document.getElementById("totalOfMutant").innerHTML = (parseFloat(totalOfMutant).toFixed(1));

//mise a jour du nombre de mutant produit au total d'une amélioration
	document.getElementById("angel.totalMutantProduct").innerHTML = (parseFloat(angel.totalMutantProduct).toFixed(1));
	document.getElementById("beast.totalMutantProduct").innerHTML = (parseFloat(beast.totalMutantProduct).toFixed(1));
	document.getElementById("iceman.totalMutantProduct").innerHTML = (parseFloat(iceman.totalMutantProduct).toFixed(1));
	document.getElementById("pixie.totalMutantProduct").innerHTML = (parseFloat(pixie.totalMutantProduct).toFixed(1));
	document.getElementById("jubilee.totalMutantProduct").innerHTML = (parseFloat(jubilee.totalMutantProduct).toFixed(1));
	document.getElementById("majik.totalMutantProduct").innerHTML = (parseFloat(majik.totalMutantProduct).toFixed(1));
	document.getElementById("gambit.totalMutantProduct").innerHTML = (parseFloat(gambit.totalMutantProduct).toFixed(1));
	document.getElementById("emmaFrost.totalMutantProduct").innerHTML = (parseFloat(emmaFrost.totalMutantProduct).toFixed(1));
	document.getElementById("namor.totalMutantProduct").innerHTML = (parseFloat(namor.totalMutantProduct).toFixed(1));
	document.getElementById("storm.totalMutantProduct").innerHTML = (parseFloat(storm.totalMutantProduct).toFixed(1));
	document.getElementById("deadpool.totalMutantProduct").innerHTML = (parseFloat(deadpool.totalMutantProduct).toFixed(1));
	document.getElementById("magneto.totalMutantProduct").innerHTML = (parseFloat(magneto.totalMutantProduct).toFixed(1));
}

//==================================================================================================================


//Affichage les valeurs des différentes améliorations au lancement du jeu ======================================================

function startingGame (name, nameString, price, priceString, quantity, quantityString, mutantPerSecondAdd, mutantPerSecondAddString, sumOfMutantPerSecondAdd, sumOfMutantPerSecondAddString) {
	document.getElementById(nameString).innerHTML = (name);
	document.getElementById(priceString).innerHTML = (parseFloat(price).toFixed(1));
	document.getElementById(quantityString).innerHTML = (parseInt(quantity));
	document.getElementById(mutantPerSecondAddString).innerHTML = (parseFloat(mutantPerSecondAdd).toFixed(1));
	document.getElementById(sumOfMutantPerSecondAddString).innerHTML = (parseFloat(sumOfMutantPerSecondAdd).toFixed(1));
	
}

startingGame (angel.name, "angel.name", angel.price, "angel.price", angel.quantity, "angel.quantity", angel.mutantPerSecondAdd, "angel.mutantPerSecondAdd", angel.sumOfMutantPerSecondAdd, "angel.sumOfMutantPerSecondAdd");
startingGame (beast.name, "beast.name", beast.price, "beast.price", beast.quantity, "beast.quantity", beast.mutantPerSecondAdd, "beast.mutantPerSecondAdd", beast.sumOfMutantPerSecondAdd, "beast.sumOfMutantPerSecondAdd");
startingGame (iceman.name, "iceman.name", iceman.price, "iceman.price", iceman.quantity, "iceman.quantity", iceman.mutantPerSecondAdd, "iceman.mutantPerSecondAdd", iceman.sumOfMutantPerSecondAdd, "iceman.sumOfMutantPerSecondAdd");
startingGame (pixie.name, "pixie.name", pixie.price, "pixie.price", pixie.quantity, "pixie.quantity", pixie.mutantPerSecondAdd, "pixie.mutantPerSecondAdd", pixie.sumOfMutantPerSecondAdd, "pixie.sumOfMutantPerSecondAdd");
startingGame (jubilee.name, "jubilee.name", jubilee.price, "jubilee.price", jubilee.quantity, "jubilee.quantity", jubilee.mutantPerSecondAdd, "jubilee.mutantPerSecondAdd", jubilee.sumOfMutantPerSecondAdd, "jubilee.sumOfMutantPerSecondAdd");
startingGame (majik.name, "majik.name", majik.price, "majik.price", majik.quantity, "majik.quantity", majik.mutantPerSecondAdd, "majik.mutantPerSecondAdd", majik.sumOfMutantPerSecondAdd, "majik.sumOfMutantPerSecondAdd");
startingGame (gambit.name, "gambit.name", gambit.price, "gambit.price", gambit.quantity, "gambit.quantity", gambit.mutantPerSecondAdd, "gambit.mutantPerSecondAdd", gambit.sumOfMutantPerSecondAdd, "gambit.sumOfMutantPerSecondAdd");
startingGame (emmaFrost.name, "emmaFrost.name", emmaFrost.price, "emmaFrost.price", emmaFrost.quantity, "emmaFrost.quantity", emmaFrost.mutantPerSecondAdd, "emmaFrost.mutantPerSecondAdd", emmaFrost.sumOfMutantPerSecondAdd, "emmaFrost.sumOfMutantPerSecondAdd");
startingGame (namor.name, "namor.name", namor.price, "namor.price", namor.quantity, "namor.quantity", namor.mutantPerSecondAdd, "namor.mutantPerSecondAdd", namor.sumOfMutantPerSecondAdd, "namor.sumOfMutantPerSecondAdd");
startingGame (storm.name, "storm.name", storm.price, "storm.price", storm.quantity, "storm.quantity", storm.mutantPerSecondAdd, "storm.mutantPerSecondAdd", storm.sumOfMutantPerSecondAdd, "storm.sumOfMutantPerSecondAdd");
startingGame (deadpool.name, "deadpool.name", deadpool.price, "deadpool.price", deadpool.quantity, "deadpool.quantity", deadpool.mutantPerSecondAdd, "deadpool.mutantPerSecondAdd", deadpool.sumOfMutantPerSecondAdd, "deadpool.sumOfMutantPerSecondAdd");
startingGame (magneto.name, "magneto.name", magneto.price, "magneto.price", magneto.quantity, "magneto.quantity", magneto.mutantPerSecondAdd, "magneto.mutantPerSecondAdd", magneto.sumOfMutantPerSecondAdd, "magneto.sumOfMutantPerSecondAdd");

//==================================================================================================================================================================================================================================================================



//Le boutton clicker ===============

$("img#clicker").click(function() {
	numberOfMutantCurrently++;
	totalOfMutant++;
})

//==================================



//Le boutton des améliorations =====================================================================================================

//j'ai un problème pour créer une fonction pour ce code, un test en commentaire est présent en fin de code mais il ne fonctionne pas dans l'état.

$("img#angel").click(function() {
	if (numberOfMutantCurrently >= angel.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - angel.price;

		angel.price = angel.price * 1.1;
		document.getElementById("angel.price").innerHTML = (parseFloat(angel.price).toFixed(1));

		angel.quantity = angel.quantity + 1;
		document.getElementById("angel.quantity").innerHTML = (parseInt(angel.quantity));

		angel.sumOfMutantPerSecondAdd = angel.mutantPerSecondAdd * angel.quantity;
		document.getElementById("angel.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(angel.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + angel.mutantPerSecondAdd;
		setInterval(angelUpdate, 1000)
	}
})

function angelUpdate() {
	angel.totalMutantProduct = angel.totalMutantProduct + angel.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + angel.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + angel.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#beast").click(function() {
	if (numberOfMutantCurrently >= beast.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - beast.price;

		beast.price = beast.price * 1.1;
		document.getElementById("beast.price").innerHTML = (parseFloat(beast.price).toFixed(1));

		beast.quantity = beast.quantity + 1;
		document.getElementById("beast.quantity").innerHTML = (parseInt(beast.quantity));

		beast.sumOfMutantPerSecondAdd = beast.mutantPerSecondAdd * beast.quantity;
		document.getElementById("beast.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(beast.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + beast.mutantPerSecondAdd;
		setInterval(beastUpdate, 1000)
	}
})

function beastUpdate() {
	beast.totalMutantProduct = beast.totalMutantProduct + beast.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + beast.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + beast.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#iceman").click(function() {
	if (numberOfMutantCurrently >= iceman.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - iceman.price;

		iceman.price = iceman.price * 1.1;
		document.getElementById("iceman.price").innerHTML = (parseFloat(iceman.price).toFixed(1));

		iceman.quantity = iceman.quantity + 1;
		document.getElementById("iceman.quantity").innerHTML = (parseInt(iceman.quantity));

		iceman.sumOfMutantPerSecondAdd = iceman.mutantPerSecondAdd * iceman.quantity;
		document.getElementById("iceman.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(iceman.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + iceman.mutantPerSecondAdd;
		setInterval(icemanUpdate, 1000)
	}
})

function icemanUpdate() {
	iceman.totalMutantProduct = iceman.totalMutantProduct + iceman.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + iceman.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + iceman.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#pixie").click(function() {
	if (numberOfMutantCurrently >= pixie.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - pixie.price;

		pixie.price = pixie.price * 1.1;
		document.getElementById("pixie.price").innerHTML = (parseFloat(pixie.price).toFixed(1));

		pixie.quantity = pixie.quantity + 1;
		document.getElementById("pixie.quantity").innerHTML = (parseInt(pixie.quantity));

		pixie.sumOfMutantPerSecondAdd = pixie.mutantPerSecondAdd * pixie.quantity;
		document.getElementById("pixie.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(pixie.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + pixie.mutantPerSecondAdd;
		setInterval(pixieUpdate, 1000)
	}
})

function pixieUpdate() {
	pixie.totalMutantProduct = pixie.totalMutantProduct + pixie.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + pixie.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + pixie.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#jubilee").click(function() {
	if (numberOfMutantCurrently >= jubilee.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - jubilee.price;

		jubilee.price = jubilee.price * 1.1;
		document.getElementById("jubilee.price").innerHTML = (parseFloat(jubilee.price).toFixed(1));

		jubilee.quantity = jubilee.quantity + 1;
		document.getElementById("jubilee.quantity").innerHTML = (parseInt(jubilee.quantity));

		jubilee.sumOfMutantPerSecondAdd = jubilee.mutantPerSecondAdd * jubilee.quantity;
		document.getElementById("jubilee.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(jubilee.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + jubilee.mutantPerSecondAdd;
		setInterval(jubileeUpdate, 1000)
	}
})

function jubileeUpdate() {
	jubilee.totalMutantProduct = jubilee.totalMutantProduct + jubilee.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + jubilee.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + jubilee.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#majik").click(function() {
	if (numberOfMutantCurrently >= majik.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - majik.price;

		majik.price = majik.price * 1.1;
		document.getElementById("majik.price").innerHTML = (parseFloat(majik.price).toFixed(1));

		majik.quantity = majik.quantity + 1;
		document.getElementById("majik.quantity").innerHTML = (parseInt(majik.quantity));

		majik.sumOfMutantPerSecondAdd = majik.mutantPerSecondAdd * majik.quantity;
		document.getElementById("majik.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(majik.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + majik.mutantPerSecondAdd;
		setInterval(majikUpdate, 1000)
	}
})

function majikUpdate() {
	majik.totalMutantProduct = majik.totalMutantProduct + majik.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + majik.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + majik.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#gambit").click(function() {
	if (numberOfMutantCurrently >= gambit.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - gambit.price;

		gambit.price = gambit.price * 1.1;
		document.getElementById("gambit.price").innerHTML = (parseFloat(gambit.price).toFixed(1));

		gambit.quantity = gambit.quantity + 1;
		document.getElementById("gambit.quantity").innerHTML = (parseInt(gambit.quantity));

		gambit.sumOfMutantPerSecondAdd = gambit.mutantPerSecondAdd * gambit.quantity;
		document.getElementById("gambit.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(gambit.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + gambit.mutantPerSecondAdd;
		setInterval(gambitUpdate, 1000)
	}
})

function gambitUpdate() {
	gambit.totalMutantProduct = gambit.totalMutantProduct + gambit.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + gambit.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + gambit.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#emmaFrost").click(function() {
	if (numberOfMutantCurrently >= emmaFrost.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - emmaFrost.price;

		emmaFrost.price = emmaFrost.price * 1.1;
		document.getElementById("emmaFrost.price").innerHTML = (parseFloat(emmaFrost.price).toFixed(1));
emmaFrost
		emmaFrost.quantity = emmaFrost.quantity + 1;
		document.getElementById("emmaFrost.quantity").innerHTML = (parseInt(emmaFrost.quantity));

		emmaFrost.sumOfMutantPerSecondAdd = emmaFrost.mutantPerSecondAdd * emmaFrost.quantity;
		document.getElementById("emmaFrost.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(emmaFrost.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + emmaFrost.mutantPerSecondAdd;
		setInterval(emmaFrostUpdate, 1000)
	}
})

function emmaFrostUpdate() {
	emmaFrost.totalMutantProduct = emmaFrost.totalMutantProduct + emmaFrost.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + emmaFrost.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + emmaFrost.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#namor").click(function() {
	if (numberOfMutantCurrently >= namor.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - namor.price;

		namor.price = namor.price * 1.1;
		document.getElementById("namor.price").innerHTML = (parseFloat(namor.price).toFixed(1));

		namor.quantity = namor.quantity + 1;
		document.getElementById("namor.quantity").innerHTML = (parseInt(namor.quantity));

		namor.sumOfMutantPerSecondAdd = namor.mutantPerSecondAdd * namor.quantity;
		document.getElementById("namor.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(namor.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + namor.mutantPerSecondAdd;
		setInterval(namorUpdate, 1000)
	}
})

function namorUpdate() {
	namor.totalMutantProduct = namor.totalMutantProduct + namor.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + namor.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + namor.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#storm").click(function() {
	if (numberOfMutantCurrently >= storm.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - storm.price;

		storm.price = storm.price * 1.1;
		document.getElementById("storm.price").innerHTML = (parseFloat(storm.price).toFixed(1));

		storm.quantity = storm.quantity + 1;
		document.getElementById("storm.quantity").innerHTML = (parseInt(storm.quantity));

		storm.sumOfMutantPerSecondAdd = storm.mutantPerSecondAdd * storm.quantity;
		document.getElementById("storm.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(storm.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + storm.mutantPerSecondAdd;
		setInterval(stormUpdate, 1000)
	}
})

function stormUpdate() {
	storm.totalMutantProduct = storm.totalMutantProduct + storm.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + storm.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + storm.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#deadpool").click(function() {
	if (numberOfMutantCurrently >= deadpool.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - deadpool.price;

		deadpool.price = deadpool.price * 1.1;
		document.getElementById("deadpool.price").innerHTML = (parseFloat(deadpool.price).toFixed(1));

		deadpool.quantity = deadpool.quantity + 1;
		document.getElementById("deadpool.quantity").innerHTML = (parseInt(deadpool.quantity));

		deadpool.sumOfMutantPerSecondAdd = deadpool.mutantPerSecondAdd * deadpool.quantity;
		document.getElementById("deadpool.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(deadpool.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + deadpool.mutantPerSecondAdd;
		setInterval(deadpoolUpdate, 1000)
	}
})

function deadpoolUpdate() {
	deadpool.totalMutantProduct = deadpool.totalMutantProduct + deadpool.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + deadpool.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + deadpool.mutantPerSecondAdd;
}

//==================================================================================================================

$("img#magneto").click(function() {
	if (numberOfMutantCurrently >= magneto.price) {
		numberOfMutantCurrently = numberOfMutantCurrently - magneto.price;

		magneto.price = magneto.price * 1.1;
		document.getElementById("magneto.price").innerHTML = (parseFloat(magneto.price).toFixed(1));

		magneto.quantity = magneto.quantity + 1;
		document.getElementById("magneto.quantity").innerHTML = (parseInt(magneto.quantity));

		magneto.sumOfMutantPerSecondAdd = magneto.mutantPerSecondAdd * magneto.quantity;
		document.getElementById("magneto.sumOfMutantPerSecondAdd").innerHTML = (parseFloat(magneto.sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + magneto.mutantPerSecondAdd;
		setInterval(magnetoUpdate, 1000)
	}
})

function magnetoUpdate() {
	magneto.totalMutantProduct = magneto.totalMutantProduct + magneto.mutantPerSecondAdd;
	numberOfMutantCurrently = numberOfMutantCurrently + magneto.mutantPerSecondAdd;
	totalOfMutant = totalOfMutant + magneto.mutantPerSecondAdd;
}



//===================================================================================================================================

// le fameux script bugué qui est censé remplacer les 300 lignes de code répétitives..... (de 124 à 432)

/*
	function updateClick (price, priceString, quantity, quantityString, sumOfMutantPerSecondAdd, sumOfMutantPerSecondAddString, mutantPerSecondAdd, update) {
		numberOfMutantCurrently = numberOfMutantCurrently - price;

		price = price * 1.1;
		document.getElementById(priceString).innerHTML = (parseFloat(price).toFixed(1));

		quantity = quantity + 1;
		document.getElementById(quantityString).innerHTML = (parseInt(quantity));

		sumOfMutantPerSecondAdd = sumOfMutantPerSecondAdd * quantity;
		document.getElementById(sumOfMutantPerSecondAddString).innerHTML = (parseFloat(sumOfMutantPerSecondAdd).toFixed(1));

		totalOfMutantPerSecond = totalOfMutantPerSecond + mutantPerSecondAdd;
		setInterval(update, 1000);
	}

// exemple d'utilisation de la fonction ci-dessus pour finaliser la première version du jeu si seulement la fonction marchait......

	function beastUpdate() {
		beast.totalMutantProduct = beast.totalMutantProduct + beast.mutantPerSecondAdd;
		numberOfMutantCurrently = numberOfMutantCurrently + beast.mutantPerSecondAdd;
		totalOfMutant = totalOfMutant + beast.mutantPerSecondAdd;
	}

	$("img#beast").click(function() {
		if (numberOfMutantCurrently >= beast.price) {
			updateClick (beast.price, "beast.price", beast.quantity, "beast.quantity", beast.sumOfMutantPerSecondAdd, "beast.sumOfMutantPerSecondAdd", beast.mutantPerSecondAdd, beastUpdate);
			beastUpdate();
		}
	
	})
*/

//===================================================================================================================================

});

