var colorClick = document.getElementById("fullcolors");
var boxs = document.getElementById("boxes");
var clear = document.getElementById("reset")

var ContenedorCell = " ";

for (var i = 0; i < 1000; i++) {
	ContenedorCell += "<div id = 'cell-"+ i + "'  class='cell'></div>"; 
}

boxs.innerHTML = ContenedorCell;

for (var x = 0; x < 1000; x++){
	var element = document.getElementById("cell-" + x);
	addEvent(element);
}

function addEvent(element){
	element.addEventListener("click", function(){
		element.style.backgroundColor = colorClick.value;
	});
}
 
clear.addEventListener("click", function(){
	for (var x = 0; x < 1000; x++){
		var element = document.getElementById("cell-" + x);
		element.style.backgroundColor = "lightgrey";
	}
});