//Swapnil Tiwari
//Perlins noise-grid

let inc = 0.1;
let scl = 50;
let cols, rows;
let zoff = 0; // 3rd dimension which is time here
let red = 0; //for color
let green = 0; //for color
let blue = 0; //for color

function preload() {
  song = loadSound("FLP(VDO) AUDIO 35(mau5).wav");
}
function keyPressed() {
  song.play();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  // to create a grid
  rows = height / scl + 18; //18 to add up few rows
  cols = width / scl;
}

function draw() {
  background(0);
  let lev = amp.getLevel();
  let yoff = 0;
  //outer loop for horizontal
  for (let x = 0; x < rows; x++) {
    let xoff = 0;
    // inner loop for vertical
    for (let y = 0; y < cols; y++) {
      let r = noise(xoff, yoff, zoff) * TWO_PI * (lev + 1); //noise function, (xoff,yoff) = position, zoff = time
      let v = p5.Vector.fromAngle(r); //to make vectors according to the angle of the noise function
      xoff += inc;
      //create custom structure for the line-vector, circle and rectangle
      push();
      strokeWeight(3);
      red = constrain(red, 10, 255); //constraining the numbers between 10-255 so that the color change can be seen.
      green = constrain(green, 10, 255); //constraining the numbers between 10-255 so that the color change can be seen.
      blue = constrain(blue, 10, 255); //constraining the numbers between 10-255 so that the color change can be seen.
      translate(x * scl, y * scl); //shift (0,0), position to the (x,y) block
      rotate(v.heading()); //rotating the line vector heading
      let eve = constrain(r * 10, 0, scl); //constraining eve which is equal to r(noise function plus music function) to 0 to scl(the size of one block)
      fill(red, green, blue);
      noStroke();
      if (eve > 35) {
        //drawing circle if the eve> 35
        circle(0, 0, eve);
        stroke(0);
        line(0, 0, eve / 2, 0);
      } else {
        //drawing rect if the eve<35
        stroke(0);
        rect(0, 0, scl, scl);
      }
      pop();
      red += random(-5, 5) * (lev / 2); //changing color according to random function plus music function
      green += random(-5, 5) * (lev / 2); //changing colors according to random function plus music function
      blue += random(-5, 5) * (lev / 2); //changing colors according to random function plus music function
    }
    yoff += inc;
    zoff += 0.001;
  }
}
