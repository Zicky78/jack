function levelTwo() {
	clearPlatforms();
	clearCoins();
	levelTwoObjects();
	jack.x = 820 - 600;
	jack.y = 0;
	jack.velY = 0;
	resetParallax();
}

function levelTwoObjects() {
	let coin = {
		x: 820 - 600 + 160 - 28,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin);

	let coin2 = {
		x: 820 - 600 + 160 - 28 + 70,
		y: 460 - 28 - 20 - 60,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin2);

	let coin3 = {
		x: 820 - 600 + 160 - 28 + 70 + 60,
		y: 460 - 28 - 20 - 60,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin3);

	let coin4 = {
		x: 820 - 600 + 160 + 160,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin4);

	let coin5 = {
		x: 820 - 600 + 160 + 160 + 160 - 28,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin5);

	let coin6 = {
		x: 820 - 600 + 160 + 160 + 160 - 28 + 20,
		y: 460 - 28 - 20 - 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin6);

	let coin7 = {
		x: 820 - 600 + 160 + 160 + 160 - 28 + 20 + 20,
		y: 460 - 28 - 20 - 50 - 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin7);

	let coin8 = {
		x: 820 - 600 + 160 + 160 + 160 - 28 + 20 + 20 + 50,
		y: 460 - 28 - 20 - 50 - 50 - 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin8);

	let coin9 = {
		x: 820 - 600 + 160 + 160 + 160 + 80 + 40,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin9);

	let coin10 = {
		x: 820 - 600 + 160 + 160 + 160 + 80 + 40 + 160 + 20,
		y: 340 - 28 - 20 - 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin10);

	let platform = {
		x: 820 - 600 + 160 + 160 + 160 + 80 + 40,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform);

	let platform2 = {
		x: 820 - 600 + 160 + 160,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform2);

	let platform3 = {
		x: 820 - 600,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform3);
}
