async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16334a");
  randomSeed(311);
  brush.noStroke();
  // sky lightens toward the horizon so the hills cut out against it
  brush.fill("#2f8a92", 210);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-30, 520); brush.vertex(-30, 300); brush.vertex(300, 270); brush.vertex(630, 290); brush.vertex(630, 520);
  brush.endShape(true);
  brush.fill("#56b3ac", 180);
  brush.beginShape(0.9);
  brush.vertex(-30, 500); brush.vertex(40, 380); brush.vertex(320, 360); brush.vertex(600, 370); brush.vertex(630, 500);
  brush.endShape(true);
  // indigo overhead, soft-edged
  brush.fill("#262d78", 210);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 140); brush.vertex(400, 190); brush.vertex(150, 170); brush.vertex(-30, 210);
  brush.endShape(true);
  // a loose milky way: separate cloudy dabs along a diagonal
  for (let i = 0; i < 12; i++) {
    let t = i / 11;
    let x = 40 + t * 540 + random(-30, 30);
    let y = 330 - t * 290 + random(-25, 25);
    brush.fill(random(["#5fb0b0", "#7a8ad0", "#3f96a0"]), random(120, 160));
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.6);
    brush.circle(x, y, random(35, 60), 0.9);
  }
  for (let i = 0; i < 260; i++) {
    let x = random(0, 600);
    let inBand = random() < 0.55;
    let y = inBand ? 330 - (x - 40) * 0.54 + randomGaussian(0, 35) : random(0, 460);
    if (y < 0 || y > 460) continue;
    brush.fill(random(["#f4fbff", "#fff4d6", "#d8f3f0"]), random(170, 250));
    brush.fillBleed(0.05);
    brush.circle(x, y, random(0.8, 2.4), 0.2);
  }
  for (let i = 0; i < 9; i++) {
    let x = random(30, 570), y = random(20, 380);
    brush.fill("#e9fbff", 140);
    brush.fillBleed(0.35);
    brush.circle(x, y, 11, 0.4);
    brush.fill("#ffffff", 250);
    brush.fillBleed(0.05);
    brush.circle(x, y, 4, 0.2);
  }
  // three silhouetted hill ranges, stepping darker
  brush.fill("#133040", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 440); brush.vertex(100, 400); brush.vertex(220, 425); brush.vertex(350, 385); brush.vertex(480, 420); brush.vertex(620, 395); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#08161f", 245);
  brush.beginShape(0.8);
  brush.vertex(-20, 490); brush.vertex(130, 450); brush.vertex(280, 480); brush.vertex(420, 455); brush.vertex(620, 495); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#02070b", 250);
  brush.beginShape(0.8);
  brush.vertex(-20, 555); brush.vertex(180, 520); brush.vertex(360, 545); brush.vertex(620, 525); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a lone tree on the nearest ridge
  brush.beginShape(0.1);
  brush.vertex(470, 540); brush.vertex(478, 470); brush.vertex(486, 540);
  brush.endShape(true);
  brush.circle(478, 480, 18, 0.5);
}
