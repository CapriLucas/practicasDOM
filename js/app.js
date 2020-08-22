import { hamburguesa } from "./hamburguesa.js";
import { reloj, alarma } from "./reloj.js";
import { moverBola, shortcuts } from "./teclado.js";
const d = document;
console.log("g");
d.addEventListener("DOMContentLoaded", e => {
	hamburguesa("#boton-flotante", ".menu", ".menu a");
	reloj(".reloj", "#activar-reloj", "#desactivar-reloj");
	alarma("#activar-alarma", "#desactivar-alarma");
	moverBola(".bola", ".contenedor-bola");
	shortcuts(".encabezado");
});
