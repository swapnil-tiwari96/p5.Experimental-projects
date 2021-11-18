//Swapnil Tiwari
//amplitude of music is shown in continous graph.
let volhistory = []; //array to store vol values
function preload() {
  song = loadSound("Ry Legit - Buzz Lightyear (HD).mp3");
}
function keyPressed() {
  song.play();
}

function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
}

function draw() {
  background(220);
  volhistory.push(amp.getLevel()); //pushing getlevels values in the volhistory array
  noFill();
  stroke(0);
  //plots the whole array on the canvas
  beginShape();
  for (i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, height / 2, 0);
    vertex(i, y);
  }
  endShape();
  //to make it look continous by deleting first element of the array as soon as it reaches the endpoint
  if (volhistory.length > width - 20) {
    volhistory.splice(0, 1);
  }
}
