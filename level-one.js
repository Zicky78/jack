function levelOne() {
	levelOneCoins();
	gameText.innerText = '> Collect the coins to progress to the next level';
	setTimeout(() => {
		gameText.innerHTML =
			'> Left and right arrows to move <br> > Space to jump';
	}, 1000);
}

function levelOneCoins() {
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
}
