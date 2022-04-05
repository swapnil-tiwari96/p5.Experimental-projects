//Swapnil Tiwari
//amplitude of music is shown in continous graph.

let volhistory = []; //array to store vol values
let volhistory1 = [];
let volhistory2 = [];
function preload() {
  song = loadSound("Aerodrome/8 - aerodrome - outro.wav");
  fft = new p5.FFT(0.1, 512);
}
function keyPressed() {
  song.play();
}

function setup() {
  createCanvas(800, 800);
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
  noFill();
  beginShape();
  //fill(185, 22, 70);
  stroke(255);
  strokeWeight(2);
  for (i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, 200, 0);
    vertex(i, y);
  }
  endShape();

  //getEnergy(mid)
  beginShape();
  //fill(47, 221, 146);
  stroke(255);
  strokeWeight(2);
  for (i = 0; i < volhistory1.length; i++) {
    let z = map(volhistory1[i], 0, 1, 400, 0);
    vertex(i, z);
  }
  endShape();

  //getEnergy(treble)
  beginShape();
  //fill(242, 240, 19);
  stroke(255);
  strokeWeight(2);
  for (i = 0; i < volhistory2.length; i++) {
    let a = map(volhistory2[i], 0, 1, 600, 0);
    vertex(i, a);
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
