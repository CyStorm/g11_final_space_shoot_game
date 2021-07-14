function setup() {
  createCanvas(1024, 700);
  frameRate(60);
  imageMode(CENTER);
  noStroke();
}

var screen = "menu";
var playerCurrentImg;      // player model, according to selected character
var playerImgL;
var playerImgR;
var playerImgU;
var playerImgD;

function preload() {      // function to load images to variables
 
  tankImgD = loadImage("images/tankImgD.png");
  tankImgL = loadImage("images/tankImgL.png");
  tankImgU = loadImage("images/tankImgU.png");
  tankImgR = loadImage("images/tankImgR.png");
  
  shipImgD = loadImage("images/shipImgD.png");
  shipImgU = loadImage("images/shipImgU.png");
  shipImgR = loadImage("images/shipImgR.png");
  shipImgL = loadImage("images/shipImgL.png");
  
  subImgD = loadImage("images/subImgD.png");
  subImgU = loadImage("images/subImgU.png");
  subImgR = loadImage("images/subImgR.png");
  subImgL = loadImage("images/subImgL.png");
 
  alienRs = loadImage("images/alienRs.png");
  alienRm = loadImage("images/alienRm.png");
  alienRl = loadImage("images/alienRl.png");
  alienGs = loadImage("images/alienGs.png");
  alienGm = loadImage("images/alienGm.png");
  alienGl = loadImage("images/alienGl.png");
  alienBs = loadImage("images/alienBs.png");
  alienBm = loadImage("images/alienBm.png");
  alienBl = loadImage("images/alienBl.png");
  
  laserBh = loadImage("images/laserBh.png");
  laserRh = loadImage("images/laserRh.png");
  laserGh = loadImage("images/laserGh.png");
  laserBv = loadImage("images/laserBv.png");
  laserRv = loadImage("images/laserRv.png");
  laserGv = loadImage("images/laserGv.png");
  laserWh = loadImage("images/laserWh.png");
  laserWv = loadImage("images/laserWv.png");
  
  spaceBackground = loadImage("images/spaceBackground.png");
  starBackground = loadImage("images/starBackground.jpg");
  pressPlay = loadImage("images/pressPlay.png");
  pressInstruct = loadImage("images/pressInstruct.png");
  
  title = loadImage("images/title.png");
  planet = loadImage("images/planet.png");
  charSelect = loadImage("images/charSelect.png");
  charOne = loadImage("images/charOne.png");
  charTwo = loadImage("images/charTwo.png");
  charThree = loadImage("images/charThree.png");
  pause = loadImage("images/pause.png");
  
  instructBasics = loadImage("images/instructBasics.png");
  instructBasicsB = loadImage("images/instructBasicsB.png");
  redInstruct = loadImage("images/redInstruct.png");
  blueInstruct = loadImage("images/blueInstruct.png");
  greenInstruct = loadImage("images/greenInstruct.png");
  pressArrow = loadImage("images/pressArrow.png");
  pressArrowL = loadImage("images/pressArrowL.png");
  pressEsc = loadImage("images/pressEsc.png");
  hudBoard = loadImage("images/hudBoard.png");
  heart = loadImage("images/heart.png");
  
  iconLifeUp = loadImage( "images/iconLifeUp.png");
  iconRapidFire = loadImage( "images/iconRapidFire.png");
  iconJuanTap = loadImage( "images/iconJuanTap.png");
  iconSlowEnemy = loadImage( "images/iconSlowEnemy.png");
  iconClearBoard = loadImage( "images/iconClearBoard.png");
  iconFreeFire = loadImage( "images/iconFreeFire.png");
  iconAllDirect = loadImage( "images/iconAllDirect.png");
  
  tankAttributes = loadImage("images/tankAttributes.png");
  shipAttributes = loadImage("images/shipAttributes.png");
  subAttributes = loadImage("images/subAttributes.png");
  
  youAreLose = loadImage("images/youAreLose.png");
  returnToChar = loadImage("images/returnToChar.png");
  howToShoot = loadImage("images/howToShoot.png");
}

