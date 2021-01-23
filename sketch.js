
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper=new Paper(250,250,20);
	ground=new Ground(400,660,1000,20);
	dustbin=new Ground(740,650,100,20);
	dustbin2=new Ground(700,600,20,100);
	dustbin3=new Ground(780,600,20,100);

}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();
 dustbin2.display();
 dustbin3.display();
 keyPressed();
  drawSprites();
 
}
function keyPressed(){


	if (keyCode === UP_ARROW){

Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}



