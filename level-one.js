function levelOne() {
	levelOneCoins();

	gameText.innerHTML =
		'> Collect the coins to progress to the next level <br> > Use Left <code><-</code> and Right <code>-></code> arrows to move <br> > Use <code>Space</code> to jump';
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
