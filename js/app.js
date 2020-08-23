import { hamburguesa } from "./hamburguesa.js";
import { reloj, alarma } from "./reloj.js";
import { moverBola, shortcuts } from "./teclado.js";
import { tempo } from "./temporizador.js";
const d = document;
d.addEventListener("DOMContentLoaded", e => {
	hamburguesa("#boton-flotante", ".menu", ".menu a");
	reloj(".reloj", "#activar-reloj", "#desactivar-reloj");
	alarma("#activar-alarma", "#desactivar-alarma");
	moverBola(".bola", ".contenedor-bola");
	shortcuts(".encabezado");
	tempo("#temporizador", "#boton-temporizador", "#cancelar-temporizador");
});
