const d = document;
let relojTempo;
let sonidoAlarma;
let sonido = new Audio(`../assets/house_lo.mp3`);
export function reloj(reloj, activarReloj, desactivarReloj) {
	d.addEventListener("click", e => {
		if (e.target.matches(activarReloj)) {
			relojTempo = setInterval(() => {
				let horaReloj = new Date().toLocaleTimeString();
				d.querySelector(reloj).innerHTML = `<h3> ${horaReloj} </h3>`;
			}, 1000);
			e.target.disabled = true;
			d.querySelector(desactivarReloj).disabled = false;
		}
		if (e.target.matches(desactivarReloj)) {
			clearInterval(relojTempo);
			d.querySelector(reloj).innerHTML = "<h3>00:00:00</h3>";
			e.target.disabled = true;
			d.querySelector(activarReloj).disabled = false;
		}
	});
}

export function alarma(activarAlarma, desactivarAlarma) {
	d.addEventListener("click", e => {
		if (e.target.matches(activarAlarma)) {
			d.querySelector(activarAlarma).disabled = true;
			d.querySelector(desactivarAlarma).disabled = false;
			sonidoAlarma = setInterval(() => {
				sonido.play();
			}, 0);
		}
		if (e.target.matches(desactivarAlarma)) {
			clearInterval(sonidoAlarma);
			d.querySelector(activarAlarma).disabled = false;
			d.querySelector(desactivarAlarma).disabled = true;
			sonido.pause();
			sonido.currentTime = 0;
		}
	});
}
