async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f0");
  randomSeed(909);
  brush.noStroke();
  // rainy grey-blue wash, splashy and uneven
  brush.fill("#9fb2c0", 190);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.9);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    brush.fill(random(["#7d93a6", "#b3a7c4", "#8fa9a0"]), random(130, 180));
    brush.fillBleed(0.35);
    brush.circle(random(0, 600), random(0, 600), random(50, 110), 0.8);
  }
  // umbrella canopy: big dome over the head
  brush.fill("#d9261c", 230);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(40, 250); brush.vertex(90, 130); brush.vertex(200, 55); brush.vertex(330, 45); brush.vertex(460, 95); brush.vertex(545, 200); brush.vertex(565, 255);
  brush.vertex(500, 238); brush.vertex(435, 258); brush.vertex(370, 238); brush.vertex(300, 258); brush.vertex(230, 238); brush.vertex(165, 258); brush.vertex(100, 238);
  brush.endShape(true);
  brush.fill("#a8120e", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(300, 50); brush.vertex(380, 70); brush.vertex(440, 250); brush.vertex(370, 238);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(290, 52); brush.vertex(170, 90); brush.vertex(100, 238); brush.vertex(165, 256);
  brush.endShape(true);
  // drips hanging from the rim
  for (let i = 0; i < 9; i++) {
    let x = 70 + i * 60 + random(-10, 10);
    let len = random(30, 110);
    brush.fill("#c8241c", random(150, 200));
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(x - 8, 245); brush.vertex(x + 8, 245); brush.vertex(x + 3, 245 + len); brush.vertex(x - 3, 245 + len);
    brush.endShape(true);
    brush.circle(x, 248 + len, random(5, 8), 0.3);
  }
  // umbrella shaft
  brush.fill("#3a2a24", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(292, 250); brush.vertex(308, 250); brush.vertex(312, 410); brush.vertex(294, 410);
  brush.endShape(true);
  // head
  brush.fill("#d99b7a", 210);
  brush.fillBleed(0.25);
  brush.circle(250, 330, 48, 0.3);
  brush.fill("#2f2420", 220);
  brush.beginShape(0.6);
  brush.vertex(200, 320); brush.vertex(220, 280); brush.vertex(270, 272); brush.vertex(300, 300); brush.vertex(292, 330); brush.vertex(250, 300); brush.vertex(215, 350);
  brush.endShape(true);
  // coat: shoulders to the bottom edge
  brush.fill("#2e4058", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(220, 375); brush.vertex(280, 380); brush.vertex(360, 410); brush.vertex(420, 470); brush.vertex(440, 620);
  brush.vertex(80, 620); brush.vertex(100, 470); brush.vertex(150, 405);
  brush.endShape(true);
  brush.fill("#1c2a3e", 200);
  brush.beginShape(0.6);
  brush.vertex(250, 390); brush.vertex(270, 620); brush.vertex(300, 620); brush.vertex(280, 395);
  brush.endShape(true);
  // hand holding the shaft
  brush.fill("#d99b7a", 220);
  brush.circle(302, 418, 17, 0.3);
  // rain streaks
  for (let i = 0; i < 40; i++) {
    let x = random(0, 600);
    let y = random(0, 600);
    brush.fill("#ffffff", 150);
    brush.fillBleed(0.1);
    brush.circle(x, y, random(1.5, 3), 0.2);
  }
}
