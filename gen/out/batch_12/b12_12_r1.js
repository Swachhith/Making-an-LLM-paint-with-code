async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f5f5");
  randomSeed(1203);
  brush.noStroke();
  // big cool sky, high horizon field below
  brush.fill("#aecbe0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  // blue hills far
  brush.fill("#8aa6c0", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 300); brush.vertex(120, 260); brush.vertex(300, 285); brush.vertex(470, 255); brush.vertex(620, 280); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  // field, stripes of mown grass receding
  brush.fill("#9ec2a2", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 305); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    let y = 340 + i * i * 12;
    brush.fill("#78a68a", 160);
    brush.fillBleed(0.3);
    brush.beginShape(0.5);
    brush.vertex(-20, y); brush.vertex(620, y - 10); brush.vertex(620, y + 6 + i * 6); brush.vertex(-20, y + 14 + i * 6);
    brush.endShape(true);
  }
  // the apple tree, far off but readable: gnarled trunk + wide crown, off-centre left
  let tx = 220, ty = 330;
  brush.fill("#5f5a60", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(tx - 9, ty); brush.vertex(tx + 9, ty); brush.vertex(tx + 6, ty - 30); brush.vertex(tx + 18, ty - 44); brush.vertex(tx - 16, ty - 46); brush.vertex(tx - 6, ty - 30);
  brush.endShape(true);
  for (let p = 0; p < 3; p++) {
    for (let j = 0; j < 4; j++) {
      brush.fill(["#8ab39c", "#5f9480", "#3e6e62"][p], 190);
      brush.fillBleed(0.3);
      brush.fillTexture(0.55, 0.55);
      brush.circle(tx + random(-38, 38) * (1 - p * 0.2), ty - 66 + random(-16, 14), random(22, 32) * (1 - p * 0.2), 0.8);
    }
  }
  for (let i = 0; i < 18; i++) {
    brush.fill("#d23c4c", 240);
    brush.fillBleed(0.05);
    brush.circle(tx + random(-50, 50), ty - 66 + random(-28, 26), random(3, 4.5), 0.2);
  }
  // windfall apples and shadow
  brush.fill("#6a8e98", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(tx - 50, ty + 2); brush.vertex(tx + 60, ty - 2); brush.vertex(tx + 55, ty + 14); brush.vertex(tx - 45, ty + 14);
  brush.endShape(true);
  for (let i = 0; i < 4; i++) {
    brush.fill("#c23a4a", 230);
    brush.fillBleed(0.05);
    brush.circle(tx + random(-40, 40), ty + random(4, 12), 2.5, 0.2);
  }
  // fence posts in the foreground for scale/distance
  for (let i = 0; i < 6; i++) {
    let x = 380 + i * 45, y = 540 - i * 12;
    brush.fill("#7c8894", 210);
    brush.fillBleed(0.15);
    brush.beginShape(0.1);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 8, y - 50 + i * 4); brush.vertex(x - 8, y - 50 + i * 4);
    brush.endShape(true);
  }
}
