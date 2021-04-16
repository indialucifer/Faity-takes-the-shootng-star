var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	music = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy = createSprite(60,550);
	fairy.addAnimation("angel",fairyImg);
	fairy.scale = 0.1;

	music.play();
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if (star.y > 520){
	Matter.Body.setStatic(starBody,true); 
  }

  drawSprites();
  keyPressed()

}

function keyPressed() {

	if (keyDown (DOWN_ARROW)) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyDown(LEFT_ARROW)){
		fairy.x = fairy.x -10;
	}
	
	if (keyDown(RIGHT_ARROW)){
		fairy.x = fairy.x +10;
	}
}
