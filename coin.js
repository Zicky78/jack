const coinImg0 = document.getElementById('coin0');
const coinImg1 = document.getElementById('coin1');
const coinImg2 = document.getElementById('coin2');
const coinImg3 = document.getElementById('coin3');
const coinImg4 = document.getElementById('coin4');

const coinImgs = [ coinImg0, coinImg1, coinImg2, coinImg3, coinImg4 ];

const coins = [];

let coinImgCounter = 0;

let coin = {
	x: canvas.width / 2,
	y: canvas.height - 28 - 106,
	w: 28,
	h: 28,
	imgSrc: coinImgs[0]
};

let coin2 = {
	x: canvas.width / 2 + 100,
	y: canvas.height - 28 - 26,
	w: 28,
	h: 28,
	imgSrc: coinImgs[0]
};

coins.push(coin);
coins.push(coin2);

setInterval(() => {
	if (coinImgCounter < 4) {
		coinImgCounter++;
	} else {
		coinImgCounter = 0;
	}
}, 1000 / 10);

function updateCoins() {
	coins.forEach((coin) => {
		coin.imgSrc = coinImgs[coinImgCounter];
		switch (coinImgCounter) {
			case 0:
				coin.w = 14;
				break;
			case 1:
				coin.w = 10;
				coin.y -= 1;
				break;
			case 2:
				coin.w = 6;
				coin.y -= 1;
				break;
			case 3:
				coin.w = 10;
				coin.y += 1;
				break;
			case 4:
				coin.w = 13;
				coin.y += 1;
				break;
		}
	});
}

function checkCoinCollision() {
	let coinIndex = 0;
	coins.forEach((coin) => {
		if (
			coin.x + 14 > jack.x &&
			coin.x + 14 < jack.x + jack.w &&
			coin.y + 14 > jack.y &&
			coin.y + 14 < jack.y + jack.h
		) {
			coins.splice(coinIndex, 1);
			score += 10;
		}
		coinIndex++;
	});
}
