function levelFour() {
	clearPlatforms();
	clearCoins();
	levelFourObjects();
	jack.x = 100;
	jack.y = 0;
	jack.velY = 0;
	resetParallax();
}

function levelFourObjects() {
	let coin = {
		x: 100 + 20,
		y: 172,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin);

	let coin2 = {
		x: 100 + 160 - 28 - 12,
		y: 172,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin2);

	let coin3 = {
		x: 340 + 20,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin3);

	let coin4 = {
		x: 340 + 160 - 28 - 12,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin4);

	let coin5 = {
		x: 580 + 20,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin5);

	let coin6 = {
		x: 580 + 160 - 28 - 12,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin6);

	// let coin7 = {
	// 	x: 580,
	// 	y: 580 - 28 - 20 - 60 - 40,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin7);

	// let coin8 = {
	// 	x: 100 + 160 + 160 + 140,
	// 	y: 460 - 28 - 20,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin8);

	let platform = {
		x: 100,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform);

	let platform2 = {
		x: 340,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform2);

	let platform3 = {
		x: 580,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform3);

	let platform4 = {
		x: 820,
		y: 580,
		w: 160,
		h: 32,
		imgSrc: p_l
	};

	platforms.push(platform4);

	let platform5 = {
		x: 820 + 160,
		y: 580,
		w: 160,
		h: 32,
		imgSrc: p_r
	};

	platforms.push(platform5);

	lep.x = 820 + 160 + 100;
	lep.y = 580 - 60;
}
