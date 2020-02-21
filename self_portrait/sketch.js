function setup() {
  createCanvas(400, 400);
}

function draw() {
  rectMode(CENTER);
  background(180,120,130,100);
  
  //back hair
  noStroke();
  fill(131,105,83); //brown
  ellipse(200,160,185,221);
  
  //neck
  fill(255,224,189);
  rect(200,239,35,75);
  stroke(0,0,0);
  
  //face
  fill(255,224,189);
  ellipse(200,150,150,175);
  fill(131,105,83);
  noStroke();
  bezier(100, 200, 50, 200, 100, 50, 190, 50, 100, 60, 70, 200);
  stroke(0,0,0);
  
  //nose
  fill(255,224,189);
  circle(190, 185, 7);
  circle(210, 185, 7);
  
  //eyes
  fill(255,255,255); //white
  ellipse(166,143,50,50);
  ellipse(230,143,50,50);
  
  //iris
  fill(34,100,60); //green
  strokeWeight(2);
  ellipse(166,143,30,30);
  ellipse(230,143,30,30);
  
  // pupils
  fill(0,0,0); //black
  ellipse(162,143,12,12);
  ellipse(227,143,12,12);
  
  //mouth
  noStroke();
  fill(244,194,194);
  arc(200,200,50,50,0,160);
  
  // eyebrows
  strokeWeight(5);
  stroke(0,0,0);
  line(155,110,175,110);
  line(215,110,242,100);
  strokeWeight(1);
  stroke(0,0,0);
  
  //arm/ w skin - right
  noStroke();
  fill(255,224,189);
  rect(325,380,17,150);
  circle(325,370, 20);

  // body
  noStroke();
  fill(238,32,77);
  quad(70, 260, width/1.2, height/1.5, 250, 400, 200,400);
  
  // arm - left
  triangle(70, 260, 20, 300, 80, 340);
  circle(80, 341, 20);
  triangle(80, 341, 80, 400, 200, 400); 
  
  // arm - right
  triangle(332, 266, 380, 300, 240, 340);
}
