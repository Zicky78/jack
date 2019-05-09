const platforms = [];

const p_l = document.getElementById('p-l');
const p_m = document.getElementById('p-m');
const p_r = document.getElementById('p-r');

let platform = {
	x: 700,
	y: 600,
	w: 100,
	h: 32,
	imgSrc: p_l
};

platforms.push(platform);

let platform2 = {
	x: 850,
	y: 565,
	w: 150,
	h: 32,
	imgSrc: p_m
};

platforms.push(platform2);

function checkPlatformCollision() {
	platforms.forEach(platform => {
		if (
			jack.x + jack.w - 15 > platform.x &&
			jack.x + 15 < platform.x + platform.w
		) {
			if (
				jack.y + jack.h < platform.y ||
				jack.y + jack.h === platform.y
			) {
				ground = platform.y - jack.h;
			}
		} else {
			ground = canvas.height - jack.h;
		}
	});
}
