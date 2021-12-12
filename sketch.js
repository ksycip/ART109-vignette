let array = [];
let strokeWidth = 5;
let noiseOffset = 0.0;
let colorPicker;
let song;

// colorPicker
function setup() {
  createCanvas(windowWidth, windowHeight);
    colorPicker = createColorPicker('#ff0000');
    colorPicker.position(1370, 10);
  song = loadSound('assets/pop.wav');

}

// drawing tool
function draw() {
  strokeWeight(5);
  stroke(colorPicker.color());
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


// space bar for clear
function keyPressed() {
  if (key == ' '){
  clear();
  }
}

function mousePressed(){
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
