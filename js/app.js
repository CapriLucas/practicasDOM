import { hamburguesa } from "./hamburguesa.js";
import { reloj, alarma } from "./reloj.js";
import { moverBola, shortcuts } from "./teclado.js";
import { tempo } from "./temporizador.js";
import { botonSubir } from "./boton_subir.js";
import { darkMode } from "./dark_mode.js";
import { responsiveMedia } from "./responsive.js";
const d = document;
d.addEventListener("DOMContentLoaded", e => {
	hamburguesa("#boton-flotante", ".menu", ".menu a");
	reloj(".reloj", "#activar-reloj", "#desactivar-reloj");
	alarma("#activar-alarma", "#desactivar-alarma");
	moverBola(".bola", ".contenedor-bola");
	shortcuts(".encabezado");
	tempo("#temporizador", "#boton-temporizador", "#cancelar-temporizador");
	botonSubir("#boton-flotante-subir");
	responsiveMedia(
		"video-jon",
		"(min-width: 1024px)",
		`<iframe width="618" height="506" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="" allowfullscreen></iframe>`,
		`<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank">Video de JonMircha</a>`
	);
	responsiveMedia(
		"video-edgar",
		"(min-width: 1024px)",
		`<iframe width="618" height="506" src="https://www.youtube.com/embed/qLy8gVwLu4w" frameborder="0" allow="" allowfullscreen></iframe>`,
		`<a href="https://www.youtube.com/embed/qLy8gVwLu4w" target="_blank">Video de la caida de Edgar</a>`
	);
	responsiveMedia(
		"casa-bananero",
		"(min-width: 1024px)",
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8539.855754356016!2d-80.14107294628593!3d25.850808208811284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b31164bcf25b%3A0x1521c4031bb39d36!2sEl%20Bananero%20House!5e0!3m2!1ses!2sar!4v1598296418836!5m2!1ses!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
		`<a href="https://goo.gl/maps/Dv3qHmKs628E288w9" target="_blank">Casa del bananero</a>`
	);
});

darkMode("#boton-flotante-dark");
