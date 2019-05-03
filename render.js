/*/ Canvas Elements /*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const scoreDisplay = document.getElementById('score');

/*/ Image Assets /*/
const background = {
	imgSrc: document.getElementById('background'),
	x: 0,
	y: 0,
	w: 2305,
	h: 986
};

const parallax = {
	imgSrc: document.getElementById('parallax'),
	x: 0,
	y: 0,
	w: 2024,
	h: 1232,
	move: 0
};

const parallax2 = {
	imgSrc: document.getElementById('parallax2'),
	x: -3840,
	y: 0,
	w: 2024,
	h: 1232,
	move: 0
};

const jackImg = {
	imgSrc: document.getElementById('jack'),
	x: 50,
	y: 0,
	w: 49,
	h: 49
};

/*/ Loop for drawing canvas /*/
function drawCanvas() {
	/*/ Clear Canvas /*/
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	/*/ Draw Background /*/
	drawParallax();

	/*/ Update Parallax /*/
	updateParallax();

	/*/ Draw Background /*/
	drawBackground();

	/*/ Draw Coins /*/
	drawCoins();

	/*/ Update Coins /*/
	updateCoins();

	/*/ Update Jack /*/
	updateJack();

	/*/ Draw Jack /*/
	drawJack();

	/*/ Check Coins /*/
	checkCoinCollision();

	/*/ Update Score /*/
	updateScore();

	/*/ Loop /*/
	requestAnimationFrame(drawCanvas);
}

function drawBackground() {
	ctx.drawImage(
		background.imgSrc,
		background.x,
		background.y,
		background.w,
		background.h,
		0,
		0,
		canvas.width,
		canvas.height
	);
}

function drawParallax() {
	ctx.drawImage(
		parallax.imgSrc,
		parallax.x,
		parallax.y,
		parallax.w,
		parallax.h,
		parallax.move,
		0,
		canvas.width,
		canvas.height
	);

	ctx.drawImage(
		parallax2.imgSrc,
		parallax2.x,
		parallax2.y,
		parallax2.w,
		parallax2.h,
		parallax2.move,
		0,
		canvas.width,
		canvas.height
	);
}

function updateParallax() {
	if (jack.x > 0) {
		parallax.x += jack.velX;
		parallax2.x += jack.velX;
	} else {
		parallax.x = 0;
		parallax2.x = -2024;
	}

	if (parallax.x < 0) {
		parallax2.x = -2024;
	}
}

function drawJack() {
	ctx.drawImage(jackImg.imgSrc, jackImg.x, jackImg.y, jackImg.w, jackImg.h, jack.x, jack.y, jack.w, jack.h);
}

function drawCoins() {
	coins.forEach((coin) => {
		ctx.drawImage(coin.imgSrc, 0, 0, coin.w, 14, coin.x, coin.y, coin.w * 2, coin.h);
	});
}

function updateScore() {
	scoreDisplay.innerText = `Score: ${score}`;
}

requestAnimationFrame(drawCanvas);
