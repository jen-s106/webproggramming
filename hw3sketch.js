let img;

function setup() {
  createCanvas(500, 300);
  img = loadImage('media/vangogh.jpg');
}

function draw() {
  image(img, 0, 0);//makes image appear
  let pcolor = img.get(mouseX, mouseY);
  fill(pcolor);
  strokeWeight(2);
  stroke(255);
  square(mouseX, mouseY, 30);
}
