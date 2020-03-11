var meme1, meme2, meme3, meme4, meme5, meme6, meme7,meme8;
var memes = [];
var meme;
var bg1, bg2, bg3, bg4, bg5;
var bgs = [];
var bg;
var quotes = [];
var sound;
var numClicks = 0;
var quoteSel = 0;
var imgSel = 0;


function preload() {
  meme1 = loadImage("learned1.jpg");
  meme2 = loadImage("taught_me.jpg");
  meme3 = loadImage("started_programming.png");
  meme4 = loadImage("liked1.png");
  meme5 = loadImage("code_doesnt_work.jpg");
  meme6 = loadImage("no_errors1.jpg");
  meme7 = loadImage("still_doesnt_work.jpg");
  meme8 = loadImage("js_is_fun1.png");
  bg1 = loadImage("blue.jpg");
  bg2 = loadImage("green.jpg");
  bg3 = loadImage("peach.jpg");
  bg4 = loadImage("red.jpg");
  bg5 = loadImage("purple.jpg");
  sound = loadSound("Kids_Yay.mp3")
}
function setup() {
  createCanvas(400, 400);
  memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8];
  bgs = [bg1, bg2, bg3, bg4, bg5];
  
  for (let i = 0; i < 8; i++){
    quotes[i] = [];
  }
  
  quotes[0][0] = "I learned about Arrays today";
  quotes[0][1] = "";
  quotes[1][0] = "Jesse taught me how to use p5";
  quotes[1][1] = "";
  quotes[2][0] = "I started programming with p5";
  quotes[2][1] = "";
  quotes[3][0] = "Nick said he liked my project";
  quotes[3][1] = "";
  quotes[4][0] = "My code doesn't work"
  quotes[4][1] = "But there are no errors"
  quotes[5][0] = "My code still doesn't work";
  quotes[5][1] = "I have no idea why";
  quotes[6][0] = "My code finally works";
  quotes[6][1] = "I have no idea why";
  quotes[7][0] = "JS is FUN";
  quotes[7][1] = "";
  
  meme = memes[0];
  bg = bgs[0];
  quote = quotes[0];
  
  textSize(30);
  fill(255,255,0);
  stroke(255,0,0);
  strokeWeight(3);
}

function draw() {
  background(220);
  image(bg,0,0,width,height);
  image(memes[imgSel],0,0,width,height);
  text(quotes[quoteSel][0],30,20, width-40);
  text(quotes[quoteSel][1],30,350, width-40);
}

function mousePressed() {
  bg = random(bgs);
  if (mouseX > width / 2){
  numClicks++;
  }
  if (mouseX < width / 2 && numClicks > 0){
  numClicks--;
  }
  console.log(numClicks % 8);
  quoteSel = numClicks % 8;
  imgSel = numClicks % 8;
  if (!sound.isPlaying() && imgSel == 7){
    sound.play();
  }
  
}