var charTank = {       // stats for character 1
  ability: "barrier",
  abilityTimer : 300,
  abilityCd : 1500,
  xPos : 512,
  yPos : 300,
  direction : "down",
  speed: 2.6,
  health : 3,
  score : 0,
  size : 50,
  atkSpeed : 17,
  atkDamage : 1,
  atkTimer : 0,
};

var charShip = {       // character 2
  ability: "overcharge",
  abilityTimer : 300,
  abilityCd : 1500,
  xPos : 512,
  yPos : 300,
  direction : "down",
  speed: 3.4,
  health : 1,
  score : 0,
  size : 50,
  atkSpeed : 11,
  atkDamage : 0.5,
  atkTimer : 0,
};

var charSub = {       // character 3
  ability: "freeze",
  abilityTimer : 300,
  abilityCd : 1500,
  xPos : 512,
  yPos : 300,
  direction : "down",
  speed: 3,
  health : 2,
  score : 0,
  size : 50,
  atkSpeed : 15,
  atkDamage : 1,
  atkTimer : 0,
};

var player = {      // current player attributes
  ability : "null",
  abilityTimer : 300,
  abilityCd : 1500,
  xPos : 512,
  yPos : 300,
  direction : "down",
  speed: 2.5,
  health : 1,
  score : 0,
  size : 50,
  atkSpeed : 16,
  atkDamage : 1,
  atkTimer : 0,
};

function mainMenu() {       // neeed main menu screen
  background(0, 0, 0);
  image(starBackground, 512, 400, 1024, 800);
  image(planet, width / 2, 250, 350, 350);
  fill(100, 100, 0);
  textAlign(CENTER);
  textSize(35);
  image(title, width / 2, 600 / 2, 1200, 1200);
  image(pressPlay, width / 2, 350, 400, 300);
  image(pressInstruct, width / 2, 450, 400, 300);
}

function instructOne() {     //instruction screen
  background(0, 0, 0);
  image(starBackground, 512, 400, 1024, 800);
  fill(100, 100, 0);
  textAlign(CENTER);
  textSize(30);
  image(instructBasics, 300, 300, 600, 600);
  image(instructBasicsB, 185, 540, 600, 600);
  image(pressEsc, 180, 100, 600);
  image(pressArrow, 850, 750, 500);
  image(blueInstruct, 800, 200, 600, 600);
  image(redInstruct, 880, 550, 600, 600);
  image(greenInstruct, 830, 600, 600, 600);
  
  image(alienRl, 680, 425, 50, 50);
  image(alienRm, 770, 425, 50, 50);
  image(alienRs, 860, 425, 50, 50);
  image(alienBl, 680, 225, 50, 50);
  image(alienBm, 770, 225, 50, 50);
  image(alienBs, 860, 225, 50, 50);
  image(alienGl, 680, 600, 50, 50);
  image(alienGm, 770, 600, 50, 50);
  image(alienGs, 860, 600, 50, 50);
}

function instructTwo() {      // instruction page 2
  background(0)
  image(starBackground, 512, 400, 1024, 800);
  image(iconLifeUp, 100, 100, 50, 50);
  image(iconAllDirect, 100, 180, 50, 50);
  image(iconFreeFire, 100, 260, 50, 50);
  image(iconRapidFire, 100, 340, 50, 50);
  image(iconSlowEnemy, 100, 420, 50, 50);
  image(iconJuanTap, 100, 500, 50, 50);
  image(iconClearBoard, 100, 580, 50, 50);
  image(pressEsc, 180, 100, 600);
  image(howToShoot, 800, 430, 400, 100);
  image(pressPlay, 800, 670, 400, 300);
  image(pressArrowL, 890, 750, 600);
  
  fill(255, 0, 255);
  textSize(20);
  text("To Shoot", 790, 500);
  text("your character gains 1 more life",width / 3, 100);
  text("your character will now shoot in all 4 directions (up, down, left, right)", 457, 180);
  text("no matter what bullet you shoot, it will damage any type of enemy", 450, 260);
  text("there is no reload between shots, click shoot rapidly to fire rounds quickly", 475, 340);
  text("Slows enemy moderately permanently", 360, 420);
  text("Your bullets eliminate enemies in one shot", 380, 500);
  text("Does moderate damage to all enemies", 370, 580);
}

