function levelThree() {
	clearPlatforms();
	clearCoins();
	levelThreeObjects();
	jack.x = 100;
	jack.y = 0;
	jack.velY = 0;
	resetParallax();
}

function levelThreeObjects() {
	let coin = {
		x: 100 + 160 + 30,
		y: 220 - 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin);

	let coin2 = {
		x: 100 + 160 + 30,
		y: 220 + 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin2);

	let coin3 = {
		x: 100 + 160 + 30,
		y: 220 + 50 + 50 + 50,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin3);

	let coin4 = {
		x: 100 + 160 + 30,
		y: 220 + 50 + 50 + 50 + 100,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin4);

	let coin5 = {
		x: 100 + 160 + 160 - 28,
		y: 580 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin5);

	let coin6 = {
		x: 100 + 160 + 160,
		y: 580 - 28 - 20 - 60,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin6);

	let coin7 = {
		x: 100 + 160 + 160 + 28 + 30,
		y: 580 - 28 - 20 - 60 - 40,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin7);

	let coin8 = {
		x: 100 + 160 + 160 + 140,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin8);

	let coin9 = {
		x: 100 + 160 + 160 + 140 + 160 - 28,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin9);

	let coin10 = {
		x: 100 + 160 + 160 + 140 + 160 - 28 + 80,
		y: 580 - 28 - 20 - 60 - 40,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin10);

	let coin11 = {
		x: 100 + 160 + 160 + 160 + 140 + 140 - 28,
		y: 580 - 28 - 20 - 60,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin11);

	let coin12 = {
		x: 100 + 160 + 160 + 160 + 140 + 140,
		y: 580 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin12);

	let platform = {
		x: 100,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform);

	let platform2 = {
		x: 100 + 160 + 160 + 140,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform2);

	let platform3 = {
		x: 100 + 160 + 160 + 160 + 140 + 140,
		y: 580,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform3);

	let platform4 = {
		x: 100 + 160,
		y: 580,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform4);
}
