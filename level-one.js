function levelOne() {
	levelOneCoins();

	gameText.innerHTML =
		'> Collect the coins to progress to the next level <br> > Use Left <code><-</code> and Right <code>-></code> arrows to move <br> > Use <code>Space</code> to jump';
}

function levelOneCoins() {
	let coin = {
		x: 886,
		y: 172,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	let coin2 = {
		x: 646,
		y: 292,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	let coin3 = {
		x: 406,
		y: 412,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	let coin4 = {
		x: 180,
		y: canvas.height - 28 - 26,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin);
	coins.push(coin2);
	coins.push(coin3);
	coins.push(coin4);

	let platform = {
		x: 820,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform);

	let platform2 = {
		x: 580,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform2);

	let platform3 = {
		x: 340,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform3);

	let platform4 = {
		x: 100,
		y: canvas.height - 120,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform4);
}
