const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

;
var mango1
var tree;
var ground
var boy
var stone
var chain
function preload()
{
boy = loadImage("Images/boy.png")
}

function setup() {
    createCanvas(1000, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
mango1 = new Mango(800,100)
mango2 = new Mango(750,300)
mango3 = new Mango(700,250)
mango4 = new Mango(900,250)
mango5 = new Mango(800,200)
tree = new Tree(790,360,300,600)
ground = new Ground(500,650,1000,20)
stone = new Stone(235,420,30)
chain = new Chain(stone.body,{x:225,y:460})
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 image(boy,200,390,200,340)
  tree.display()
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stone.display()
chain.display()
ground.display()

 detectcollison(stone,mango1)
 detectcollison(stone,mango2)
 detectcollison(stone,mango3)
 detectcollison(stone,mango4)
 detectcollison(stone,mango5)

}


function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  
  }
  
  
  function mouseReleased(){
  chain.fly()
  
  }

function keyPressed(){

  if (keyCody === 32) {
    Matter.Body.setPosition(stone.body,{x:235,y:420})
  }

}


function detectcolision(stone,mango){
  
  mangoPosition.body.position
stonePosition.body.position

var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)

if (distance<=mangoS.r+stone.r) {
  

  Matter.body.setStatic(mango.body,false)
}

}