//Swapnil Tiwari
//amplitude of music is shown in continous graph.

let volhistory = []; //array to store vol values
let volhistory1 = [];
let volhistory2 = [];
function preload() {
  song = loadSound("FLP(VDO) AUDIO 23.wav");
  fft = new p5.FFT(0, 512);
}
function keyPressed() {
  song.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  volhistory.push(fft.getEnergy("bass") / 500); //pushing getEnergy(bass) values in the volhistory array
  volhistory1.push(fft.getEnergy("mid") / 500); //pushing getEnergy(mid) values in the volhistory array
  volhistory2.push(fft.getEnergy("treble") / 500); //pushing getEnergy(treble) values in the volhistory array

  //plots the whole array on the canvas
  //getEnergy(bass)
  beginShape();
  fill(185, 22, 70);
  stroke(223, 216, 202);
  strokeWeight(2);
  for (i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, 400, 0);
    vertex(y, i);
  }
  endShape();

  //getEnergy(mid)
  beginShape();
  fill(47, 221, 146);
  stroke(47, 134, 166);
  strokeWeight(2);
  for (i = 0; i < volhistory1.length; i++) {
    let z = map(volhistory1[i], 0, 1, 800, 0);
    vertex(z, i);
  }
  endShape();

  //getEnergy(treble)
  beginShape();
  fill(242, 240, 19);
  stroke(99, 0, 0);
  strokeWeight(2);
  for (i = 0; i < volhistory2.length; i++) {
    let a = map(volhistory2[i], 0, 1, 1200, 0);
    vertex(a, i);
  }
  endShape();

  //to make it look continous by deleting first element of the array as soon as it reaches the endpoint
  if (volhistory.length > height - 20) {
    volhistory.splice(0, 1);
  }
  if (volhistory1.length > height - 20) {
    volhistory1.splice(0, 1);
  }
  if (volhistory2.length > height - 20) {
    volhistory2.splice(0, 1);
  }
}
