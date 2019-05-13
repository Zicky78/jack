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

	if (score === 140) {
		if (levelCounter != 7) {
			levelCounter = 7;

			setTimeout(() => {
				levelSeven();
			}, 1000);
		}
	}

	if (score === 260) {
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
				score = 0;
				levelOne();
				break;
			case 6:
				score = 40;
				levelTwo();
				break;
			case 7:
				score = 140;
				levelThree();
				break;
			case 8:
				score = 260;
				levelFour();
				break;
			default:
				break;
		}
	}
});
