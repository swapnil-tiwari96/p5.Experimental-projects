//Swapnil Tiwari
//Bezier

function preload() {
  song = loadSound("weak sick/10 - weak sick - outro-2.wav");
}
function keyPressed() {
  song.play();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT(0.1, 1024);
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  strokeWeight(8);
  stroke("#4DADFA");
  noFill();

  bezier(
    10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    fft.getEnergy("treble") - 1200, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 1200 - fft.getEnergy("treble"), //y3 - anchor point 2
    width - 10, //x4 - end point
    height / 2 //y4 - end point
  );

  bezier(
    10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    0 + fft.getEnergy("highMid") - 900, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 900 - fft.getEnergy("highMid"), //y3 - anchor point 2
    width - 10, //x4 - end point
    height / 2 //y4 - end point
  );
  bezier(
    10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    0 + fft.getEnergy("mid") - 600, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 600 - fft.getEnergy("mid"), //y3 - anchor point 2
    width - 10, //x4 - end point
    height / 2 //y4 - end point
  );

  bezier(
    10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    0 + fft.getEnergy("lowMid") - 300, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 300 - fft.getEnergy("lowMid"), //y3 - anchor point 2
    width - 10, //x4 - end point
    height / 2 //y4 - end point
  );

  bezier(
    10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    fft.getEnergy("bass"), //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height - fft.getEnergy("bass"), //y3 - anchor point 2
    width - 10, //x4 - end point
    height / 2 //y4 - end point
  );

  //Opposite side
  bezier(
    width - 10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    fft.getEnergy("treble") - 1200, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 1200 - fft.getEnergy("treble"), //y3 - anchor point 2
    10, //x4 - end point
    height / 2 //y4 - end point
  );

  bezier(
    width - 10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    0 + fft.getEnergy("highMid") - 900, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 900 - fft.getEnergy("highMid"), //y3 - anchor point 2
    10, //x4 - end point
    height / 2 //y4 - end point
  );
  bezier(
    width - 10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    0 + fft.getEnergy("mid") - 600, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 600 - fft.getEnergy("mid"), //y3 - anchor point 2
    10, //x4 - end point
    height / 2 //y4 - end point
  );

  bezier(
    width - 10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    0 + fft.getEnergy("lowMid") - 300, //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height + 300 - fft.getEnergy("lowMid"), //y3 - anchor point 2
    10, //x4 - end point
    height / 2 //y4 - end point
  );

  bezier(
    width - 10, //x1 - start point
    height / 2, //y1 - start point
    width / 3, //x2 - anchor point 1
    fft.getEnergy("bass"), //y2 - anchor point 1
    (2 / 3) * width, //x3 - anchor point 2
    height - fft.getEnergy("bass"), //y3 - anchor point 2
    10, //x4 - end point
    height / 2 //y4 - end point
  );
  line(10, height / 2, width - 10, height / 2);
}
