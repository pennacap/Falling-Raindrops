const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rDrop;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  rDrop = new BaseClass(random()*800, random()*800, random() * 200, random() * 255, random() * 255, random() * 255);
  rDrop.display();
  drawSprites();
}