var contar = 0;

var clickeado = function(){

	contar++

	var div = document.createElement("div");
		div.setAttribute("class", "clase-div");
	var h4 = document.createElement("h4");
		h4.innerHTML = "Click número: "
	var parrafo = document.createElement("p");
		parrafo.innerHTML = contar

	div.appendChild(h4);
	div.appendChild(parrafo);
	document.getElementById("contador").appendChild(div);

}

document.getElementById("boton-click").addEventListener("click", clickeado);