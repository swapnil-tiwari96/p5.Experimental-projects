//Swapnil Tiwari
//Arcs move according to the music
function preload() {
  song = loadSound("FLP(VDO) AUDIO 14.wav");
}

function keyPressed() {
  song.play();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.8, 128);
  //creating objects
  arc1 = new manyArcs(windowWidth / 1.2, windowHeight / 1.2 - 40);
  arc2 = new manyArcs(windowWidth / 1.2, windowHeight / 6 + 40);
  arc3 = new manyArcs(windowWidth / 6, windowHeight / 1.2 - 40);
  arc4 = new manyArcs(windowWidth / 6, windowHeight / 6 + 40);
  arc5 = new manyArcs(windowWidth / 2, windowHeight / 6 + 40);
  arc6 = new manyArcs(windowWidth / 2, windowHeight / 1.2 - 40);
}

function draw() {
  let spectrum = fft.analyze();
  background(0);

  //calling createObject function on arc objects
  arc1.createObjects(1, 2, 3, 4, 5);
  arc2.createObjects(5, 4, 3, 2, 1);
  arc3.createObjects(1, 3, 5, 2, 4);
  arc4.createObjects(2, 4, 1, 3, 5);
  arc5.createObjects(1, 5, 2, 4, 3);
  arc6.createObjects(3, 4, 2, 5, 1);
}

//this class creates one normal arc
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
    noFill();
    arc(this.x, this.y, this.w, this.h, 0, PI + _stop, PIE);
  }
}

//this class helps to create many arcs into a single object. Every arc has one different fftEnergy call.
class manyArcs {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
  //oneArc object is made here and the function createArc is called to create several arcs.
  createObjects(a, b, c, d, e) {
    let circle5 = new oneArc(this.x, this.y, 60 * e, 60 * e).createArc(
      fft.getEnergy("treble") / 70,
      10,
      136,
      224,
      239
    );
    let circle4 = new oneArc(this.x, this.y, 60 * d, 60 * d).createArc(
      fft.getEnergy("highMid") / 70,
      8,
      185,
      22,
      70
    );
    let circle3 = new oneArc(this.x, this.y, 60 * c, 60 * c).createArc(
      fft.getEnergy("mid") / 80,
      6,
      47,
      221,
      146
    );
    let circle2 = new oneArc(this.x, this.y, 60 * b, 60 * b).createArc(
      fft.getEnergy("lowMid") / 90,
      4,
      242,
      240,
      19
    );
    let circle1 = new oneArc(this.x, this.y, 60 * a, 60 * a).createArc(
      fft.getEnergy("bass") / 90,
      2,
      47,
      134,
      166
    );
  }
}
