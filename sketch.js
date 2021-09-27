var canvas, bg;
var rectangle, rectangle2

var questions;
var gimg, girl, flower;
var fani;

var question, contestant, quiz;

function preload (){
  gimg= loadImage("g.png")
  fani=loadAnimation("f.png")
}

function setup(){
  canvas = createCanvas(850,400);
  rectangle= createSprite (450, 148, 675, 125);
  rectangle.shapeColor=("lightgray");
  rectangle2= createSprite (450, 20, 675, 70)
  rectangle2.shapeColor=("lightgray");
  database = firebase.database();
  quiz = new Quiz();
  bg= color( random(255), random(255), random(255) );
  quiz.start();
  for (var i  = 15; i< 500; i = i+65){
    var flour  = createSprite(50,i,20,20);
    flour.addAnimation("fani", fani);
    flour.scale=0.08
  }
  for (var i  = 15; i< 500; i = i+65){
    var flour  = createSprite(820,i,20,20);
    flour.addAnimation("fani", fani);
    flour.scale=0.08
  }
}


function draw(){
  background(bg);
  drawSprites();
 
}

