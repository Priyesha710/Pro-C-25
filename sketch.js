
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var userWorld,userEngine;
var paper, paperImg;

function preload() {
	paperImg = loadImage("paper.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	userEngine = Engine.create();
	userWorld = userEngine.world;

	groundObject = new Ground(width / 2, 690, width, 20);

	dustbinObj = new Dustbin(1200, 650, 2.92 * PI);
	var options = {
		restitution: 0.5,
		density : 1,
		friction: 0.5
	}
	paper = Bodies.rectangle(100, 100, 80, 80, options);
	World.add(userWorld, paper);
	Engine.run(userEngine);

}


function draw() {
	rectMode(CENTER);
	background(230);

	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper, paper.position, { x: 30, y: -20 });
	}

	
	imageMode(CENTER);
	image(paperImg, paper.position.x, paper.position.y, 80, 80);
	groundObject.display();
	dustbinObj.display();

}

