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
  song = loadSound("texting perlin.wav");
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
  rows = height / scl + 18; //2 to add up few rows
  cols = width / scl + 2; //2 to add up few cols
  //background(0);
}

function draw() {
  background(0);

  let lev = amp.getLevel() / 1.1;
  let yoff = 0;
  //outer loop for horizontal
  for (let x = 0; x < rows; x++) {
    let xoff = 0;
    // inner loop for vertical
    for (let y = 0; y < cols; y++) {
      let r = noise(xoff, yoff, zoff) * TWO_PI * (lev + 2); //noise function, (xoff,yoff) = position, zoff = time
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
      let eve = constrain(r * lev * 25, 0, scl); //constraining eve which is equal to r(noise function plus music function) to 0 to scl(the size of one block)
      noFill();
      //noStroke();
      //stroke(255);
      stroke(red);
      //line(0, 0, eve / 1.5, 0); //stroke = white   //2.1 stroke = red, green, blue
      //2.2 rect(0, 0, scl / 1.3, scl / 1.3); //background in draw   2.3 //background in setup
      //3.1 rect(0, 0, eve / 1.5, eve / 1.5);
      //3.3 stroke(green, red, blue);  //3.2 has shades of grey
      // circle(0, 0, eve, 20);
      // stroke(green);
      // line(0, 0, eve, 0);

      if (eve > 37) {
        //drawing circle if the eve> 35
        fill(red, green, blue, 30);
        stroke(green, blue, red);
        circle(0, 0, eve);
        stroke(green, blue, red);
        line(0, 0, eve / 2, 0);
      } else {
        //drawing rect if the eve<35
        fill(green, red, blue, 20);
        stroke(blue, red, green);
        rect(0, 0, scl, scl);
      }

      // 5. if (eve > 35) {
      //   stroke(green);
      //   circle(0, 0, eve);
      // } else if (eve > 30 && eve < 35) {
      //   stroke(blue);
      //   rect(0, 0, scl, scl);
      // } else {
      //   stroke(red);
      //   line(0, 0, eve, 0);
      // }
      pop();

      red += random(-2, 2) * (lev / 2); //changing color according to random function plus music function
      green += random(-2, 2) * (lev / 2); //changing colors according to random function plus music function
      blue += random(-2, 2) * (lev / 2); //changing colors according to random function plus music function
    }
    yoff += inc;
    zoff += 0.001;
  }
}
