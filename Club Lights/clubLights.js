let backS = 0;

//Uploading the song here
function preload()
{
  song = loadSound("weak sick/9 - weak sick - outro-1.wav");
}

//any key press will play the song
function keyPressed()
{
  song.play();
}

//Will automatically resize the canvas as per the window
function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}


function setup()
{
  //creating canvas of the size of the internet window
  createCanvas(windowWidth, windowHeight);
  //fft - used to isolate audio frequencies
  //the two parameters are smoothing and amount of bins
  fft = new p5.FFT(0.4, 1024);
  fft1 = new p5.FFT(0.8, 1024);
}

function draw()
{
  background(255); //bg color
  let spectrum = fft.analyze(); //storing it as an array
  let spectrum1 = fft1.analyze(); //storing it as an array

  stroke(0); //stroke color

  //for loop for height.
  for (j = 0; j < spectrum1.length; j += 1)
  {
    //maps the spectrum array values from 0-1 to height-0
    let amp1 = map(spectrum1[j], 0, 1, height, 0);
    line(j, height, j, amp1);
    trigerBass(amp1);
    trigerMid(amp1);
  }
  stroke("#7FFF00");

  //for loop for width.  
  for (i = 0; i < spectrum.length; i += 1)
  {
    //maps the spectrum array values from 0-1 to width-0
    let amp = map(spectrum[i], 0, 1, width, 0);
    line(width, i, amp, i);
    trigerBass(amp);
    trigerMid(amp);
  }
}

//function which will be triggered if freq in mid range are above 150
function trigerMid(x)
{
  if (fft.getEnergy("mid") > 150)
  {
    push();
    fill(0);
    stroke("#FF005C");
    //fill("#24A19C");
    circle(width / 2, height / 2, x / 250);
    //backS = 0;
    pop();
  } else
  {
    push();

    fill(0);
    //fill("#D9534F");
    rect(width / 2, height / 2, x / 500, x / 500);
    //backS = 255;
    pop();
  }
}

//function which will be triggered if freq in bass range aare above 100
function trigerBass(x)
{
  if (fft.getEnergy("bass") > 100)
  {
    push();
    stroke(0);
    fill("#8946A6");
    rect(width / 2, height / 2, x / 250, x / 250);
    pop();
    backS = 0;
  } else
  {
    push();
    fill("#FFC900");
    circle(width / 2, height / 2, x / 250);
    pop();
    backS = 255;
  }
}
