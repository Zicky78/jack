let started = false;
let levelCounter = 0;

const gameText = document.getElementById('game-text');

document.addEventListener('keydown', key => {
	if (!started) {
		if (key.code === 'Enter') {
			levelOne();
			started = true;
			levelCounter = 1;
		}
	}
});
