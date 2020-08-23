const d = document;
var regresiva;
export function tempo(temporizador, btnTemporizador, cancelarTemporizador) {
	d.addEventListener("click", e => {
		if (
			e.target.matches(btnTemporizador) ||
			e.target.matches(`${btnTemporizador} *`)
		) {
			let fechaFinal = desarmarFecha(
				prompt("Ingrese una fecha en formato dd/mm/aaaa")
			);
			regresiva = setInterval(() => {
				let fechaAMostrar = restaHoyFecha(new Date(), fechaFinal);
				d.querySelector(
					temporizador
				).innerText = `Dias: ${fechaAMostrar.dias}; Horas: ${fechaAMostrar.horas}; Minutos: ${fechaAMostrar.minutos}; Segundo: ${fechaAMostrar.segundos}`;
			}, 1000);
		}
		if (
			e.target.matches(cancelarTemporizador) ||
			e.target.matches(`${cancelarTemporizador} *`)
		) {
			clearInterval(regresiva);
			d.querySelector(
				temporizador
			).innerText = `Dias: ? ; Horas: ? ; Minutos: ? ; Segundo: ?`;
		}
	});
}

function restaHoyFecha(hoy, fechaFinal) {
	let difMs = fechaFinal - hoy;
	return convertMS(difMs);
}

function convertMS(milliseconds) {
	let dias, horas, minutos, segundos;
	segundos = Math.floor(milliseconds / 1000);
	minutos = Math.floor(segundos / 60);
	segundos = segundos % 60;
	horas = Math.floor(minutos / 60);
	minutos = minutos % 60;
	dias = Math.floor(horas / 24);
	horas = horas % 24;
	return {
		dias,
		horas,
		minutos,
		segundos,
	};
}
function desarmarFecha(fecha) {
	//Sabemos que fecha es de formato "dd/mm/aaaa"
	const arrayFecha = fecha.split("/");
	let d = arrayFecha[0];
	let m = arrayFecha[1];
	let a = arrayFecha[2];
	return new Date(`${m}/${d}/${a}`);
}
