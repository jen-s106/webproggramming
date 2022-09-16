function setup() {
  createCanvas(1250,300);
}

function draw(){
  background(71, 80, 165);
  textAlign(CENTER);
  fill(255,0,255);
  textSize(60);
  text("*Digital Artists Needed*", mouseX, mouseY, 400, 200);
  if (mouseIsPressed) {
   stroke(0,255,255);
   strokeWeight(20);
 }
 else {
   noStroke();
 }
}
