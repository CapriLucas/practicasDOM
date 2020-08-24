const d = document;
const w = window;

export function responsiveTester(idForm) {
	let $form = d.getElementById(idForm);
	let tester;

	$form.addEventListener("submit", e => {
		if (e.target === $form) {
			e.preventDefault();
			let url = $form.url.value;
			let alto = $form.alto.value;
			let ancho = $form.ancho.value;
			tester = w.open(
				url,
				"tester",
				`innerHeight= ${alto}, innerWidth= ${ancho}`
			);
		}
	});
	d.addEventListener("click", e => {
		if ($form.cancelar === e.target) tester.close();
	});
}
