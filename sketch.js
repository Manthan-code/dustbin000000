const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){

    dustbin0=loadImage("dustbin.png");

}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    dustbin1=createSprite(964,505,10,10);
    dustbin1.addImage(dustbin0);
    dustbin1.scale=0.55;

   
    ground = new Ground();
    crumpledPaper = new Paper();


    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    
    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});

    }
}
