// Love gives great rewards 



var ground, RadhaImg;
var Radha, groundImg;
var score = 0;



function preload(){
RadhaImg = loadImage("RadhaNB.png");
groundImg = loadImage("Track.png");

}

function setup(){
  createCanvas(900,400,600, 100);

  // ground
  ground = createSprite(300,340,1200,40);
  ground.velocityX = -4;
  ground.addImage("ground",groundImg )
  ground.scale =15;
  
  // the runner - Radha
  Radha = createSprite(200,230,20,70)
  Radha.addImage("Radha", RadhaImg)
  Radha.scale = 0.5;
  //Radha.velocityX = 2;
  //Radha.veolictyY = 0;
  //Radha.collide(ground);

  if (keyDown("space")) {
  
   console.log("space is pressed")
  }

//camera.position.x = Radha.x;
//camera.position.y = Radha.y;

}

function draw(){
  background(0,255,0)

  //infinite ground
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }  
  ground.display();
  Radha.display();
}