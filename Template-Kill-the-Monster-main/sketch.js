const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

backgroundimg, monsterimg1, monsterimg2, superimg1, superimg2, ground, hero;

function preload() {
//preload the images here
 backgroundimg = loadImage("GamingBackground.png");
 monsterimg1 = loadImage("Monster-01.png");
 monsterimg2 = loadImage("Monster-02.png");
 superimg1 = loadImage("Superhero-01.png")
 superimg2 = loadImage("Superhero-02.png")
}

function setup() {
  createCanvas(3000, 1500);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0);
ground = new Ground(1500, 1400, 4000, 10)
hero = new Hero(2500, 300, 50)
fly = new Fly(hero.body, {x = 2500, y = 300});
}

