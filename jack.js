const jack = {
	x: 0,
	y: canvas.height - 80 - 200,
	velX: 0,
	velY: 0,
	gravity: 0.5,
	w: 80,
	h: 80,
	imgCounter: 1,
	onGround: true
};

let right = false;
let left = false;
let score = 0;
let ground = canvas.height - jack.h;

document.addEventListener('keydown', key => {
	if (key.code === 'ArrowRight') {
		if (jack.velX < 4) {
			jack.velX += 2;
		}

		if (!right) {
			left = false;
			right = true;
			jackImg.x = 50;
			jackImg.y = 0;

			setTimeout(() => {
				jackImg.x = 100;
				jackImg.y = 97;
			}, 500);
		} else if (jack.imgCounter === 1) {
			jackImg.x = 100;
			jackImg.y = 97;
			jack.imgCounter++;
		} else if (jack.imgCounter === 2) {
			jackImg.x = 50;
			jackImg.y = 96;
			jack.imgCounter++;
		} else if (jack.imgCounter === 3) {
			jackImg.x = 0;
			jackImg.y = 97;
			jack.imgCounter++;
		} else if (jack.imgCounter === 4) {
			jackImg.x = 50;
			jackImg.y = 96;
			jack.imgCounter = 1;
		}
	}

	if (key.code === 'ArrowLeft') {
		if (jack.velX > -4) {
			jack.velX += -2;
		}

		if (!left) {
			left = true;
			right = false;
			jackImg.x = 50;
			jackImg.y = 0;

			setTimeout(() => {
				jackImg.x = 100;
				jackImg.y = 48;
			}, 200);
		} else if (jack.imgCounter === 1) {
			jackImg.x = 100;
			jackImg.y = 48;
			jack.imgCounter++;
		} else if (jack.imgCounter === 2) {
			jackImg.x = 50;
			jackImg.y = 48;
			jack.imgCounter++;
		} else if (jack.imgCounter === 3) {
			jackImg.x = 0;
			jackImg.y = 48;
			jack.imgCounter++;
		} else if (jack.imgCounter === 4) {
			jackImg.x = 50;
			jackImg.y = 48;
			jack.imgCounter = 1;
		}
	}

	if (key.code === 'Space') {
		if (jack.onGround === true) {
			startJump();
		}
	}
});

document.addEventListener('keyup', key => {
	if (key.code === 'ArrowRight') {
		let rightInterval = setInterval(() => {
			jack.velX -= 1.7;

			if (jack.imgCounter === 1) {
				jackImg.x = 100;
				jackImg.y = 97;
				jack.imgCounter++;
			} else if (jack.imgCounter === 2) {
				jackImg.x = 50;
				jackImg.y = 96;
				jack.imgCounter++;
			} else if (jack.imgCounter === 3) {
				jackImg.x = 0;
				jackImg.y = 97;
				jack.imgCounter++;
			} else if (jack.imgCounter === 4) {
				jackImg.x = 50;
				jackImg.y = 96;
				jack.imgCounter = 1;
			}

			if (jack.velX < 0) {
				jack.velX = 0;
				clearInterval(rightInterval);
			}
		}, 200);
	}

	if (key.code === 'ArrowLeft') {
		let leftInterval = setInterval(() => {
			jack.velX += 1.7;

			if (jack.imgCounter === 1) {
				jackImg.x = 100;
				jackImg.y = 48;
				jack.imgCounter++;
			} else if (jack.imgCounter === 2) {
				jackImg.x = 50;
				jackImg.y = 48;
				jack.imgCounter++;
			} else if (jack.imgCounter === 3) {
				jackImg.x = 0;
				jackImg.y = 48;
				jack.imgCounter++;
			} else if (jack.imgCounter === 4) {
				jackImg.x = 50;
				jackImg.y = 48;
				jack.imgCounter = 1;
			}

			if (jack.velX > 0) {
				jack.velX = 0;
				clearInterval(leftInterval);
			}
		}, 200);
	}

	if (key.code === 'Space') {
		endJump();
	}
});

function startJump() {
	if (jack.onGround === true) {
		jack.velY = -12;
		jack.onGround = false;
	}
}

function endJump() {
	if (jack.velY < -6) {
		jack.velY = -6;
	}
}

function updateJack() {
	jack.velY += jack.gravity;
	jack.y += jack.velY;
	jack.x += jack.velX;

	if (jack.y > ground) {
		jack.y = ground;
		jack.onGround = true;
	}

	if (jack.x < 0) {
		jack.x = 0;
	}

	if (jack.x + jack.w - 10 > 1250) {
		jack.x = 1250 - jack.w + 10;
	}
}
