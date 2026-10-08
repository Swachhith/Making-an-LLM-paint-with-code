async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f8");
  randomSeed(1010);
  brush.noStroke();

  // cool sky: blue-grey washes
  brush.fill("#a8b8c8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(350, 260); brush.vertex(150, 240); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#8aa3b8", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 420); brush.vertex(300, 430); brush.vertex(120, 410); brush.vertex(-20, 430);
  brush.endShape(true);

  // ground: pale grey-blue
  brush.fill("#cfd6e0", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 430); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // birch trunks: pale with dark vertical markings
  function birch(x, y, w, h, tilt) {
    brush.fill("#f6efe1", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x - w * 0.15, y); brush.vertex(x + w * 0.15, y); brush.vertex(x + w * 0.22, y + h); brush.vertex(x - w * 0.22, y + h);
    brush.endShape(true);
    brush.fill("#e3e8ec", 210);
    brush.fillBleed(0.15);
    brush.beginShape(0.2);
    brush.vertex(x - w * 0.15, y); brush.vertex(x + w * 0.15, y); brush.vertex(x + w * 0.22, y + h); brush.vertex(x - w * 0.22, y + h);
    brush.endShape(true);
    brush.fill("#3a4a5a", 225);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.2);
    brush.vertex(x - w * 0.1, y + 10); brush.vertex(x + w * 0.1, y + 10); brush.vertex(x + w * 0.12, y + h * 0.8); brush.vertex(x - w * 0.12, y + h * 0.8);
    brush.endShape(true);
    brush.fill("#1f2a36", 225);
    brush.fillBleed(0.12);
    brush.beginShape(0.2);
    brush.vertex(x - w * 0.1, y + h * 0.8); brush.vertex(x + w * 0.1, y + h * 0.8); brush.vertex(x + w * 0.12, y + h); brush.vertex(x - w * 0.12, y + h);
    brush.endShape(true);
    brush.fill("#1f2a36", 225);
    brush.fillBleed(0.12);
    brush.beginShape(0.2);
    brush.vertex(x - w * 0.1, y + h * 0.8); brush.vertex(x + w * 0.1, y + h * 0.8); brush.vertex(x + w * 0.12, y + h); brush.vertex(x - w * 0.12, y + h);
    brush.endShape(true);
    brush.fill("#3a4a5a", 225);
    brush.fillBleed(0.12);
    brush.beginShape(0.2);
    brush.vertex(x - w * 0.1, y + h * 0.8); brush.vertex(x + w * 0.1, y + h * 0.8); brush.vertex(x + w * 0.12, y + h); brush.vertex(x - w * 0.12, y + h);
    brush.endShape(true);
  }

  // large tree, filling most of the canvas
  let tx = 280, ty = 210;
  let tw = 170, th = 370;
  birch(tx, ty, tw, th, 0);
  // crown: two passes of cool light
  brush.fill("#bfe3f0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(tx - 130, ty - 100); brush.vertex(tx - 70, ty - 200); brush.vertex(tx + 70, ty - 210); brush.vertex(tx + 130, ty - 120); brush.vertex(tx + 110, ty - 60); brush.vertex(tx + 40, ty + 20); brush.vertex(tx - 40, ty + 60);
  brush.endShape(true);
  brush.fill("#9ccce6", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(tx - 90, ty + 20); brush.vertex(tx - 30, ty - 60); brush.vertex(tx + 30, ty - 50); brush.vertex(tx + 90, ty + 20); brush.vertex(tx + 40, ty + 80); brush.vertex(tx - 40, ty + 90);
  brush.endShape(true);
  brush.fill("#8fb8d0", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(tx - 120, ty + 80); brush.vertex(tx - 50, ty + 140); brush.vertex(tx + 50, ty + 130); brush.vertex(tx + 120, ty + 90); brush.vertex(tx + 80, ty + 150); brush.vertex(tx - 80, ty + 155);
  brush.endShape(true);
  // second crown pass
  brush.fill("#a8d4e8", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(tx - 110, ty - 80); brush.vertex(tx - 40, ty - 180); brush.vertex(tx + 40, ty - 175); brush.vertex(tx + 110, ty - 90); brush.vertex(tx + 60, ty - 30); brush.vertex(tx - 60, ty + 10);
  brush.endShape(true);
  // trunk
  birch(tx, ty, tw, th, 0);
  // second trunk pass
  birch(tx + 2, ty + 4, tw * 0.9, th * 0.9, 0.5);
  // shadow side
  brush.fill("#7a8f9f", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(tx + 60, ty - 150); brush.vertex(tx + 140, ty - 100); brush.vertex(tx + 120, ty + 40); brush.vertex(tx + 40, ty + 100); brush.vertex(tx + 10, ty + 180); brush.vertex(tx + 60, ty + 150);
  brush.endShape(true);
  // a few smaller birches in the distance
  for (let i = 0; i < 4; i++) {
    let x = random(40, 200), y = random(300, 420);
    let s = random(0.4, 0.7);
    birch(x, y, tw * s, th * s, random(-10, 10));
    brush.fill("#bfe3f0", 170);
    brush.fillBleed(0.3);
    brush.beginShape(0.7);
    brush.vertex(x - 60 * s, y - 80 * s); brush.vertex(x - 30 * s, y - 150 * s); brush.vertex(x + 30 * s, y - 155 * s); brush.vertex(x + 60 * s, y - 85 * s); brush.vertex(x + 40 * s, y - 40 * s); brush.vertex(x - 40 * s, y + 10 * s);
    brush.endShape(true);
  }
  // a dark conifer
  brush.fill("#3a4a5a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(470, 440); brush.vertex(520, 440); brush.vertex(510, 320); brush.vertex(490, 200); brush.vertex(460, 200); brush.vertex(450, 320); brush.vertex(430, 440);
  brush.endShape(true);
  // sunlit dapples on the ground
  for (let i = 0; i < 30; i++) {
    brush.fill("#cfe8f0", 160);
    brush.fillBleed(0.25);
    brush.circle(random(200, 600), random(430, 620), random(10, 28), 0.3);
  }
}
