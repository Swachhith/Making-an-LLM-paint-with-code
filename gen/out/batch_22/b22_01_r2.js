async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f1");
  randomSeed(2201);
  brush.noStroke();
  // pale sky
  brush.fill("#a9c4d6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 310);
  brush.endShape(true);
  brush.fill("#c7d7e2", 150);
  brush.beginShape(0.8);
  brush.vertex(80, 60); brush.vertex(330, 40); brush.vertex(420, 110); brush.vertex(140, 130);
  brush.endShape(true);
  // distant hill behind the trees
  brush.fill("#9fb4bf", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(-20, 290); brush.vertex(150, 250); brush.vertex(380, 262); brush.vertex(620, 240); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  // the field
  brush.fill("#b7c99a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 318); brush.vertex(620, 312); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8faa7a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(300, 400); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // the forest edge: a band of narrow pines
  brush.fill("#5f7f86", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-20, 330); brush.vertex(-20, 290); brush.vertex(620, 280); brush.vertex(620, 330);
  brush.endShape(true);
  let x = -10;
  while (x < 620) {
    let h = random(45, 95);
    let w = random(16, 26);
    let base = 330 + random(-4, 4);
    brush.fill(random(["#244650", "#1f3e4a", "#2f5456"]), random(200, 240));
    brush.fillBleed(0.22);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.15);
    brush.vertex(x - w / 2, base);
    brush.vertex(x - w * 0.3, base - h * 0.5);
    brush.vertex(x, base - h);
    brush.vertex(x + w * 0.3, base - h * 0.5);
    brush.vertex(x + w / 2, base);
    brush.endShape(true);
    x += random(11, 19);
  }
  // a second, darker pass on a few taller pines
  for (let k = 0; k < 14; k++) {
    let px = random(0, 600);
    let h = random(70, 110);
    brush.fill("#1a343c", 210);
    brush.fillBleed(0.2);
    brush.beginShape(0.1);
    brush.vertex(px - 10, 332); brush.vertex(px, 332 - h); brush.vertex(px + 10, 332);
    brush.endShape(true);
  }
  // shadow at the forest foot
  brush.fill("#445f55", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 325); brush.vertex(620, 322); brush.vertex(620, 345); brush.vertex(-20, 348);
  brush.endShape(true);
  // soft furrows in the field
  for (let i = 0; i < 5; i++) {
    let y = 380 + i * 45;
    brush.fill("#9db883", 150);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(-20, y); brush.vertex(300, y - 10 + i * 3); brush.vertex(620, y + 5); brush.vertex(620, y + 20 + i * 3); brush.vertex(-20, y + 18 + i * 3);
    brush.endShape(true);
  }
  // cool lilac light over the near field
  brush.fill("#9fa8cf", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 520); brush.vertex(250, 500); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // scattered pale-blue flowers in the foreground grass
  for (let i = 0; i < 40; i++) {
    let y = random(470, 600);
    brush.fill(random(["#7d9cc8", "#9aa6d8", "#e8ecf2"]), random(170, 220));
    brush.fillBleed(0.2);
    brush.circle(random(0, 600), y, 2 + (y - 470) / 30, 0.4);
  }
  // pale morning light catching the field just below the trees
  brush.fill("#e6e3c6", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 350); brush.vertex(620, 345); brush.vertex(620, 372); brush.vertex(-20, 378);
  brush.endShape(true);
}
