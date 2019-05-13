/*/ Canvas Elements /*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const scoreDisplay = document.getElementById('score');

/*/ Image Assets /*/
const background = {
	imgSrc: document.getElementById('background'),
	x: 0,
	y: 0,
	w: 852,
	h: 480
};

const parallax0 = {
	imgSrc: document.getElementById('parallax0'),
	x: 767,
	y: 0,
	w: 768,
	h: 576,
	move: 0
};

const parallax = {
	imgSrc: document.getElementById('parallax'),
	x: 0,
	y: 0,
	w: 768,
	h: 576,
	move: 0
};

const parallax2 = {
	imgSrc: document.getElementById('parallax2'),
	x: -767,
	y: 0,
	w: 768,
	h: 576,
	move: 0
};

const parallax3 = {
	imgSrc: document.getElementById('parallax3'),
	x: -767 - 767,
	y: 0,
	w: 768,
	h: 576,
	move: 0
};

const jackImg = {
	imgSrc: document.getElementById('jack'),
	x: 50,
	y: 0,
	w: 49,
	h: 49
};

const lep = {
	imgSrc: document.getElementById('lep-sprite'),
	x: -1000,
	y: 1000,
	w: 60,
	h: 60
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

	/*/ Draw Platforms /*/
	drawPlatforms();

	/*/ Check Platform Collision /*/
	checkPlatformCollision();

	/*/ Draw Coins /*/
	drawCoins();

	/*/ Update Jack /*/
	updateJack();

	/*/ Draw Jack /*/
	drawJack();

	/*/ Draw Leprechaun /*/
	drawLep();

	/*/Check Leprechaun /*/
	checkLep();

	/*/ Check Coins /*/
	checkCoinCollision();

	/*/ Update Score /*/
	updateScore();

	/*/ Check Level /*/
	checkLevel();

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
		parallax0.imgSrc,
		parallax0.x,
		parallax0.y,
		parallax0.w,
		parallax0.h,
		parallax0.move,
		0,
		canvas.width,
		canvas.height
	);

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

	ctx.drawImage(
		parallax3.imgSrc,
		parallax3.x,
		parallax3.y,
		parallax3.w,
		parallax3.h,
		parallax3.move,
		0,
		canvas.width,
		canvas.height
	);
}

function updateParallax() {
	if (jack.x > 0 && jack.x < 1250 - jack.w + 10) {
		parallax0.x += jack.velX;
		parallax.x += jack.velX;
		parallax2.x += jack.velX;
		parallax3.x += jack.velX;
	}
}

function resetParallax() {
	parallax0.x = 767;
	parallax.x = 0;
	parallax2.x = -767;
	parallax3.x = -767 - 767;
}

function drawJack() {
	ctx.drawImage(
		jackImg.imgSrc,
		jackImg.x,
		jackImg.y,
		jackImg.w,
		jackImg.h,
		jack.x,
		jack.y,
		jack.w,
		jack.h
	);
}

function drawCoins() {
	coins.forEach(coin => {
		ctx.drawImage(
			coin.imgSrc,
			0,
			0,
			coin.w,
			14,
			coin.x,
			coin.y,
			coin.w * 2,
			coin.h
		);
	});
}

function updateScore() {
	scoreDisplay.innerText = `Score: ${score}`;
}

function drawPlatforms() {
	platforms.forEach(platform => {
		ctx.drawImage(
			platform.imgSrc,
			0,
			0,
			160,
			32,
			platform.x,
			platform.y,
			platform.w,
			platform.h
		);
	});
}

function drawLep() {
	ctx.drawImage(lep.imgSrc, 0, 0, 530, 530, lep.x, lep.y, lep.w, lep.h);
}

requestAnimationFrame(drawCanvas);
