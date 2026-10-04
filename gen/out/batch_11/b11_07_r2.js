async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6e3");
  brush.noStroke();

  // huge bold sky: cobalt at top fading into warm yellow
  brush.fill("#1f4fbf", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#f6c343", 200);
  brush.beginShape(0.7);
  brush.vertex(-20, 280); brush.vertex(620, 240); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // a red-orange cloud streak
  brush.fill("#e2552b", 180);
  brush.beginShape(0.9);
  brush.vertex(40, 250); brush.vertex(260, 220); brush.vertex(420, 235); brush.vertex(300, 262); brush.vertex(80, 272);
  brush.endShape(true);

  // green field
  brush.fill("#3f8a2a", 220);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(250, 455); brush.vertex(620, 475); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1f5a1a", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 520); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // dirt path winding towards the mill
  brush.fill("#b8702a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(150, 480); brush.vertex(200, 480); brush.vertex(330, 560); brush.vertex(420, 620); brush.vertex(300, 620); brush.vertex(210, 540);
  brush.endShape(true);
  // bushes on the right
  brush.fill("#1f5a1a", 220);
  brush.circle(470, 470, 30, 0.7);
  brush.circle(510, 475, 24, 0.7);
  brush.circle(560, 468, 34, 0.7);
  // windmill on the left third
  const bx = 170;
  // tower: tapered, red
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#8e1c1c" : "#c8302a", p ? 210 : 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    if (p === 0) {
      brush.vertex(bx - 50, 480); brush.vertex(bx - 30, 330); brush.vertex(bx + 30, 330); brush.vertex(bx + 50, 480);
    } else {
      brush.vertex(bx + 10, 480); brush.vertex(bx + 18, 330); brush.vertex(bx + 30, 330); brush.vertex(bx + 50, 480);
    }
    brush.endShape(true);
  }
  // cap
  brush.fill("#3a1a10", 220);
  brush.beginShape(0.3);
  brush.vertex(bx - 36, 335); brush.vertex(bx - 20, 300); brush.vertex(bx + 20, 300); brush.vertex(bx + 36, 335);
  brush.endShape(true);
  // door
  brush.fill("#3a1a10", 210);
  brush.beginShape(0);
  brush.vertex(bx - 10, 480); brush.vertex(bx - 10, 448); brush.vertex(bx + 10, 448); brush.vertex(bx + 10, 480);
  brush.endShape(true);

  // four sails, an X around hub
  const hx = bx, hy = 312;
  const angs = [35, 125, 215, 305];
  for (const d of angs) {
    const a = d * Math.PI / 180;
    const ca = Math.cos(a), sa = Math.sin(a), px = -sa, py = ca;
    for (let p = 0; p < 3; p++) {
      brush.fill(p === 2 ? "#1a0c08" : "#4a2a18", 235);
      brush.fillBleed(0.1);
      brush.fillTexture(0.35, 0.35);
      brush.beginShape(0);
      brush.vertex(hx + ca * 15 - px * 8, hy + sa * 15 - py * 8);
      brush.vertex(hx + ca * 150 - px * 8, hy + sa * 150 - py * 8);
      brush.vertex(hx + ca * 150 + px * 34, hy + sa * 150 + py * 34);
      brush.vertex(hx + ca * 35 + px * 34, hy + sa * 35 + py * 34);
      brush.endShape(true);
    }
  }
  brush.fill("#1a0c08", 230);
  brush.circle(hx, hy, 9, 0.2);
}
