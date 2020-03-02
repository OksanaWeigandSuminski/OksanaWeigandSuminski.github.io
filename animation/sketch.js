let eyeSpacing= 35;
let eyeMotion= 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  rectMode(CENTER);
  background(180,120,130,100);

eyeMotion=constrain(map(mouseX,0,width,-5,5),-5,5);
 //; console.log("x:" + mouseX + ", y:" + mouseY);
  
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
  //front hair
  bezier(100, 200, 50, 200, 100, 50, 190, 50, 100, 60, 70, 200);
  stroke(0,0,0);
  
  //nose
  fill(255,224,189);
  circle(190, 185, 7);
  circle(210, 185, 7);

  //eye left
  push();
  fill(255,255,255); //white
  //ellipse(166,143,50,50);
 // ellipse(230,143,50,50);
  translate(0,143);
  push();
  translate(width/2-eyeSpacing,0);
  ellipse(0,0,50,50);
  push();
  translate(eyeMotion,0);
  //pupils
  fill(34,100,60); //green
  //strokeWeight(2);
  //ellipse(166,143,30,30);
  //ellipse(230,143,30,30);
  ellipse(0,0,30,30);
  push();
  // iris
  fill(0,0,0); //black
  //ellipse(162,143,12,12);
  //ellipse(227,143,12,12);
  ellipse(0,0,12,12);
  pop();
  pop();
  pop();
  //eye right
  push();
  translate(width/2+eyeSpacing, 0);
  ellipse(0, 0, 50, 50);
  push();
  translate(eyeMotion,0);
  fill(34,100,60);//green
  ellipse(0,0,30,30);
  push();
  fill(0,0,0); //black
  ellipse(0,0,12,12);
  pop();
  pop();
  pop();
  pop();
  //mouth
  noStroke();
  fill(244,194,194);
  arc(200,200,50,50,0,160);
  
  // eyebrows
  push();
  translate(width/2,100);
  strokeWeight(5);
  stroke(0,0,0);
  line(15, 10, 40, map(mouseY,0,height,0,8));
  line(-15,10,-40, map(mouseY,0,height,0,8));
  // line(215,110,242,100);
  // line(215,110,242,100);
  strokeWeight(1);
  stroke(0,0,0);
  pop();
  
  //   // eyebrows
  // strokeWeight(5);
  // stroke(0,0,0);
  // line(155,110,175,110);
  // line(215,110,242,100);
  // strokeWeight(1);
  // stroke(0,0,0);
  
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
   push();
   translate(70,260);
  //rotate(frameCount * PI/200);
  
  triangle(0, 0, -50, 40, 10, 80);
  circle(10, 81, 20);
  triangle(10, 81, 10, 140, 130, 140); 
  pop();
  // arm - right
  triangle(332, 266, 380, 300, 240, 340);
}
