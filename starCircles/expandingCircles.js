//Swapnil Tiwari
//Expanding circles according the the frequencies.

let circles = [];
let circles1 = [];
function preload() {
  song = loadSound("FLP(VDO) AUDIO 21.wav"); //load sound
}

function keyPressed() {
  song.play();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.9, 128);
  //make circles array
  for (let i = 0; i < 2000; i++) {
    circles[i] = new objCircle(random(width), random(height));
  }
}

function draw() {
  background(119, 228, 212);
  //create 500 objects of 4 different kind. The kind depends upon the music frequency.
  for (let i = 1500; i < 2000; i++) {
    circles[i].makeCircle(15, "mid", 50, 193, 205);
  }
  for (let i = 1000; i < 1500; i++) {
    circles[i].makeCircle(05, "bass", 84, 65, 121);
  }
  for (let i = 0; i < 500; i++) {
    circles[i].makeCircle(20, "treble", 23, 215, 160);
  }
  for (let i = 500; i < 1000; i++) {
    circles[i].makeCircle(10, "lowMid", 251, 244, 109);
  }
}

//class objCircle is made. Inputs are the x and y coordinate.
class objCircle {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  //function used to analyse the frequency and change the radius accordingly.
  makeCircle(r, mode, r1, g, b) {
    let spectrum = fft.analyze();
    fill(r1, g, b);
    strokeWeight(1);
    stroke(185, 22, 70);
    circle(
      this.x,
      this.y,
      r + map(fft.getEnergy(`${mode}`) / 2, 0, 64, r, r + 10) //r is changed according to the frequency.
    );
  }
}
