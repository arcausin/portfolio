//créer une fonction pour éviter le copier-coller.

var element_1 = document.querySelector('.jeu-1');

var btn_img1 = document.querySelector('#img1');

btn_img1.onclick = function() {
	if (element_1.classList.contains('visibled'))
	{
		element_1.classList.replace("visibled", "invisibled");
	}

	else if (element_1.classList.contains('invisibled'))
	{
		element_1.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_1.classList.add("invisibled");
	}
}

var btn_close_anonymous = document.querySelector('.close_anonymous');

btn_close_anonymous.onclick = function() {
	if (element_1.classList.contains('visibled'))
	{
		element_1.classList.replace("visibled", "invisibled");
	}

	else if (element_1.classList.contains('invisibled'))
	{
		element_1.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_1.classList.add("invisibled");
	}
}


var element_2 = document.querySelector('.jeu-2');

var btn_img2 = document.querySelector('#img2');

btn_img2.onclick = function() {
	if (element_2.classList.contains('visibled'))
	{
		element_2.classList.replace("visibled", "invisibled");
	}

	else if (element_2.classList.contains('invisibled'))
	{
		element_2.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_2.classList.add("invisibled");
	}
}

var btn_close_pistolet = document.querySelector('.close_pistolet');

btn_close_pistolet.onclick = function() {
	if (element_2.classList.contains('visibled'))
	{
		element_2.classList.replace("visibled", "invisibled");
	}

	else if (element_1.classList.contains('invisibled'))
	{
		element_2.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_2.classList.add("invisibled");
	}
}


var element_3 = document.querySelector('.jeu-3');

var btn_img3 = document.querySelector('#img3');

btn_img3.onclick = function() {
	if (element_3.classList.contains('visibled'))
	{
		element_3.classList.replace("visibled", "invisibled");
	}

	else if (element_3.classList.contains('invisibled'))
	{
		element_3.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_3.classList.add("invisibled");
	}
}

var btn_close_billet = document.querySelector('.close_billet');

btn_close_billet.onclick = function() {
	if (element_3.classList.contains('visibled'))
	{
		element_3.classList.replace("visibled", "invisibled");
	}

	else if (element_3.classList.contains('invisibled'))
	{
		element_3.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_3.classList.add("invisibled");
	}
}

var element_4 = document.querySelector('.indice_name');

var btn_indice_pistolet = document.querySelector('.indice_pistolet');

btn_indice_pistolet.onclick = function() {
	if (element_4.classList.contains('invisibled'))
	{
		element_4.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_4.classList.add("visibled");
	}
}

var element_5 = document.querySelector('.bloc_note');

var btn_img5 = document.querySelector('#img4');

btn_img5.onclick = function() {
	if (element_5.classList.contains('visibled'))
	{
		element_5.classList.replace("visibled", "invisibled");
	}

	else if (element_5.classList.contains('invisibled'))
	{
		element_5.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_5.classList.add("invisibled");
	}
}

var btn_close_bloc_note = document.querySelector('.close_bloc_note');

btn_close_bloc_note.onclick = function() {
	if (element_5.classList.contains('visibled'))
	{
		element_5.classList.replace("visibled", "invisibled");
	}

	else if (element_5.classList.contains('invisibled'))
	{
		element_5.classList.replace("invisibled", "visibled");
	}

	else
	{
		element_5.classList.add("invisibled");
	}
}

//BLANK WINDOWS
//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv1"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));
dragElement(document.getElementById("mydiv4"));
dragElement(document.getElementById("mydiv5"));
dragElement(document.getElementById("mydiv6"));
dragElement(document.getElementById("mydiv7"));
dragElement(document.getElementById("mydiv8"));
dragElement(document.getElementById("mydiv9"));
dragElement(document.getElementById("mydiv10"));
dragElement(document.getElementById("mydiv11"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* Find the culprit */

var character1 = document.querySelector('#mydiv12');
var character2 = document.querySelector('#mydiv13');
var character3 = document.querySelector('#mydiv14');

character1.onclick = function() {
   var r = confirm("Êtes-vous sûr de votre choix ?");
   if (r == true) {
     txt = "PERDU, vous avez fait tuer la mauvaise personne !";
   } else {
     txt = "Décidez-vous ....";
   }
   document.getElementById("result").innerHTML = txt;
}
character2.onclick = function() {
   var r = confirm("Êtes-vous sûr de votre choix ?");
   if (r == true) {
     txt = "PERDU, vous avez fait tuer la mauvaise personne !";
   } else {
     txt = "Décidez-vous ....";
   }
   document.getElementById("result").innerHTML = txt;
}
character3.onclick = function() {
   var r = confirm("Êtes-vous sûr de votre choix ?");
   if (r == true) {
     txt = "GAGNER, bien jouez vous avez trouvé le coupable !";
   } else {
     txt = "Décidez-vous ....";
   }
   document.getElementById("result").innerHTML = txt;
}