


        /*/ Canvas Elements /*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



        /*/ Image Assets /*/
const background = {
    imgSrc: document.getElementById('background'),
    x: 0,
    y: 0,
    w: 2305,
    h: 986,
}

const parallax = {
    imgSrc: document.getElementById('parallax'),
    x: 0,
    y: 0,
    w: 3840,
    h: 2160,
    move: 0,
}

const jackImg = {
    imgSrc: document.getElementById('jack'),
    x: 50,
    y: 0,
    w: 49,
    h: 49,
}



        /*/ Loop for drawing canvas /*/
function drawCanvas() {

        /*/ Clear Canvas /*/
    ctx.clearRect(0, 0, canvas.width, canvas.height);

        /*/ Draw Background /*/
    drawParallax();

        /*/ Draw Background /*/
    drawBackground();

        /*/ Update Jack /*/
    updateJack();

        /*/ Draw Jack /*/
    drawJack();

        /*/ Loop /*/
    requestAnimationFrame(drawCanvas);
}


function drawBackground() {
    ctx.drawImage(background.imgSrc, background.x, background.y, background.w, background.h, 0, 0, canvas.width, canvas.height);
}

function drawParallax() {
    ctx.drawImage(parallax.imgSrc, parallax.x, parallax.y, parallax.w, parallax.h, parallax.move, 0, canvas.width, canvas.height);
}

function drawJack() {
    ctx.drawImage(jackImg.imgSrc, jackImg.x, jackImg.y, jackImg.w, jackImg.h, jack.x, jack.y, jack.w, jack.h);
}




requestAnimationFrame(drawCanvas);