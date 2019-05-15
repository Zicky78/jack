let started = false;
let levelCounter = 0;

const gameText = document.getElementById('game-text');

document.addEventListener('keydown', (key) => {
	if (!started) {
		if (key.code === 'Enter') {
			levelFive();
			started = true;
			levelCounter = 5;
			score = 320;
		}
	}
});

function checkLevel() {
	if (score === 370) {
		if (levelCounter != 6) {
			levelCounter = 6;

			setTimeout(() => {
				levelSix();
			}, 1000);
		}
	}

	if (score === 410) {
		if (levelCounter != 7) {
			levelCounter = 7;

			setTimeout(() => {
				levelSeven();
			}, 1000);
		}
	}

	if (score === 510) {
		if (levelCounter != 8) {
			levelCounter = 8;

			setTimeout(() => {
				levelEight();
			}, 1000);
		}
	}
}

document.addEventListener('keyup', (key) => {
	if (key.code === 'KeyR') {
		switch (levelCounter) {
			case 0:
				break;
			case 5:
				score = 320;
				levelFive();
				break;
			case 6:
				score = 370;
				levelSix();
				break;
			case 7:
				score = 410;
				levelSeven();
				break;
			case 8:
				score = 510;
				levelEight();
				break;
			default:
				break;
		}
	}
});

function checkLep() {
	if (lep.x + 14 > jack.x && lep.x + 14 < jack.x + jack.w && lep.y + 14 > jack.y && lep.y + 14 < jack.y + jack.h) {
		lep.x = -1000;
		lep.y = -1000;
		setTimeout(() => {
			window.location.href = 'story3.html';
		}, 1000);
	}
}
