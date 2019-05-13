function levelFive() {
	clearPlatforms();
	clearCoins();
	levelFiveObjects();
	jack.x = 100;
	jack.y = 0;
	jack.velY = 0;
	resetParallax();
}

function levelFiveObjects() {
	let coin = {
		x: 100 + 80 - 14,
		y: 172,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin);

	let coin2 = {
		x: 990 + 80 - 14,
		y: 172,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin2);

	let coin3 = {
		x: 340 - 20 + 80 - 14,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin3);

	let coin4 = {
		x: canvas.width / 2 - 14,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin4);

	let coin5 = {
		x: 770 + 80 - 14,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin5);

	let platform = {
		x: 100,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform);

	let platform_2 = {
		x: 990,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform_2);

	let platform2 = {
		x: 340 - 20,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform2);

	let platform2_2 = {
		x: 770,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform2_2);

	let platform3 = {
		x: canvas.width / 2 - 80,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform3);
}
