var girl;
var bee, beeGroup, butterfly,butterflyGroup;
var backgroundImg;
var invisibleGround;
var edge;
var score;



function preload(){
  backgroundImg=loadImage("Normal Background.jpeg");
  girlImg=loadImage('girl1.png');
  beeImg=loadImage('Bee.jpg');
  ButterflyImg=loadImage('Butterfly.jpeg');
}






function setup() {
  createCanvas(600,400);
  girl=createSprite(350,390,35,35);
  girl.addImage(girlImg);
  girl.scale=0.2;


  invisibleGround=createSprite(300,390,600,16);
  invisibleGround.visible=false;

  edge=createEdgeSprites();

  butterflyGroup= new Group();
  beeGroup= new Group();
  
  
}

function draw() {
  background(backgroundImg);  
  if(keyDown("space")){
    girl.y=girl.y-5;

  }
  girl.y=girl.y+1;

  girl.collide(edge);

  spawnButterfly()
  spawnBee()
  
  drawSprites();


  
  
}

function spawnButterfly(){
  if(frameCount % 120 === 0){
    var butterfly=createSprite(0,200,35,35);
    butterfly.y = Math.round(random(100,350));
    butterfly.addImage(ButterflyImg);
    butterfly.scale=0.05;
    butterfly.velocityX=3;
    butterflyGroup.add(butterfly);
    butterfly.lifetime=500;
    butterfly.depth=girl.depth;
    girl.depth=+1
    }
  }

  function spawnBee(){
  if(frameCount % 120 === 0){
    var bee=createSprite(0,200,35,35);
    bee.y = Math.round(random(100,350));
    bee.addImage(beeImg);
    bee.scale=0.05;
    bee.velocityX=3;
    beeGroup.add(bee);
    bee.lifetime=500;
    bee.depth=girl.depth;
    girl.depth=+1
    }
    
    
  }