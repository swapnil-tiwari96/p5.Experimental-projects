//Swapnil Tiwari

let randRects = [];
let angle = 0;

function preload() {
  song = loadSound("Jamie xx- All Under One Roof Raving.mp3");
}
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
  song.play();
  for (let i = 0; i < 1000; i++) {
    randRects[i] = new randRect(
      random(-30, width + 20),
      random(-40, height + 20),
      random(50, 100),
      random(30, 80),
      random(255),
      random(255),
      random(255),
      random(-10, 10)
    );
    console.log(randRect);
  }
}

function draw() {
  background(0);

  for (let rans of randRects) {
    push();
    rans.rotateRect();
    rans.createRect();
    pop();
  }
}

class randRect {
  constructor(_x, _y, _w, _h, _r, _g, _b, _rA) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.rA = _rA;
  }

  createRect() {
    noStroke();
    fill(this.r, this.g, this.b, 150);
    rect(0, 0, this.w, this.h);
  }

  rotateRect() {
    translate(this.x, this.y);
    let vol = amp.getLevel();
    let bigVol = map(vol, 0, 1, 10, 400);
    rotate(bigVol);
  }
}
