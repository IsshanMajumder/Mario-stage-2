var bg;
var score = 0;
var marioimage, mariosprite;
var invisibleground;
var coinimage, coin;
var ob1, ob2, ob3, obstaclesprite;

function preload() {
  bg = loadImage("backg.jpg");
  marioimage = loadAnimation("Capture1.png", "Capture3.png", "Capture4.png");
  coinimage = loadImage("coin.png");
  ob1 = loadImage("obstacle1.png");
  ob2 = loadImage("obstacle2.png");
  ob3 = loadImage("obstacle3.png");
}

function setup() {
  createCanvas(600, 200);
  mariosprite = createSprite(50, 130);
  mariosprite.addAnimation("running", marioimage);
  mariosprite.scale = 0.5;
  score = 0;
  invisibleground = createSprite(300, 170, 600, 10);
  invisibleground.visible = false;
}

function draw() {
  background(bg);
  textSize(20);
  fill(255);
  text("Score: " + score, 500, 40);
  if (keyDown("space") && mariosprite.y > 100) {
    mariosprite.velocityY = -12;
  }
  mariosprite.velocityY = mariosprite.velocityY + 1;
  mariosprite.collide(invisibleground);
  populateCoins();
  populateObstacles();
  drawSprites();
}

function populateCoins() {
  if (frameCount % 60 == 0) {
    coin = createSprite(600, 50, 30, 30);
    coin.addImage(coinimage);
    coin.velocityX = -5;
    coin.scale = 0.1;
  }
}

function populateObstacles() {
  if (frameCount % 60 == 0) {
    obstaclesprite = createSprite(600, 150, 50, 50);
    obstaclesprite.velocityX = -5;
    obstaclesprite.scale = 0.2;
    var r = Math.round(random(1, 3));
    switch (r) {
      case 1:
        obstaclesprite.addImage(ob1);
        break;
      case 2:
        obstaclesprite.addImage(ob2);
        break;
      case 3:
        obstaclesprite.addImage(ob3);
        break;
    }
  }
}
