const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var engine,world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1;
var roofObject;
var bobDiameter;

function setup() {
	var canvas=createCanvas(1600,700);
	engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  roofObject=new Roof(width/2,height/4,width/7,20);

  bobstartPositionX=width/2;
  bobstartPositionY=height/4+300;

  bobDiameter=40;
  bobObject1=new Bob(bobstartPositionX-bobDiameter*2,bobstartPositionY,bobDiameter);
  bobObject2=new Bob(bobstartPositionX-bobDiameter,bobstartPositionY,bobDiameter);
  bobObject3=new Bob(bobstartPositionX,bobstartPositionY,bobDiameter);
  bobObject4=new Bob(bobstartPositionX+bobDiameter,bobstartPositionY,bobDiameter);
  bobObject5=new Bob(bobstartPositionX+bobDiameter*2,bobstartPositionY,bobDiameter);

  rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
  rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
  rope3=new Rope(bobObject3.body,roofObject.body,0, 0);
  rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
  rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);

  var render = Render.create({ 
    element: document.body,
    engine: engine, 
    options: { width: 1200, height: 700, wireframes: false }
    })
  
  Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(230);

  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  Engine.update(engine);
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:85,y:-105});
  }
}


    