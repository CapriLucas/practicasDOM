const d = document;
export function tempo(temporizador) {
	d.addEventListener();
}

function desarmarFecha(fecha) {
	//Sabemos que fecha es de formato "dd/mm/aaaa"
	const arrayFecha = fecha.split("/");
	let d = arrayFecha[0];
	let m = arrayFecha[1];
	let a = arrayFecha[2];
	return new Date(`${m}/${d}/${a}`);
}
