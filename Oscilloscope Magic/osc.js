let x1, y1, x2, y2;
let counter = 0;
let bins = 512;

function preload() {
  song = loadSound("Aerodrome/7. chorus3.wav");
}

function keyPressed() {
  song.play();
}
function setup() {
  createCanvas(bins, bins);
  fft = new p5.FFT(0, bins);
  amp = new p5.Amplitude();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  blendMode(BLEND);
  strokeWeight(6);
  let dList = [];
  let level = amp.getLevel();

  let spectrum = fft.waveform(bins);
  beginShape();

  //vertical Line
  for (let i = 0; i < spectrum.length; i++) {
    x1 = floor(map(spectrum[i], -1, 1, 0, width));
    y1 = floor(map(i, 0, spectrum.length, height, 0));

    if (counter % 10 == 0) {
      stroke(level * 1000, level * 750);
      noFill();
      // vertex(x1, y1);

      circle(1.5 * x2, 1.5 * y2, level * 500);
      circle(height - 1.5 * x2, width - 1.5 * y2, level * 500);
      circle(height - 1.5 * x2, 1.5 * y2, level * 500);
      circle(1.5 * x2, width - 1.5 * y2, level * 500);

      // rect(1.5 * x2, 1.5 * y2, level * 750);
      // rect(height - 1.5 * x2, width - 1.5 * y2, level * 500);
      // rect(height - 1.5 * x2, 1.5 * y2, level * 500);
      // rect(1.5 * x2, width - 1.5 * y2, level * 500);
    }
    dList.push(x1.toString() + "," + y1.toString());
  }

  endShape();

  //horizontal
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    x2 = floor(map(i, 0, spectrum.length, 0, width));
    y2 = floor(map(spectrum[i], -1, 1, height, 0));

    if (counter % 10 == 0) {
      stroke(level * 1000, level * 750);
      noFill();
      // vertex(x2, y2);

      circle(1.5 * x2, 1.5 * y2, level * 500);
      circle(height - 1.5 * x2, width - 1.5 * y2, level * 500);
      circle(height - 1.5 * x2, 1.5 * y2, level * 500);
      circle(1.5 * x2, width - 1.5 * y2, level * 500);

      // rect(1.5 * x2, 1.5 * y2, level * 750);
      // rect(height - 1.5 * x2, width - 1.5 * y2, level * 500);
      // rect(height - 1.5 * x2, 1.5 * y2, level * 500);
      // rect(1.5 * x2, width - 1.5 * y2, level * 500);
    }

    let search = x2.toString() + "," + y2.toString();
    if (dList.indexOf(search) != -1) {
      noStroke();

      //inner rects
      // stroke(level * 1000, 0, 255, level * 750);
      fill(0, 255, level * 1000, level * 750);
      rect(x2, y2, level * 500);
      rect(height - x2, width - y2, level * 500);
      rect(height - x2, y2, level * 500);
      rect(x2, width - y2, level * 500);

      //outer rects
      // stroke(level * 1000, 0, 255, level * 750);
      // fill(0, 255, level * 1000, level * 750);
      // rect(1.5 * x2, 1.5 * y2, level * 750);
      // rect(height - 1.5 * x2, width - 1.5 * y2, level * 500);
      // rect(height - 1.5 * x2, 1.5 * y2, level * 500);
      // rect(1.5 * x2, width - 1.5 * y2, level * 500);

      // inner circle
      //stroke(0, 255, level * 1000, level * 750);
      fill(level * 1000, 0, 255, level * 750);
      circle(x2, y2, level * 500);
      circle(height - x2, width - y2, level * 500);
      circle(height - x2, y2, level * 500);
      circle(x2, width - y2, level * 500);

      //outer circle
      // stroke(0, 255, level * 1000, level * 750);
      // fill(level * 1000, 0, 255, level * 750);
      // circle(1.5 * x2, 1.5 * y2, level * 500);
      // circle(height - 1.5 * x2, width - 1.5 * y2, level * 500);
      // circle(height - 1.5 * x2, 1.5 * y2, level * 500);
      // circle(1.5 * x2, width - 1.5 * y2, level * 500);
    }
  }
  endShape();
  counter++;
}
