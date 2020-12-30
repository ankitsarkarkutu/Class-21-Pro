var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1000,400);
  
  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(50,200,37,10);
  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  //walli = createSprite(890,200,30,height/3);
  bullet.velocityX = 0;
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
 
  thickness = random(22,83);
 
}

function draw() {
  background(0); 
    
  if (hascollided(bullet,wall)){
    
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness ;
  
    if (damage>10){
      wall.shapeColor = color(255,0,0)
    }
    if (damage<10){
      wall.shapeColor = color(0,255,0)
    }
    
  }
  
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}







