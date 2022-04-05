let backS = 0;

function preload() {
  song = loadSound("weak sick/9 - weak sick - outro-1.wav");
}
function keyPressed() {
  song.play();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.4, 1024);
  fft1 = new p5.FFT(0.8, 1024);
}

function draw() {
  background(255);
  let spectrum = fft.analyze();
  let spectrum1 = fft1.analyze();

  stroke(0);
  for (j = 0; j < spectrum1.length; j += 1) {
    let amp1 = map(spectrum1[j], 0, 1, height, 0);
    line(j, height, j, amp1);
    trigerBass(amp1);
    trigerMid(amp1);
  }
  stroke("#7FFF00");

  for (i = 0; i < spectrum.length; i += 1) {
    let amp = map(spectrum[i], 0, 1, width, 0);

    line(width, i, amp, i);
    trigerBass(amp);
    trigerMid(amp);
  }
}

function trigerMid(x) {
  if (fft.getEnergy("mid") > 150) {
    push();
    fill(0);
    stroke("#FF005C");
    //fill("#24A19C");
    circle(width / 2, height / 2, x / 250);
    //backS = 0;
    pop();
  } else {
    push();

    fill(0);
    //fill("#D9534F");
    rect(width / 2, height / 2, x / 500, x / 500);
    //backS = 255;
    pop();
  }
}

function trigerBass(x) {
  if (fft.getEnergy("bass") > 100) {
    push();
    //fill(0);
    stroke(0);
    fill("#8946A6");
    rect(width / 2, height / 2, x / 250, x / 250);

    pop();
    backS = 0;
  } else {
    push();
    //fill(0);
    fill("#FFC900");
    circle(width / 2, height / 2, x / 250);
    pop();
    backS = 255;
  }
}
