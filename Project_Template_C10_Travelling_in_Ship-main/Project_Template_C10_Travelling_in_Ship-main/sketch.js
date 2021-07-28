var sea
var ship
function preload() {
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")

}
function setup() {
  createCanvas(600, 400);
  sea = createSprite(400,200);
  sea.addImage(seaImg)
  // sea.velocityX = -5
  sea.scale = 0.3
  ship = createSprite(170, 150);
  ship.addAnimation("moving_ship",shipImg)
  ship.scale = 0.27
}



function draw() {
  background(0)
  sea.velocityX = -3
  drawSprites()
  text(mouseX + "," + mouseY, mouseX, mouseY)
  if (sea.x < 0) {
     sea.x = sea.width / 8
    // sea.x = 0
  }
}