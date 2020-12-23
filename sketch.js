const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine,myWorld,box1,ground;

var box2;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  box2= new Box(210,80,50,50);
  box1=new Box(200,100,50,50);
  ground=new Ground();
  


}





function draw() {
  background("black");  
  Engine.update(myEngine);
  box1.display();
  box2.display();1
  ground.display();
  
}





















