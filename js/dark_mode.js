const d = document;
const ls = localStorage;
export function darkMode(btnDarkMode) {
	const $boton = d.querySelector(btnDarkMode);
	const $icono = $boton.firstElementChild;
	const lightMode = () => {
		$icono.classList.replace("bxs-sun", "bxs-moon");
		d.body.classList.remove("fondo-negro");
		d.body.classList.remove("fuente-gold");
		ls.setItem("theme", "light");
	};
	const darkMode = () => {
		$icono.classList.replace("bxs-moon", "bxs-sun");
		d.body.classList.add("fondo-negro");
		d.body.classList.add("fuente-gold");
		d.querySelector("h1").style.setProperty("color", "black");
		ls.setItem("theme", "dark");
	};
	d.addEventListener("click", e => {
		if (e.target.matches(btnDarkMode) || e.target.matches(`${btnDarkMode} *`)) {
			if ($icono.classList.contains("bxs-sun")) lightMode();
			else darkMode();
		}
	});
	d.addEventListener("DOMContentLoaded", e => {
		if (ls.getItem("theme") === null) ls.setItem("theme", "light");
		if (ls.getItem("theme") === "light") lightMode();
		if (ls.getItem("theme") === "dark") darkMode();
	});
}
