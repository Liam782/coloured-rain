function setup() {
  createCanvas(800,800);

}

function draw() {
  background(255,255,255);  

  spawnRaindrop();

  drawSprites();
}

function spawnRaindrop(){
  if(World.frameCount%1 === 0){
    var rand = random(0,800);
    var raindrop = createSprite(rand,0,2,10);
    //var colours = random("green" , "red" , "blue" , "purple")
    raindrop.shapeColor = "green";
    raindrop.velocityY = 6;
    raindrop.display();
  }
}