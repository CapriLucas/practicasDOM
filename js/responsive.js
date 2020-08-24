const d = document;
const w = window;

export function responsiveMedia(
	id,
	mediaQuery,
	contenidoDesktop,
	contenidoMobile
) {
	let breakpoint = w.matchMedia(mediaQuery);

	const responsive = e => {
		if (e.matches) {
			d.getElementById(id).innerHTML = contenidoDesktop;
		} else {
			d.getElementById(id).innerHTML = contenidoMobile;
		}
	};

	breakpoint.addListener(responsive);
	responsive(breakpoint);
}
