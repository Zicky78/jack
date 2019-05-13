function levelNine() {
	clearPlatforms();
	clearCoins();
	levelNineObjects();
	jack.x = 100;
	jack.y = 520;
	jack.velY = -6;
	resetParallax();
}

function levelNineObjects() {
	// let coin = {
	// 	x: 100 + 20,
	// 	y: 172,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin);

	// let coin2 = {
	// 	x: 100 + 160 - 28 - 12,
	// 	y: 172,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin2);

	// let coin3 = {
	// 	x: 340 + 20,
	// 	y: 340 - 28 - 20,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin3);

	// let coin4 = {
	// 	x: 340 + 160 - 28 - 12,
	// 	y: 340 - 28 - 20,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin4);

	// let coin5 = {
	// 	x: 580 + 20,
	// 	y: 460 - 28 - 20,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin5);

	// let coin6 = {
	// 	x: 580 + 160 - 28 - 12,
	// 	y: 460 - 28 - 20,
	// 	w: 28,
	// 	h: 28,
	// 	imgSrc: coinImgs[0]
	// };

	// coins.push(coin6);

	let coin7 = {
		x: 100 + 80 - 14,
		y: 580 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin7);

	let coin8 = {
		x: 100 + 80 - 14,
		y: 460 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin8);

	let coin9 = {
		x: 100 + 80 - 14,
		y: 340 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin9);

	let coin10 = {
		x: 100 + 80 - 14,
		y: 220 - 28 - 20,
		w: 28,
		h: 28,
		imgSrc: coinImgs[0]
	};

	coins.push(coin10);

	// let platform = {
	// 	x: 100,
	// 	y: 220,
	// 	w: 160,
	// 	h: 32,
	// 	imgSrc: p_m
	// };

	// platforms.push(platform);

	// let platform2 = {
	// 	x: 340,
	// 	y: 340,
	// 	w: 160,
	// 	h: 32,
	// 	imgSrc: p_m
	// };

	// platforms.push(platform2);

	// let platform3 = {
	// 	x: 580,
	// 	y: 460,
	// 	w: 160,
	// 	h: 32,
	// 	imgSrc: p_m
	// };

	// platforms.push(platform3);

	let platform4 = {
		x: 100,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform4);

	let platform8 = {
		x: 100 + 160 + 160 + 30,
		y: 220,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform8);

	let platform5 = {
		x: 100,
		y: 340,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform5);

	let platform6 = {
		x: 100,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform6);

	let platform9 = {
		x: 990 - 160,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_l
	};

	platforms.push(platform9);

	let platform10 = {
		x: 990,
		y: 460,
		w: 160,
		h: 32,
		imgSrc: p_r
	};

	platforms.push(platform10);

	let platform7 = {
		x: 100,
		y: 580,
		w: 160,
		h: 32,
		imgSrc: p_m
	};

	platforms.push(platform7);

	lep.x = 990 + 100;
	lep.y = 460 - 60;
}
