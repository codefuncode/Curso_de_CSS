function imane_pinguino(argument) {
	let imagenes = document.querySelectorAll("img");

	let numero = "";


	for (var i = 0; i < imagenes.length; i++) {
		let numero = getRandomNumberBetween(1, 99);
		if (numero < 10) {
			numero = "00" + numero;
		} else {
			numero = "0" + numero;
		}
		let url = "../../img/" + numero + ".png";
		imagenes[i].src = url;

	}

	function getRandomNumberBetween(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}
imane_pinguino();