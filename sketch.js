var mouse,mouseCheese,mouseDance,mouseCollide;
var cat,catSit,catWalk,catCollide;
var bg,bgImg;

function preload() { 
  mouseCheese = loadImage("images/mouse1.png");
  mouseDance = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseCollide = loadAnimation("images/mouse4.png",);

  catSit = loadAnimation("images/cat1.png");
  catWalk = loadAnimation("images/cat2.png","images/cat3.png");
  catCollide = loadAnimation("images/cat4.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){

    createCanvas(1400,700);
    bg = createSprite(200,200,20,20);
    bg.addImage("bg",bgImg);

    mouse = createSprite(100,420,20,20);
    mouse.addAnimation("mouse1",mouseCheese);
    mouse.addAnimation("mouse4",mouseCollide);
    mouse.addAnimation("mouse2,mouse3",mouseDance);

    mouse.scale = 0.1;

    cat = createSprite(580,420,20,20);
    cat.addAnimation("cat1",catSit);
    cat.addAnimation("cat4",catCollide);
    cat.addAnimation("cat2,cat3",catWalk);
    cat.scale = 0.16;

}

function draw() {
    background(255);
    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)+20
      ){
        mouse.changeAnimation("mouse4",mouseCollide);
        cat.velocityX = 0;
        cat.changeAnimation("cat4",catCollide);
    }
    //keyPressed();
    drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW) {
    console.log("key down left");
    cat.velocityX = -3;
    cat.changeAnimation("cat2,cat3",catWalk);
    mouse.changeAnimation("mouse2,mouse3",mouseDance);
   } 

  
}
