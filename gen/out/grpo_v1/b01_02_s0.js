async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e0cc");
  brush.noStroke();

  // soft earthy ground
  brush.fill("#b8a88a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 470); brush.vertex(600, 470); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stems
  brush.fill("#6f7a5a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(230, 420); brush.vertex(230, 600); brush.vertex(260, 600); brush.vertex(260, 420);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(420, 370); brush.vertex(420, 600); brush.vertex(455, 600); brush.vertex(455, 370);
  brush.endShape(true);

  // front bloom, open cup
  let cx = 230, cy = 260;
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#e8d67a", pass == 0 ? 190 : 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    for (let i = 0; i < 18; i++) {
      let a = i * 20 + pass * 4;
      let r = pass == 0 ? 100 : 80;
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    }
    brush.endShape(true);
  }
  // darker throat
  brush.fill("#b8a038", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  for (let i = 0; i < 16; i++) {
    let a = i * 22.5;
    brush.vertex(cx + cos(a) * 50, cy + sin(a) * 50);
  }
  brush.endShape(true);

  // back bloom, side view
  brush.fill("#d4c470", 185);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  for (let i = 0; i < 18; i++) {
    let a = i * 20 - 25;
    let r = 75;
    brush.vertex(420 + cos(a) * r, 370 + sin(a) * r);
  }
  brush.endShape(true);
  brush.fill("#b8a038", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  for (let i = 0; i < 16; i++) {
    let a = i * 22.5 - 25;
    brush.vertex(420 + cos(a) * 45, 370 + sin(a) * 45);
  }
  brush.endShape(true);

  // loose petals left as paper
  brush.fill("#f0e8c0", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(380, 300); brush.vertex(450, 310); brush.vertex(420, 370); brush.vertex(340, 360);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(170, 330); brush.vertex(100, 320); brush.vertex(130, 270); brush.vertex(210, 280);
  brush.endShape(true);
}
