function draw(){
    background(250)

    push();
    noStroke();
    fill(255,0,0)
    rect(mouseX,mouseY, 25,25);
    pop();

    for (let i=0; i < thePixel.length; i++){
        //fill each instance of the rainbow
        fill(thePixel[i])
        theRect.push(rect(i * 300 + 100, 100, 150,150))

    }
    for(let i =0; i < 50; i++){
        fill(0,255,0)
        ellipse(i * 10,i * 50,50,50);
    }

    ellipse(windowWidth - 100, 100, 50, 50);
    text("my great string", 100, 100)

}

function mousePressed(){
    console.log("click")

}
