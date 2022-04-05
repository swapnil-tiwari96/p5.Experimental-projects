function preload() {
  song = loadSound("/Collabs/blezei colaba master.wav");
}

function keyPressed() {
  song.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fft = new p5.FFT(0);
}

function draw() {
  let spectrum = fft.analyze();
  background(0);
  let n = 100 * (fft.getEnergy("treble") / 150);
  let d = 361 * (fft.getEnergy("mid") / 150);
  translate(width / 2, height / 2);
  beginShape();
  noFill();
  for (let i = 0; i <= 361; i++) {
    stroke(150, 60, fft.getEnergy("mid"));
    let k = i * d;
    let r =
      150 *
      (fft.getEnergy("mid") / 100) *
      sin(n * k * (fft.getEnergy("mid") / 100));
    let x = r * sin(k);
    let y = r * cos(k);
    vertex(x, y);
  }
  endShape();
}
