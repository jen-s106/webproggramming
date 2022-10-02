function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);//black
  fill(255,0,255);//purple
  textAlign(CENTER);
  textSize(30);
  text("The Meaning is the Message", width/2, height/2);//the text in the middle
//text family
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(12 + (mouseX / width)*72);
  text("family", 100, 300);
//text gov
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  textSize(12 + (mouseX / width)*72);
  text("government", 150, 90)
//text neighborhood
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  textSize(12 + (mouseX / width)*72);
  text("neighborhood", 600, 300)
//text education
strokeWeight(2);
fill(128 + sin(frameCount*0.1) * 128);
textSize(12 + (mouseX / width)*72);
text("edu", 650, 90)
  }
//https://creative-coding.decontextualize.com/text-and-type/