function selection() {      // character selection screen with mouseClick functions
  background(0);
  image(starBackground, 512, 400, 1024, 800);
  textSize(50);
  image(charSelect, width /2, 150);
  image(tankImgD, 200, 200, 100, 100);
  image(tankAttributes, 200, 420, 600, 600);
  image(charOne, 200, 630, 50, 50);
  image(shipImgD, 500, 200, 100, 100);
  image(shipAttributes, 530, 420, 600 ,600);
  image(charTwo, 500, 630, 50, 50);
  image(subImgD, 850, 200, 100, 100);
  image(subAttributes, 850, 420, 600, 600);
  image(charThree, 850, 630, 50, 50);
}

function pauseScreen() {      // pause screen
  background(0);
  image(spaceBackground, 512, 400, 1024, 800);
  textSize(40);
  fill(255, 255, 255);
  image(pause, width / 2, 600 / 2);
  textSize(20);
  image(pressEsc, 180, 100, 600);
}

function endSreen() {         // end game screen
  background(0);
  image(spaceBackground, 512, 400, 1024, 800);
  image(pressEsc, 180, 100, 600);
  textSize(50);
  fill(255, 255, 0);
  image(youAreLose, 700, 600 / 2 - 80);
  fill(255, 80, 80);
  text("Score:" + player.score, width / 2, 600 / 2 + 70);
  fill(0, 255, 129);
  image(returnToChar, width / 2, 600 / 2 + 350);
}

var isPower = false;              // variables for powerups
var powerSpawnTimer = 3600; 
var powerSize = 34;
var powerX;
var powerY;
var powerType = "null";
var powerDuration = 0;

var rapidFire = false;        // keep track which is active
var juanTap = false;
var freeFire = false;
var allDirect = false;

var invun = false;
var freeze = false;

function playerAbility() {        // player special ability
  if (player.ability === "barrier") {
    invun = true;
  } else if (player.ability === "overcharge") {
    player.atkDamage = 1;
  } else if (player.ability === "freeze") {
    freeze = true;
  }
  player.abilityTimer = 300;
  player.abilityCd = 1500;
}

function playerAbilityReset() {       // reset player special ability
  if (player.ability === "barrier") {
    invun = false;
  } else if (player.ability === "overcharge") {
    player.atkDamage = 0.5;
  } else if (player.ability === "freeze") {
    freeze = false;
  }
}

function powerReset() {     // function to reset all power ups
    rapidFire = false;
    juanTap = false;
    freeFire = false;
    allDirect = false;
}

function playerMove() {     // movement WASD for player
  if (playerCurrentImg == null) {
    playerCurrentImg = playerImgD;
  }
  if (keyIsDown(87)) {        //w
    playerCurrentImg = playerImgU;
    player.direction = "up";
    player.yPos -= player.speed;
  }
  if (keyIsDown(83)) {        //s
    playerCurrentImg = playerImgD;  
    player.direction = "down";
    player.yPos += player.speed;
  }
  if (keyIsDown(65)) {        //a
    playerCurrentImg = playerImgL;
    player.direction = "left";
    player.xPos -= player.speed;
  }
  if (keyIsDown(68)) {        //d
    playerCurrentImg = playerImgR;
    player.direction = "right";
    player.xPos += player.speed;
  }
  image(playerCurrentImg, player.xPos, player.yPos, player.size, player.size);
}

function fieldReset() {       // resets all enemy on the field
  enemyX = [];
  enemyY = [];
  enemyHealth = [];
  enemyColor = [];
}

// bullets positions
var bulletSpeed = 20;

var bulletX = [];
var bulletY = [];
var bulletDirection = [];
var bulletColor = [];

var bulletLength = 25;
var bulletHeight = 5;

function shoot(x, y, d, c) {      // function to shoot, x,y position direction, color
  if(freeFire === true) {
    bulletColor.push("W");
  } else if(freeFire === false) {
    bulletColor.push(c);
  }
  if(allDirect === true) {      // puhs 4 bullets in all direction if powerup is true
    bulletDirection.push("up");
    bulletDirection.push("down");
    bulletDirection.push("left");
    bulletDirection.push("right");
    bulletColor.push(c);
    bulletColor.push(c);
    bulletColor.push(c);
    bulletX.push(x);
    bulletX.push(x);
    bulletX.push(x);
    bulletY.push(y);
    bulletY.push(y);
    bulletY.push(y);
  } else if (allDirect === false) {
    bulletDirection.push(d);
  }
  bulletX.push(x);
  bulletY.push(y);
}

