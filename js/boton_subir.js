const d = document;
export function botonSubir(boton) {
	window.addEventListener("scroll", e => {
		if (window.scrollY > 700) {
			d.querySelector(boton).parentElement.classList.remove("hidden");
		} else {
			d.querySelector(boton).parentElement.classList.add("hidden");
		}
	});
	d.addEventListener("click", e => {
		if (e.target.matches(boton) || e.target.matches(`${boton} *`)) {
			window.scrollTo({
				behavior: "smooth",
				top: 0,
				left: 0,
			});
		}
	});
}
