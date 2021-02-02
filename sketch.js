
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	ground = new Ground(300,695,1000,10);
	hammer = new Hammer(200,200,100,30);
	stone = new Stone(200,200,100,100);
	rubber = new Rubber(100,690,50);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
}



