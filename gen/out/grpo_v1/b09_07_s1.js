async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e2");
  randomSeed(2313);
  brush.noStroke();

  // sky: deep indigo fading to violet
  brush.fill("#2a1a6e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 250); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#4a2a8a", 160);
  brush.beginShape(0.3);
  brush.vertex(-20, 180); brush.vertex(620, 180); brush.vertex(620, 400); brush.vertex(300, 420); brush.vertex(-20, 380);
  brush.endShape(true);

  // rolling hills in the far distance, warm ochre
  for (let i = 0; i < 5; i++) {
    const y = 200 + i * 55;
    brush.fill("#e89a2a", 180);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(-20, y);
    brush.vertex(150 + i * 100, y - 20 - i * 12);
    brush.vertex(300 + i * 100, y + 15 - i * 8);
    brush.vertex(450 + i * 100, y - 15 - i * 10);
    brush.vertex(620, y + 10);
    brush.vertex(620, y + 35);
    brush.vertex(300 + i * 100, y + 45 - i * 10);
    brush.vertex(150 + i * 100, y + 30 - i * 12);
    brush.vertex(-20, y + 30);
    brush.endShape(true);
  }

  // midground: layered ridges in crimson and burnt orange
  brush.fill("#b01a40", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 330); brush.vertex(200, 280); brush.vertex(400, 320); brush.vertex(620, 300); brush.vertex(620, 350); brush.vertex(-20, 350);
  brush.endShape(true);
  brush.fill("#d22a3a", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, 360); brush.vertex(250, 320); brush.vertex(450, 360); brush.vertex(620, 340); brush.vertex(620, 390); brush.vertex(-20, 390);
  brush.endShape(true);

  // valley floor: golden meadow
  brush.fill("#f2a020", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 390); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // scattered golden conifers
  for (let i = 0; i < 30; i++) {
    const x = random(20, 580);
    const y = random(400, 560);
    brush.fill("#c83a0e", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(x, y);
    brush.vertex(x - 9, y - 26); brush.vertex(x + 9, y - 26); brush.vertex(x + 4, y - 18);
    brush.endShape(true);
  }
  // a few red maple trees
  for (let i = 0; i < 10; i++) {
    const x = random(20, 580);
    const y = random(370, 520);
    brush.fill("#a81a3a", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x, y);
    brush.vertex(x - 7, y - 20); brush.vertex(x + 7, y - 20); brush.vertex(x + 3, y - 14);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(x, y);
    brush.vertex(x - 6, y - 12); brush.vertex(x + 6, y - 12); brush.vertex(x + 2, y - 8);
    brush.endShape(true);
  }

  // foreground: a wide river reflecting the sky
  brush.fill("#1a2a6a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 390); brush.vertex(620, 395); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0a1040", 160);
  brush.beginShape(0.5);
  brush.vertex(-20, 410); brush.vertex(620, 415); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sunlit ripples
  for (let i = 0; i < 25; i++) {
    const x = random(20, 580);
    brush.fill("#f2a020", 150);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, 430 + i * 3, 3, 0.2);
  }
  // far shore: a few dark silhouettes
  brush.fill("#1a1a40", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(50, 395); brush.vertex(150, 360); brush.vertex(250, 395); brush.vertex(250, 405); brush.vertex(50, 405);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(400, 395); brush.vertex(520, 370); brush.vertex(620, 395); brush.vertex(620, 405); brush.vertex(400, 405);
  brush.endShape(true);
}
