const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Score = 0;
var bgbg;
var back;

function preload(){
  poly = loadImage("Polygon.png");
  getBackgroundImage();
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,390,800,20);
  stand1 = new Ground(400,300,200,10);
  stand2 = new Ground(650,200,120,10);

  //level 3 for 1 st line
  box1 = new BOX(325,270);
  box2 = new BOX(355,270);
  box3 = new BOX(385,270);
  box4 = new BOX(415,270);
  box5 = new BOX(445,270);
  box6 = new BOX(475,270);

   //level 2 for 1 st line
   box7 = new BOX(355,220);
   box8 = new BOX(385,220);
   box9 = new BOX(415,220);
   box10 = new BOX(445,220);

   //level 1 for 1 st line
   box11 = new BOX(385,170);
   box12 = new BOX(415,170);

   box13 = new BOX(400,120);

  //level 3 for 2nd line
   box14 = new BOX(620,170);
   box15 = new BOX(650,170);
   box16 = new BOX(680,170);

   //level 1 for 2nd line
   box17 = new BOX(650,120);

   Polygon = Bodies.circle(50,200,20);
   World.add(world,Polygon);

   sling = new SlingSHOT(Polygon,{x:150,y:200});

}


function draw() {
  if(back){
    background(back);
  }

  imageMode(CENTER);

  textSize(20)
  text("Score : "+Score,700,40);

  Engine.update(engine);
  ground.display(); 
  stand1.display();
  stand2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();

  box7.display();
  box7.score();
  box8.display();
  box8.score();

  box9.display();
  box9.score();
  box10.display();
  box10.score();

  box11.display();
  box11.score();
  box12.display();
  box12.score();

  box13.display();
  box13.score();

  box14.display();
  box14.score();
  box15.display();
  box15.score(); 
  box16.display();
  box16.score(); 
  
  box17.display();
  box17.score(); 

  image(poly,Polygon.position.x,Polygon.position.y,40,40);

  sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.udda();
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var resJSON = await response.json();
  var dt = resJSON.datetime;
  var hour = dt.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=17){
    bgbg = "download.jfif";
  }
  else{
     bgbg = "night.jfif"   
  }
    back = loadImage(bgbg);  
}

