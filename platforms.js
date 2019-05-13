let platforms = [];

const p_l = document.getElementById('p-l');
const p_m = document.getElementById('p-m');
const p_r = document.getElementById('p-r');

function checkPlatformCollision() {
	for (i = 0; i < platforms.length; i++) {
		if (
			jack.x + jack.w - 15 > platforms[i].x &&
			jack.x + 15 < platforms[i].x + platforms[i].w &&
			(jack.y + jack.h < platforms[i].y || jack.y + jack.h === platforms[i].y)
		) {
			ground = platforms[i].y - jack.h;
			break;
		} else {
			ground = canvas.height - jack.h;
		}
	}
}

function clearPlatforms() {
	platforms = [];
}
