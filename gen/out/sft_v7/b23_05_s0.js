async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f4f6");
  randomSeed(2401);
  brush.noStroke();

  // cool sky wash, left and right
  brush.fill("#b9c8d8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#9fb8d8", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 230); brush.vertex(620, 220); brush.vertex(620, 360); brush.vertex(-20, 370);
  brush.endShape(true);

  // ground: cool grey-blue, lower half
  brush.fill("#a9b8c6", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8aa0b0", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // one wide pass of pale grey-green for the birch's shadow side
  brush.fill("#9fb8c8", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(240, 320); brush.vertex(310, 250); brush.vertex(380, 300); brush.vertex(420, 330); brush.vertex(350, 380);
  brush.endShape(true);

  // trunks: two passes, dark olive-brown
  let trunk = [
    { x: 250, y: 310, w: 60, h: 320, tilt: 0 },
    { x: 330, y: 280, w: 42, h: 360, tilt: 0 },
    { x: 400, y: 330, w: 52, h: 300, tilt: 0 },
    { x: 210, y: 350, w: 36, h: 270, tilt: 0 }
  ];
  for (let pass = 0; pass < 2; pass++) {
    for (let t of trunk) {
      brush.fill(pass ? "#5c634a" : "#4a523a", 230);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.2);
      brush.vertex(t.x - t.w * 0.6, t.y);
      brush.vertex(t.x - t.w * 0.2, t.y - t.h * 0.3);
      brush.vertex(t.x + t.w * 0.2, t.y - t.h * 0.3);
      brush.vertex(t.x + t.w * 0.6, t.y);
      brush.vertex(t.x + t.w * 0.8, t.y + t.h);
      brush.vertex(t.x - t.w * 0.8, t.y + t.h);
      brush.endShape(true);
    }
  }

  // crown: rounded lobes, three passes each, paper left as white
  let lobes = [
    { cx: 250, cy: 240, r: 150 }, { cx: 330, cy: 210, r: 120 }, { cx: 400, cy: 250, r: 130 },
    { cx: 210, cy: 300, r: 100 }, { cx: 300, cy: 180, r: 140 }, { cx: 390, cy: 230, r: 110 }
  ];
  for (let l of lobes) {
    for (let pass = 0; pass < 3; pass++) {
      brush.fill(pass ? "#8fa3b0" : "#b4c8d4", 210);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(l.cx, l.cy, l.r * 0.85, 0.5);
    }
  }
  // shadow under the crown
  brush.fill("#7c8a9a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 300, 170, 0.5);
}
