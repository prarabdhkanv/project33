const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;


var backgroundImage
var snowman
var snow = [];



function preload() {
backgroundImage = loadImage("snow1.jpg")
snowmanImage=loadImage("snowwww.jpg")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snowman=createSprite(400, 200, 50, 50);
snowman .addImage(snowmanImage)
snowman.scale=0.3
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  

  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),0))
    }
      //display the particles
      for(var k= 0;k<snow.length;k++){
        snow[k].display();
      }
  drawSprites();
}
