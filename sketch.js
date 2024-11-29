function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
   stroke("purple");
    fill("#BD6BC2");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }