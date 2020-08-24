const d = document;
let x = 0;
let y = 0;
export function moverBola(bola, contenedor) {
	const $container = d.querySelector(contenedor);
	const $bola = d.querySelector(bola);
	const ALTURA_BOLA = parseInt(
		getComputedStyle($bola).getPropertyValue("height")
	);
	const ANCHO_BOLA = parseInt(
		getComputedStyle($bola).getPropertyValue("width")
	);
	const X_MAX =
		parseInt(getComputedStyle($container).getPropertyValue("width")) -
		ANCHO_BOLA -
		3;
	const Y_MAX =
		parseInt(getComputedStyle($container).getPropertyValue("height")) -
		ALTURA_BOLA -
		3;

	d.addEventListener("keydown", e => {
		if (e.key == "ArrowUp" && y > 0) {
			e.preventDefault();
			y -= 10;
		}
		if (e.key == "ArrowRight" && x < X_MAX) {
			e.preventDefault();
			x += 10;
		}
		if (e.key == "ArrowDown" && y < Y_MAX) {
			e.preventDefault();
			y += 10;
		}
		if (e.key == "ArrowLeft" && x > 0) {
			e.preventDefault();
			x -= 10;
		}
		$bola.style.setProperty("transform", `translate(${x}px, ${y}px)`);
	});
}

export function shortcuts(header) {
	d.addEventListener("keydown", e => {
		// PARA LETRA t
		if (e.keyCode == 84 && e.altKey) {
			d.querySelector(header).firstElementChild.innerText = prompt();
		}
		if (e.keyCode == 80 && e.altKey) {
			console.log("hola");
			let color = prompt("Elegir un color compatible con css");
			d.querySelector(header).style.setProperty("background-color", color);
		}
	});
}
