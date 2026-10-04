async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f5");
  randomSeed(7);
  brush.noStroke();
  // cool pale sky
  brush.fill("#a9c6dc", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  // smoke plume drifting right
  let px = 250, py = 330;
  for (let i = 0; i < 11; i++) {
    let t = i / 10;
    let x = px + t * t * 300 + random(-15, 15);
    let y = py - t * 260 + random(-10, 10);
    brush.fill(i % 2 ? "#8c96a6" : "#b3bac6", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x, y, 25 + t * 70, 0.9);
  }
  brush.fill("#6b7485", 180);
  brush.fillBleed(0.3);
  brush.circle(px + 10, py - 50, 30, 0.8);
  // distant range
  brush.fill("#8aa3bd", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(60, 420); brush.vertex(120, 435); brush.vertex(480, 430);
  brush.vertex(560, 415); brush.vertex(620, 430); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // volcano cone
  brush.fill("#5f7894", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.15);
  brush.vertex(40, 470); brush.vertex(220, 340); brush.vertex(280, 335); brush.vertex(470, 470);
  brush.endShape(true);
  brush.fill("#3e5470", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(250, 340); brush.vertex(280, 336); brush.vertex(470, 470); brush.vertex(330, 470);
  brush.endShape(true);
  // snow streaks left as paper: nothing painted at top
  // low foreground plain
  brush.fill("#7f9aa0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 465); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#56727a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(300, 525); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
