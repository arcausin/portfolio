var memory_array = ['V','V','I','I','C','C','T','T','O','O','R','R'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function newBoard() {
	tiles_flipped = 0;
  memory_array = _.shuffle(memory_array);

  var output = '';
  _.forEach(memory_array, function(memory_array_value, index) {
    output += '<div id="tile_'+ index +'" onclick="memoryFlipTile(this,\''+ memory_array_value +'\')"></div>';
  });

	document.getElementById('memory_board').innerHTML = output;
}

function canFlipCard(tile) {
  console.log("memory_values.length", memory_values.length);
  return tile.innerHTML == "" && memory_values.length < 2;
}

function isOneCardFlipped() {
  return memory_values.length == 1
}

function areNoCardsFlipped() {
  return memory_values.length == 0;
}

function setCardAsFlipped(tile, value) {
  memory_values.push(value);
  memory_tile_ids.push(tile.id);
}

function isThereIsAMatch() {
  return memory_values[0] == memory_values[1];
}

function matchCards() {
  tiles_flipped += 2;
  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function isGameOver() {
  // Check to see if the whole board is cleared
  return tiles_flipped == memory_array.length;
}

function gameIsOver() {
  var element_1 = document.querySelector('.name_criminal');
  element_1.classList.replace("invisibled", "visibled");
  /*
  var reference_de_ma_div = document.createElement( 'div' );
  var compteur = 0;
  reference_de_ma_div.classList.add('instruction')
  reference_de_ma_div.innerHTML = '<p>Good job for clearing the task ! Have you found the hint ? Write it down !! <br> Be careful, you only have 10 seconds before the game restart !</p>';
  document.body.appendChild( reference_de_ma_div );
  setTimeout(function(){
    compteur++;
    reference_de_ma_div.innerHTML = '<p>'+compteur+'</p>';
    window.location.reload(1);
  }, 10000);
  //document.getElementById('memory_board').innerHTML = "";
  //newBoard();
  */
}

function cardsDoNotMatch() {
  setTimeout(flipCardBack, 300);
}

function flipCard(tile, value) {
  tile.style.background = '#FFF';
  tile.innerHTML = value;
}

function flipCardBack() {
  // Flip the 2 tiles back over
  var tile_1 = document.getElementById(memory_tile_ids[0]);
  var tile_2 = document.getElementById(memory_tile_ids[1]);
  tile_1.style.background = 'black';
  tile_1.innerHTML = "";
  tile_2.style.background = 'black';
  tile_2.innerHTML = "";

  // Clear both arrays
  memory_values = [];
  memory_tile_ids = [];
}

function memoryFlipTile(tile, value) {
	if (canFlipCard(tile)) {
		flipCard(tile, value);
    //console.log('e1');
    if (areNoCardsFlipped()) {
			setCardAsFlipped(tile, value);
      //console.log('e2');
		} 
    else if(isOneCardFlipped()) {
      setCardAsFlipped(tile, value);
      //console.log('e3');
      if(isThereIsAMatch()) {
        matchCards();
        //console.log('e4');
        if (isGameOver()) {
          gameIsOver();
          //console.log('e5');
        }
      } else {
  			cardsDoNotMatch();
        //console.log('not match');
      }
    } // FIN ELSE IF isOneCardFlipped
  } // FIN IF canFlipCard
} //FIN FUNCTION

/*
function memoryFlipTile2(tile, value) {
  if (canFlipCard(tile)) {
    console.log('e1');
    flipCard(tile, value);
    setCardAsFlipped(tile, value);
    if (isOneCardFlipped()) {
      console.log('e2');
      if (isThereIsAMatch()) {
        console.log('e3');
        matchCards();
        if (isGameOver()) {
          console.log('e4');
          gameIsOver();
        }
      } else {
        cardsDoNotMatch();
      }
    }
  }
}
*/