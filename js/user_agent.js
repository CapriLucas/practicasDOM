const d = document;
const n = navigator;
const ua = n.userAgent;

export function userAgent(id) {
	const $id = d.querySelector(id),
		isMobile = {
			android: () => ua.match(/android/i),
			ios: () => ua.match(/iphone|ipad|ipod/i),
			windows: () => ua.match(/windows phone/i),
			any: function () {
				return this.android() || this.ios() || this.windows();
			},
		},
		isDesktop = {
			linux: () => ua.match(/linux/i) && ua.match(/[^android]/i),
			windows: () => ua.match(/windows nt/i),
			mac: () => ua.match(/mac os/i) && ua.match(/[^(iphone|ipod|ipad)]/i),
			any: function () {
				return this.linux() || this.windows() || this.mac();
			},
		},
		isBrowser = {
			edge: () => ua.match(/edge/i),
			chrome: () => ua.match(/chrome/i),
			firefox: () => ua.match(/firefox/i),
			opera: () => ua.match(/opera/i),
			safari: () => ua.match(/safari/i),
			any: function () {
				return (
					this.edge() ||
					this.chrome() ||
					this.firefox() ||
					this.opera() ||
					this.safari()
				);
			},
		};
	let dispositivo;
	$id.innerHTML = `<ul>
	<li>${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
	<li>${isBrowser.any()}</li>
	<li>${ua}</li>
</ul>`;
}
