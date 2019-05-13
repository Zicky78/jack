function levelTen() {
	clearPlatforms();
	clearCoins();
	levelTenObjects();
	jack.x = canvas.width / 2 - 40;
	jack.y = 0;
	jack.velY = -6;
	resetParallax();
}

function levelTenObjects() {
	let platform5 = {
		x: 990 - 40,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform5);

	let coin = {
		x: 990 - 40 + 80 - 14,
		y: 220 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin);

	let platform4 = {
		x: 990 - 40,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform4);

	let coin2 = {
		x: 990 - 40 + 80 - 14,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin2);

	let platform8 = {
		x: canvas.width / 2,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_r
	};

	platforms.push(platform8);

	let coin3 = {
		x: canvas.width / 2 + 80 - 14,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin3);

	let platform11 = {
		x: canvas.width / 2 - 160,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_l
	};

	platforms.push(platform11);

	let coin4 = {
		x: canvas.width / 2 - 160 + 80 - 14,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin4);

	let platform6 = {
		x: 100 + 40,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform6);

	let coin5 = {
		x: 100 + 40 + 80 - 14,
		y: 220 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin5);

	let platform7 = {
		x: 100 + 40,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform7);

	let coin8 = {
		x: 100 + 40 + 80 - 14,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin8);
}
