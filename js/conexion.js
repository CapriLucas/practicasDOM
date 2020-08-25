const d = document,
	w = window,
	n = navigator;

export function detectorConexion() {
	let $div = d.createElement("div");
	const isOnline = () => {
		if (n.onLine) {
			$div.textContent = "Conexion establecida";
			$div.classList.add("online");
			$div.classList.remove("offline");
		} else {
			$div.textContent = "Conexion perdida";
			$div.classList.add("offline");
			$div.classList.remove("online");
		}
		d.body.insertAdjacentElement("afterbegin", $div);
		setTimeout(() => {
			d.body.removeChild($div);
		}, 3000);
	};
	w.addEventListener("online", e => isOnline());
	w.addEventListener("offline", e => isOnline());
	//barra-conectado offline
}
