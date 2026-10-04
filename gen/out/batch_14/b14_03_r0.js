async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1a33");
  randomSeed(303);
  brush.noStroke();

  // teal glow rising from the horizon
  brush.fill("#1f7f86", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(-20, 360); brush.vertex(150, 330);
  brush.vertex(380, 350); brush.vertex(620, 320); brush.vertex(620, 500);
  brush.endShape(true);
  brush.fill("#3aa6a0", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(-20, 440); brush.vertex(300, 420);
  brush.vertex(620, 430); brush.vertex(620, 500);
  brush.endShape(true);
  // indigo band high in the sky
  brush.fill("#2a2c7a", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150);
  brush.vertex(350, 200); brush.vertex(80, 170); brush.vertex(-20, 210);
  brush.endShape(true);

  // stars
  for (let i = 0; i < 140; i++) {
    const x = random(600), y = random(0, 440);
    const r = random() < 0.1 ? random(3, 5) : random(0.8, 2.2);
    brush.fill(random() < 0.3 ? "#bfeff0" : "#fff8e0", random(170, 240));
    brush.fillBleed(0.05);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, r, 0.1);
  }

  // lighthouse beam
  brush.fill("#e6f4d8", 120);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(452, 398); brush.vertex(-20, 300); brush.vertex(-20, 380); brush.vertex(452, 408);
  brush.endShape(true);

  // sea
  brush.fill("#0a4a5c", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 505); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5fc3bb", 150);
  for (let i = 0; i < 6; i++) {
    const y = 515 + i * 14;
    brush.beginShape(0.5);
    brush.vertex(random(0, 200), y); brush.vertex(random(250, 420), y - 3);
    brush.vertex(random(250, 420), y + 4);
    brush.endShape(true);
  }

  // headland rocks
  brush.fill("#07111f", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.6);
  brush.vertex(360, 520); brush.vertex(400, 480); brush.vertex(440, 470);
  brush.vertex(500, 468); brush.vertex(560, 490); brush.vertex(620, 500);
  brush.vertex(620, 540); brush.vertex(360, 540);
  brush.endShape(true);

  // tower: pale paint on dark paper
  brush.fill("#dfe8ea", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(442, 412); brush.vertex(462, 412); brush.vertex(470, 475); brush.vertex(434, 475);
  brush.endShape(true);
  brush.fill("#b8323c", 210);
  brush.beginShape(0);
  brush.vertex(439, 438); brush.vertex(466, 438); brush.vertex(467, 452); brush.vertex(438, 452);
  brush.endShape(true);
  brush.fill("#1a1a2e", 230);
  brush.beginShape(0);
  brush.vertex(440, 395); brush.vertex(452, 385); brush.vertex(464, 395); brush.vertex(464, 412); brush.vertex(440, 412);
  brush.endShape(true);
  brush.fill("#fff2b0", 240);
  brush.fillBleed(0.3);
  brush.circle(452, 402, 7, 0.2);
  brush.fill("#fff8d8", 130);
  brush.circle(452, 402, 16, 0.4);
}
