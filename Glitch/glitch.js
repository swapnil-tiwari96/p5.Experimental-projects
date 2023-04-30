let glitch;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  glitch = new Glitch();

}

function draw()
{
  // load image
  glitch.loadType('jpg'); // specify jpeg file glitching, default
  glitch.loadQuality(random(0,1)); // optionally crunch to low quality
  glitch.loadImage('../images/Samurai.png'); // load image by path

  // drawing code
  glitch.randomBytes(random(0.1, 0.8)); // sets random parameter amount of bytes from 0 to 255. keep this between 0 to 100
  glitch.replaceBytes(10,10); // sets all bytes from 1st parameter to the 2nd paramter
  glitch.replaceHex('ffdb00430001', 'ffdb004300ff'); // jpg quant table
  glitch.pixelate(random(0,1)); //should be between 0 and displaydensity

  // build and display image
  glitch.buildImage(); // creates image from glitched data
  image(glitch.image, 0, 0); // display glitched image
}
