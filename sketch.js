const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject;
var world;
var dustbinImg;

function preload(){
  dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper = new Paper();

  dustbinSprite = createSprite(1200, 500);
  dustbinSprite.addImage(dustbinImg);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("#f0f0f0");

  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();
  dustbinSprite.display();

}