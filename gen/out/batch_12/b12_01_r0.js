async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3ee");
  randomSeed(12);
  brush.noStroke();
  // big sky wash, pink to lilac
  brush.fill("#f29bb0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(-20, 480);
  brush.endShape(true);
  // splashy blooms of colour across the sky
  let cols = ["#e8577e", "#f7a55c", "#b77cc7", "#f06b8a", "#ffb27a"];
  for (let i = 0; i < 14; i++) {
    let x = random(0, 600), y = random(20, 400);
    brush.fill(random(cols), random(150, 220));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(x, y, random(40, 110), 0.9);
  }
  // drips running down from the sky
  for (let i = 0; i < 7; i++) {
    let x = random(40, 560), y = random(150, 300);
    brush.fill(random(cols), 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 10, y);
    brush.vertex(x + 10, y);
    brush.vertex(x + 9, y + random(60, 140));
    brush.vertex(x - 8, y + random(60, 140));
    brush.endShape(true);
  }
  // glowing low band at horizon
  brush.fill("#ffc38a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 400); brush.vertex(620, 390); brush.vertex(620, 470); brush.vertex(-20, 480);
  brush.endShape(true);
  // fields
  brush.fill("#6c8a4a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 468); brush.vertex(200, 460); brush.vertex(420, 470); brush.vertex(620, 462); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a6a3c", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-20, 510); brush.vertex(300, 490); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3f5a30", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 560); brush.vertex(250, 545); brush.vertex(620, 570); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // hedgerow blobs on horizon
  for (let x = 20; x < 600; x += random(30, 60)) {
    brush.fill("#3d4a2c", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, 468, random(8, 16), 0.6);
  }
}
