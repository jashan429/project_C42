var bg,scimg1,scimg2,scimg3,scimg4,issImg;
var spacecraft, iss;
var hasDocked = false;

function preLoad(){
bg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
scimg1 = loadImage("spacecraft1.png");
scimg2 = loadImage("spacecraft2.png");
scimg3 = loadImage("spacecraft3.png");
scimg4 = loadImage("spacecraft4png");
};




function setup() {
  
  createCanvas(800,400);
  spacecraft = createSprite(285,240);
  // spacecraft.addImage("scImg",scimg1);
  // spacecraft.scale = 0.15;

  iss = createSprite(330,130);
  // iss.addImage("issImg",issImg);
  // iss.scale = 0.25;
}

function draw() {
background(255,255,255);
  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y+2
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x-2
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x+2
    }
  }
  // background(bg);  
  drawSprites();
}