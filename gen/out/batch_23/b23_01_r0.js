async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e6");
  brush.noStroke();

  // bold summer sky wash, left heavy
  brush.fill("#2f8fd8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 330);
  brush.vertex(300, 350); brush.vertex(0, 320);
  brush.endShape(true);

  // lawn
  brush.fill("#3fae3a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 330); brush.vertex(250, 345); brush.vertex(600, 320);
  brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1f7a2a", 180);
  brush.beginShape(0.8);
  brush.vertex(0, 470); brush.vertex(300, 450); brush.vertex(600, 480);
  brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // a big tree far right as counterweight
  brush.fill("#1b6d2c", 200);
  brush.fillBleed(0.3);
  brush.circle(560, 210, 110, 0.6);
  brush.fill("#0e4f22", 170);
  brush.circle(540, 250, 70, 0.5);

  // path
  brush.fill("#e0a44a", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(0, 430); brush.vertex(200, 410); brush.vertex(600, 415);
  brush.vertex(600, 445); brush.vertex(200, 440); brush.vertex(0, 465);
  brush.endShape(true);

  // bench on the left third, small
  brush.fill("#8a3b12", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(90, 365); brush.vertex(250, 365); brush.vertex(250, 382); brush.vertex(90, 382);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(85, 395); brush.vertex(255, 395); brush.vertex(255, 412); brush.vertex(85, 412);
  brush.endShape(true);
  brush.fill("#3a1a08", 230);
  brush.beginShape(0);
  brush.vertex(98, 410); brush.vertex(114, 410); brush.vertex(114, 440); brush.vertex(98, 440);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(228, 410); brush.vertex(244, 410); brush.vertex(244, 440); brush.vertex(228, 440);
  brush.endShape(true);

  // person 1: red coat
  brush.fill("#d6202e", 230);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(118, 330); brush.vertex(150, 328); brush.vertex(156, 398);
  brush.vertex(112, 400);
  brush.endShape(true);
  brush.fill("#1c2a7a", 220);
  brush.beginShape(0.4);
  brush.vertex(114, 390); brush.vertex(160, 392); brush.vertex(162, 432); brush.vertex(146, 434); brush.vertex(144, 406); brush.vertex(114, 404);
  brush.endShape(true);
  brush.fill("#c98a5a", 220);
  brush.circle(134, 315, 13, 0.2);
  brush.fill("#2a150a", 220);
  brush.circle(133, 309, 11, 0.3);

  // person 2: yellow sweater
  brush.fill("#f2b705", 235);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(176, 334); brush.vertex(208, 332); brush.vertex(214, 398); brush.vertex(172, 400);
  brush.endShape(true);
  brush.fill("#7a1f6e", 220);
  brush.beginShape(0.4);
  brush.vertex(172, 390); brush.vertex(218, 392); brush.vertex(220, 434); brush.vertex(204, 436); brush.vertex(202, 406); brush.vertex(172, 404);
  brush.endShape(true);
  brush.fill("#8a5a3a", 220);
  brush.circle(192, 319, 13, 0.2);
  brush.fill("#c2461a", 200);
  brush.circle(192, 312, 12, 0.4);

  // shadow under bench
  brush.fill("#0f5a24", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(80, 438); brush.vertex(270, 436); brush.vertex(290, 452); brush.vertex(90, 455);
  brush.endShape(true);

  // a few bold flowers
  for (let i = 0; i < 14; i++) {
    brush.fill(random(["#e8176b", "#ff7a00", "#f5d000"]), 220);
    brush.circle(300 + random(280), 500 + random(90), 5 + random(5), 0.5);
  }
}
