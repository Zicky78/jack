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
	for (i = 0; i < platforms.length; i++) {
		if (
			jack.x + jack.w - 15 > platforms[i].x &&
			jack.x + 15 < platforms[i].x + platforms[i].w &&
			(jack.y + jack.h < platforms[i].y ||
				jack.y + jack.h === platforms[i].y)
		) {
			ground = platforms[i].y - jack.h;
			break;
		} else {
			ground = canvas.height - jack.h;
		}
	}
}
