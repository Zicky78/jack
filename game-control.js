let started = false;
let levelCounter = 0;

const gameText = document.getElementById('game-text');

document.addEventListener('keydown', (key) => {
	if (!started) {
		if (key.code === 'Enter') {
			levelOne();
			started = true;
			levelCounter = 1;
		}
	}
});

function checkLevel() {
	if (score === 40) {
		if (levelCounter != 2) {
			levelCounter = 2;

			setTimeout(() => {
				levelTwo();
			}, 1000);
		}
	}

	if (score === 140) {
		if (levelCounter != 3) {
			levelCounter = 3;

			setTimeout(() => {
				levelThree();
			}, 1000);
		}
	}

	if (score === 260) {
		if (levelCounter != 4) {
			levelCounter = 4;

			setTimeout(() => {
				levelFour();
			}, 1000);
		}
	}
}

document.addEventListener('keyup', (key) => {
	if (key.code === 'KeyR') {
		switch (levelCounter) {
			case 0:
				break;
			case 1:
				score = 0;
				levelOne();
				break;
			case 2:
				score = 40;
				levelTwo();
				break;
			case 3:
				score = 140;
				levelThree();
				break;
			case 4:
				score = 260;
				levelFour();
				break;
			default:
				break;
		}
	}
});
