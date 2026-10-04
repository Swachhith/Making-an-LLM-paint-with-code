async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#123046");
  randomSeed(1803);
  brush.noStroke();

  // teal glow near horizon
  brush.fill("#2f7f86", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 300); brush.vertex(600, 280); brush.vertex(600, 470); brush.vertex(0, 480);
  brush.endShape(true);
  // indigo upper sky
  brush.fill("#1b1f5c", 200);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 180); brush.vertex(300, 230); brush.vertex(0, 170);
  brush.endShape(true);

  // stars: paper-light dots on dark paper
  for (let i = 0; i < 160; i++) {
    let s = random() < 0.1 ? random(3, 5) : random(1, 2.4);
    brush.fill(random() < 0.3 ? "#bff0ea" : "#f4f6ff", random(170, 250));
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(random(0, 600), random(0, 420), s, 0.2);
  }
  // milky band
  for (let i = 0; i < 10; i++) {
    let t = i / 9;
    brush.fill("#6fb8c0", 140);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(80 + t * 460, 60 + t * 240 + random(-20, 20), random(30, 50), 0.7);
  }

  // far hills
  brush.fill("#0e2a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 430); brush.vertex(120, 390); brush.vertex(260, 420); brush.vertex(400, 370);
  brush.vertex(600, 410); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // near hills
  brush.fill("#050d1c", 250);
  brush.beginShape(0.6);
  brush.vertex(0, 480); brush.vertex(180, 450); brush.vertex(330, 500); brush.vertex(480, 460);
  brush.vertex(600, 490); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(0, 520); brush.vertex(250, 530); brush.vertex(600, 540); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
}
