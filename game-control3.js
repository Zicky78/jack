let started = false;
let levelCounter = 0;

const gameText = document.getElementById('game-text');

document.addEventListener('keydown', key => {
	if (!started) {
		if (key.code === 'Enter') {
			levelNine();
			started = true;
			levelCounter = 9;
			score = 550;
		}
	}
});

function checkLevel() {
	if (score === 630) {
		if (levelCounter != 10) {
			levelCounter = 10;

			setTimeout(() => {
				levelTen();
			}, 1000);
		}
	}

	if (score === 690) {
		if (levelCounter != 11) {
			levelCounter = 11;

			setTimeout(() => {
				levelEleven();
			}, 1000);
		}
	}

	if (score === 760) {
		if (levelCounter != 12) {
			levelCounter = 12;

			setTimeout(() => {
				levelTwelve();
			}, 1000);
		}
	}
}

document.addEventListener('keyup', key => {
	if (key.code === 'KeyR') {
		switch (levelCounter) {
			case 0:
				break;
			case 9:
				score = 550;
				levelNine();
				break;
			case 10:
				score = 630;
				levelTen();
				break;
			case 11:
				score = 690;
				levelEleven();
				break;
			case 12:
				score = 760;
				levelTwelve();
				break;
			default:
				break;
		}
	}
});

function checkLep() {
	if (
		lep.x + 14 > jack.x &&
		lep.x + 14 < jack.x + jack.w &&
		lep.y + 14 > jack.y &&
		lep.y + 14 < jack.y + jack.h
	) {
		lep.x = -1000;
		lep.y = -1000;
		setTimeout(() => {
			window.location.href = 'story2.html';
		}, 1000);
	}
}
