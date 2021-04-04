const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var ball1,ball2,ball3,ball4;
var slingshot1,slingshot2,slingshot3,slingshot4;


function setup(){
    var canvas = createCanvas(1200,500);
    
    engine = Engine.create();
    world = engine.world;
    

ball1=new Ball(500,100,10);
ball2=new Ball(550,100,10);
ball3=new Ball(600,100,10);
ball4=new Ball(650,100,10);
slingshot1=new SlingShot(ball1.body,{x:500,y:100});
slingshot2=new SlingShot(ball2.body,{x:550,y:100});
slingshot3=new SlingShot(ball3.body,{x:600,y:100});
slingshot4=new SlingShot(ball4.body,{x:650,y:100});
}

function draw(){
  
    background("red")
    Engine.update(engine);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    slingshot4.display();
}
function mouseDragged(){
     Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}