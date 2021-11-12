let circles = [];
let modes = ["bass", "lowMid", "mid", "highMid", "treble"];
function preload() {
  song = loadSound("Ry Legit - Buzz Lightyear (HD).mp3");
}

function keyPressed() {
  song.play();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.9, 128);
  let x = windowWidth / 10;
  let y = windowHeight / 10;
  for (let i = 0; i < 2000; i++) {
    circles[i] = new objCircle(
      random(width),
      random(height),
      random(255),
      random(255),
      random(255)
    );
  }
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  for (let rans of circles) {
    rans.makeCircle(random(modes));
  }
}

class objCircle {
  constructor(_x, _y, _r1, _g, _b) {
    this.x = _x;
    this.y = _y;
    this.r1 = _r1;
    this.g = _g;
    this.b = _b;
  }

  makeCircle(mode) {
    fill(this.r1, this.r1, this.r1);
    noStroke();
    circle(this.x, this.y, fft.getEnergy(`${mode}`) / 17);
  }
}