//enemy spawning
var enemyMoveSpeed = 1.4;
var enemyMaxLife = 1;
var enemySpawnSpeed = 190; 
var enemySpawnTimer = enemySpawnSpeed;

var enemyX = [];
var enemyY = [];
var enemyHealth = [];
var enemyColor = [];

var enemySize = 50;

var speedLevel = 2;
var spawnLevel = 1;

function spawnEnemy() {       // random location around the four edges
  var c = random(1, 4);
  c = int(c);
  
  var x1 = random(0 - enemySize, width + enemySize);
  var y1 = random(0 - enemySize, 0);
  var y12 = random(600, 600 + enemySize);
  
  var x2 = random(0 - enemySize, 0);
  var x22 = random(width, width + enemySize);
  var y2 = random(0 - enemySize, 600 + enemySize);
  
  var rdm1 = random(0, 2);
  var rdm2 = random(0, 2);
  
  if (rdm1 > 1) {
    var x = x1;
    if (rdm2 > 1) {
      var y = y1;
    } else {
      var y = y12;
    }
  } else {
    var y = y2;
    if (rdm2 < 1) {
      var x = x2;
    } else {
      var x = x22;
    }
  }

  if (c === 1) {
    enemyColor.push("R");
  } else if (c === 2) {
    enemyColor.push("B");
  } else if (c === 3) {
    enemyColor.push('G');
  }
  enemyX.push(x);
  enemyY.push(y);
  var l = random(1, enemyMaxLife + 1);
  l = int(l);
  enemyHealth.push(l);
  enemySpawnTimer = enemySpawnSpeed;
}

function enemyMove() {          //enemy movement, according to player position
  for (var em = 0; em < enemyColor.length; em ++) {
    if (enemyColor[em] === "R") {
      if (enemyHealth[em] <= 1) {
        image(alienRs, enemyX[em], enemyY[em], enemySize, enemySize);
      } else if (enemyHealth[em] <= 2) {
        image(alienRm, enemyX[em], enemyY[em], enemySize, enemySize);
      } else if (enemyHealth[em] <= 3) {
        image(alienRl, enemyX[em], enemyY[em], enemySize, enemySize);
      }
    } else if (enemyColor[em] === "B") {
        if (enemyHealth[em] <= 1) {
          image(alienBs, enemyX[em], enemyY[em], enemySize, enemySize);
        } else if (enemyHealth[em] <= 2) {
          image(alienBm, enemyX[em], enemyY[em], enemySize, enemySize);
        } else if (enemyHealth[em] <= 3) {
          image(alienBl, enemyX[em], enemyY[em], enemySize, enemySize);
        }

    } else if (enemyColor[em] === "G") {
        if (enemyHealth[em] <= 1) {
          image(alienGs, enemyX[em], enemyY[em], enemySize, enemySize);
        } else if (enemyHealth[em] <= 2) {
          image(alienGm, enemyX[em], enemyY[em], enemySize, enemySize);
        } else if (enemyHealth[em] <= 3) {
          image(alienGl, enemyX[em], enemyY[em], enemySize, enemySize);
        }
    }
  
    if (freeze === false) {
      if (enemyX[em] > player.xPos) {
        enemyX[em] -= enemyMoveSpeed;
      } else if (enemyX[em] < player.xPos) {
        enemyX[em] += enemyMoveSpeed;
      }
      if (enemyY[em] > player.yPos) {
        enemyY[em] -= enemyMoveSpeed;
      } else if (enemyY[em] < player.yPos) {
        enemyY[em] += enemyMoveSpeed;
      }
    }
    
    if (enemyHealth[em] <= 0) {
      enemyX.splice(em, 1);
      enemyY.splice(em, 1);
      enemyHealth.splice(em, 1);
      enemyColor.splice(em, 1);
      player.score ++;
    }
    
    if (enemyX[em] + enemySize / 2 > player.xPos &&
        enemyX[em] - enemySize / 2 < player.xPos &&
        enemyY[em] + enemySize / 2 > player.yPos &&
        enemyY[em] - enemySize / 2 < player.yPos &&
        invun === false) {
          player.health --;
          fieldReset();
        }
  }
}

