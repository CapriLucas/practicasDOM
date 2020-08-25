const d = document,
	n = navigator;

export function webCam(idDiv) {
	const $video = d.createElement("video");
	n.mediaDevices
		.getUserMedia({ video: true, audio: false })
		.then(stream => {
			$video.srcObject = stream;
			d.querySelector(idDiv).insertAdjacentElement("beforeend", $video);
			$video.play();
			location.href = "#seccion-7";
		})
		.catch(err => {
			let $textoError = d.createElement("h3");
			$textoError.innerText = `Fallo para el carajo, el error es: ${err}`;
			d.querySelector(idDiv).insertAdjacentElement("beforeend", $textoError);
		});
	d.querySelector(`${idDiv} p`).remove();
}
