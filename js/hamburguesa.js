export const PI = Math.PI;

export function hamburguesa(botonFlotante, menu, linkMenu) {
	document.addEventListener("click", e => {
		if (
			e.target.matches(botonFlotante) ||
			e.target.matches(`${botonFlotante} *`)
		) {
			document.querySelector(menu).classList.toggle("transladar-centro");
			document.querySelector(botonFlotante).classList.toggle("rotacion-90");
		}
		if (e.target.matches(linkMenu)) {
			document.querySelector(menu).classList.toggle("transladar-centro");
			document.querySelector(botonFlotante).classList.toggle("rotacion-90");
		}
	});
}