function difficulty() {           // difficulty increase over time according to player score
  if (player.score / 8 >= speedLevel) {
    enemyMoveSpeed += 0.05;
    speedLevel ++;
  }
  
  if (player.score / 5 >= spawnLevel) {
    enemySpawnSpeed -= 13;
    spawnLevel ++;
  }
  
  if (player.score === 27) {
    enemyMaxLife = 2;
  } else if (player.score === 64) {
    enemyMaxLife = 3;
  }
}

function bulletMove() {           // the bullet movements
  for (var bm = 0; bm < bulletColor.length; bm ++) {
    if (bulletDirection[bm] === "up") {
      bulletY[bm] -= bulletSpeed;
      if (bulletColor[bm] === "R") {
        image(laserRv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      } else if (bulletColor[bm] === "B") {
        image(laserBv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      } else if (bulletColor[bm] === "G") {
        image(laserGv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      } else if (bulletColor[bm] === "W") {
        image(laserWv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      }
    }
    
    if (bulletDirection[bm] === "down") {
      bulletY[bm] += bulletSpeed;
      if (bulletColor[bm] === "R") {
        image(laserRv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      } else if (bulletColor[bm] === "B") {
        image(laserBv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      } else if (bulletColor[bm] === "G") {
        image(laserGv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      } else if (bulletColor[bm] === "W") {
        image(laserWv, bulletX[bm], bulletY[bm], bulletHeight, bulletLength);
      }
    }
    
    if (bulletDirection[bm] === "left") {
      bulletX[bm] -= bulletSpeed;
      if (bulletColor[bm] === "R") {
        image(laserRh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      } else if (bulletColor[bm] === "B") {
        image(laserBh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      } else if (bulletColor[bm] === "G") {
        image(laserGh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      } else if (bulletColor[bm] === "W") {
        image(laserWh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      }
    }
    
    if (bulletDirection[bm] === "right") {
      bulletX[bm] += bulletSpeed;
      if (bulletColor[bm] === "R") {
        image(laserRh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      } else if (bulletColor[bm] === "B") {
        image(laserBh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      } else if (bulletColor[bm] === "G") {
        image(laserGh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      } else if (bulletColor[bm] === "W") {
        image(laserWh, bulletX[bm], bulletY[bm], bulletLength, bulletHeight);
      }
    }
    if (bulletX[bm] < 0 || bulletX[bm] > width ||
        bulletY[bm] < 0 || bulletY[bm] > 600) {
          bulletX.splice(bm, 1);
          bulletY.splice(bm, 1);
          bulletDirection.splice(bm, 1);
          bulletColor.splice(bm, 1);
    }
  }
}

function bulletCollision() {          // check bullet position, check if hit enemy
  for (var bce = 0; bce < enemyColor.length; bce ++) {
    for (var bcb = 0; bcb < bulletColor.length; bcb ++) {
      if (enemyX[bce] + 25 > bulletX[bcb] && 
          enemyX[bce] - 25 < bulletX[bcb] &&
          enemyY[bce] + 25 > bulletY[bcb] &&
          enemyY[bce] - 25 < bulletY[bcb]) {
        if (enemyColor[bce] === bulletColor[bcb] || bulletColor[bcb] === "W") {
          if (juanTap === true) {
            enemyHealth[bce] = 0;;
          } else {
            enemyHealth[bce] -= player.atkDamage;
          }
        }
          bulletColor.splice(bcb, 1);
          bulletDirection.splice(bcb, 1);
          bulletX.splice(bcb, 1);
          bulletY.splice(bcb, 1);
      }
    }
  }
}

function checkLoss() {          // check if loss
  if (player.health <= 0) {
    screen = "end";
  }
}

function boardClear() {           // funciton for the powerup
  for (var pbc = 0; pbc < enemyHealth.length; pbc ++) {
    enemyHealth[pbc] --;
  }
}

function spawnPower() {
    powerX = random(powerSize / 2, width - powerSize / 2);
    powerY = random(powerSize / 2, 600 - powerSize / 2);
    var p = random(0, 7);
    p = int(p);
    switch (p) {
      case 0 :
        powerType = "lifeUp";       // add 1 life
        break;
      case 1 :
        powerType = "rapidFire";      // no attack speed limit
        break;
      case 2 :
        powerType = "juanTap";      // instant kill enemy regardless of health
        break;
      case 3 :
        powerType = "slowEnemy";      // permanant speed reduction to enemy
        break;
      case 4 :
        powerType = "clearBoard";     // - 1 health to all enemy on screen
        break;
      case 5 :
        powerType = "freeFire";     // can use any color bullet to shoot enemy, white bullet
        break;
      case 6 :
        powerType = "allDirect";      // fire in all 4 directions
    }
    isPower = true;
}

function drawPower() {        // shows powerup icons
  switch(powerType) {
    case "lifeUp" :
      image(iconLifeUp, powerX, powerY, powerSize, powerSize);
      break;
    case "rapidFire":
      image(iconRapidFire, powerX, powerY, powerSize, powerSize);
      break;
    case "juanTap" :
      image(iconJuanTap, powerX, powerY, powerSize, powerSize);
      break;
    case "slowEnemy" :
      image(iconSlowEnemy, powerX, powerY, powerSize, powerSize);
      break;
    case "clearBoard" :
      image(iconClearBoard, powerX, powerY, powerSize, powerSize);
      break;
    case "freeFire" :
      image(iconFreeFire, powerX, powerY, powerSize, powerSize);
      break;
    case "allDirect" :
      image(iconAllDirect, powerX, powerY, powerSize, powerSize);
      
  }
}

function havePower() {            // gives power
    switch(powerType) {
      case "lifeUp" :
        player.health ++;
        break;
      case "rapidFire":
        rapidFire = true;
        powerDuration = 720;
        break;
      case "juanTap" :
        juanTap = true;
        powerDuration = 600;
        break;
      case "slowEnemy" :
        enemyMoveSpeed -= 0.35;
        break;
      case "clearBoard" :
        boardClear();
        break;
      case "freeFire" :
        freeFire = true;
        powerDuration = 640;
        break;
      case "allDirect" :
        allDirect = true;
        powerDuration = 840;
    }
    powerType = "null";
    isPower = false;
    powerSpawnTimer = random(1000, 3000);
}

function keyPressed() {
    // ACtion, shooting but pushing values to bullet array
  if (screen === "game" && (player.atkTimer === 0 || rapidFire === true)) {
    if (keyCode === 74) {
      shoot(player.xPos, player.yPos, player.direction, "R");         // shoot red
      player.atkTimer = player.atkSpeed;
    }
    if (keyCode === 75) {
      shoot(player.xPos, player.yPos, player.direction, "B");         // shoot blue
      player.atkTimer = player.atkSpeed;
    }
    if (keyCode === 76) {
      shoot(player.xPos, player.yPos, player.direction, "G");         // shoot green
      player.atkTimer = player.atkSpeed;
    }
  }
    // Pause, Menu
  if (keyCode === 27) {             // esc, from the following screens to menu
    if (screen === "pause" || screen === "instructOne" || 
        screen === "selection" || screen === "end" || screen === "instructTwo") {
      screen = "menu";  
    }
  }
  if (keyCode === 80) {             // p, pause unpause
    if (screen === "game") {
      screen = "pause";
    } else if (screen === "pause") {
      screen = "game";
    }
  }
  if (keyCode === 32) {           // space, start game, ability.
    if (screen === "menu" || screen === "instructTwo") {
      screen = "selection";
      gameReset();
    } else if (screen === "game" && player.abilityCd === 0) { 
      playerAbility();
    }
  }
  if (keyCode === 85 && screen === "end") {         // u, restart from end screen.
    screen = "selection";
  }
  if (keyCode === 73 && screen === "menu") {          // i, instructiosns
    screen = "instructOne";
  }
  if (keyCode === 37 && screen === "instructTwo") {           // left arrow last page
    screen = "instructOne";
  }
  if (keyCode === 39 && screen === "instructOne") {           // right arrow to next page
    screen = "instructTwo";
  }
  if (keyCode === 49 && screen === "selection") {             // 1, 2, 3 select characters 
    player = charTank;
    playerImgD = tankImgD;
    playerImgL = tankImgL;
    playerImgR = tankImgR;            // loads model for that character into current player
    playerImgU = tankImgU;
    screen = "game";
  } else if (keyCode === 50 && screen === "selection") {
    player = charShip;
    playerImgD = shipImgD;
    playerImgL = shipImgL;
    playerImgR = shipImgR;
    playerImgU = shipImgU;
    screen = "game";
  } else if (keyCode === 51 && screen === "selection") {
    player = charSub;
    playerImgD = subImgD;
    playerImgL = subImgL;
    playerImgR = subImgR;
    playerImgU = subImgU;
    screen = "game";
  }
}

function variableCap() {          // limit  variable to desired range
  player.xPos = constrain(player.xPos, player.size / 2, width - player.size / 2);
  player.yPos = constrain(player.yPos, player.size / 2, 600 - player.size / 2);
  player.atkTimer = constrain(player.atkTimer, 1, 20);
  player.abilityCd = constrain(player.abilityCd, 1, 1500);
  player.abilityTimer = constrain(player.abilityTimer, 1, 300);
  enemySpawnSpeed = constrain(enemySpawnSpeed, 110, 200);
  enemySpawnTimer = constrain(enemySpawnTimer, 1, 200);
  enemyMoveSpeed = constrain(enemyMoveSpeed, 1, 2.55);
  enemyMaxLife = constrain(enemyMaxLife, 1, 3);
  powerSpawnTimer = constrain(powerSpawnTimer, 1, 7200);
  powerDuration = constrain(powerDuration, 1, 840);
}

function timerTick() {          // count down all timing variables
  player.atkTimer --;
  enemySpawnTimer --;
  powerSpawnTimer --;
  powerDuration --; 
  player.abilityCd --;
  player.abilityTimer --;
}

function gameReset() {          // rest the game entirely
  fieldReset();
  player.score = 0;
  player.health = 1;
  player.xPos = 512;
  player.yPos = 300;
  speedLevel = 2;
  spawnLevel = 1;
  enemyMaxLife = 1;
  enemyMoveSpeed = 1.4;
  enemySpawnSpeed = 190;
  powerSpawnTimer = 3600;
  powerType = "null";
  powerReset();
  powerX = -99;
  powerY = -99;
  player.ability = "null";
}

function drawHud() {
  image(hudBoard, 512, 650, 1024, 100);
  fill(255, 0, 255);
  textSize(25);
  text("Score: " + player.score, 100, 635);
  text("Ability", 235, 635);
  text("Power Up", 235, 675);
  rect(330, 615, (1500 - player.abilityCd) * 0.4, 25);          // ability bar
  rect(330, 655, powerDuration * 0.6, 25);          // powerUp bar
  
  fill(255, 0, 0);
  text(player.health, 120, 675);
  image(heart, 75, 665, 25, 25);
  if (player.abilityCd === 0) {
    fill(0);
    text("READY !!", 550, 635);
  }
}

function game() {
  background(0);
  image(spaceBackground, 512, 400, 1024, 800);
  variableCap();
  timerTick();
  
  if (player.abilityTimer === 0) {
    playerAbilityReset();
  }
  
  if (enemySpawnTimer < 3) {
    spawnEnemy();
  }
  
  if (powerSpawnTimer === 0 && isPower === false) {
    spawnPower();
  }
  drawPower();
  if (player.xPos + player.size / 2 > powerX &&
      player.xPos - player.size / 2 < powerX &&
      player.yPos + player.size / 2  > powerY &&
      player.yPos - player.size / 2 < powerY && 
      isPower === true) {
    havePower();
  }
  if (powerDuration === 0) {
    powerReset();
  }
  enemyMove();
  playerMove();
  bulletMove();
  bulletCollision();
  difficulty();
  checkLoss();
  drawHud();
}

draw = function() {
  if (screen === "menu") {
    mainMenu();
  } else if (screen === "selection") {
    selection();
  } else if (screen === "game") {
    game();
  } else if (screen === "instructOne") {
    instructOne();
  } else if (screen === "instructTwo") {
    instructTwo();
  } else if (screen === "end") {
    endSreen();
  } else if (screen === "pause") {
    pauseScreen();
  }
};