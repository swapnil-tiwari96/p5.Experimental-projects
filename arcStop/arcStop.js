function preload() {
  song = loadSound(
    "Skrillex - First Of The Year (Equinox) [Official Audio].mp3"
  );
}

function keyPressed() {
  song.play();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.9, 128);
  arc1 = new manyArcs(windowWidth / 2, windowHeight / 2);
  // arc2 = new manyArcs(windowWidth / 1.2, windowHeight / 6);
  // arc3 = new manyArcs(windowWidth / 6, windowHeight / 1.2);
  // arc4 = new manyArcs(windowWidth / 6, windowHeight / 6);
  // arc5 = new manyArcs(windowWidth / 2, windowHeight / 6);
  // arc6 = new manyArcs(windowWidth / 2, windowHeight / 1.2);
}

function draw() {
  let spectrum = fft.analyze();
  background(255);
  arc1.createObjects(1, 2, 3, 4, 5);
  //   arc2.createObjects(5, 4, 3, 2, 1);
  //   arc3.createObjects(1, 3, 5, 2, 4);
  //   arc4.createObjects(2, 4, 1, 3, 5);
  //   arc5.createObjects(1, 5, 2, 4, 3);
  //   arc6.createObjects(3, 4, 2, 5, 1);
}

class oneArc {
  constructor(_x, _y, _w, _h) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
  }

  createArc(_stop, _sW, _r, _g, _b) {
    strokeWeight(_sW);
    stroke(_r, _g, _b);
    fill(0);
    arc(this.x, this.y, this.w, this.h, 0, PI + _stop, PIE);
  }
}

class manyArcs {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
  createObjects(a, b, c, d, e) {
    let circle5 = new oneArc(this.x, this.y, 150 * e, 150 * e).createArc(
      fft.getEnergy("treble") / 90,
      10,
      136,
      224,
      239
    );
    let circle4 = new oneArc(this.x, this.y, 150 * d, 150 * d).createArc(
      fft.getEnergy("highMid") / 100,
      8,
      185,
      22,
      70
    );
    let circle3 = new oneArc(this.x, this.y, 150 * c, 150 * c).createArc(
      fft.getEnergy("mid") / 80,
      6,
      47,
      221,
      146
    );
    let circle2 = new oneArc(this.x, this.y, 150 * b, 150 * b).createArc(
      fft.getEnergy("lowMid") / 90,
      4,
      242,
      240,
      19
    );
    let circle1 = new oneArc(this.x, this.y, 150 * a, 150 * a).createArc(
      fft.getEnergy("bass") / 90,
      2,
      47,
      134,
      166
    );
  }
}
