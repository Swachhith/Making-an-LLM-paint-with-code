async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe6");
  randomSeed(1000);
  brush.noStroke();

  // warm earthy ground wash
  brush.fill("#d8c2a3", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 470); brush.vertex(600, 440); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stems
  brush.fill("#7a5a3a", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(240, 520); brush.vertex(242, 300); brush.vertex(258, 300); brush.vertex(256, 520);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(420, 520); brush.vertex(418, 420); brush.vertex(436, 420); brush.vertex(434, 520);
  brush.endShape(true);

  // leaves
  brush.fill("#5a6a4a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(238, 420); brush.vertex(300, 380); brush.vertex(360, 430); brush.vertex(300, 470);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(430, 430); brush.vertex(520, 390); brush.vertex(580, 440); brush.vertex(480, 480);
  brush.endShape(true);

  // ranunculus 1: upper left, tilted back
  const cx1 = 180, cy1 = 180;
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(pass ? "#d4c860" : "#e6d65a", pass ? 220 : 190);
    brush.fillBleed(pass ? 0.18 : 0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.9);
    const r = pass ? 115 : 145;
    for (let i = 0; i < 14; i++) {
      const a = i * 25.7 + pass * 12;
      const p = pass ? 0.92 : 0.98;
      brush.vertex(cx1 + cos(a) * r * p, cy1 + sin(a) * r * p);
    }
    brush.endShape(true);
    brush.fill("#b8a43e", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    for (let i = 0; i < 12; i++) {
      const a = i * 30 + 180;
      const r = pass ? 70 : 88;
      brush.vertex(cx1 + cos(a) * r, cy1 + sin(a) * r);
    }
    brush.endShape(true);
  }
  // darker centre
  brush.fill("#7a6a30", 210);
  brush.fillBleed(0.15);
  brush.circle(cx1, cy1, 32, 0.2);

  // ranunculus 2: lower right, facing forward
  const cx2 = 460, cy2 = 420;
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(pass ? "#c8b848" : "#d2c250", pass ? 220 : 190);
    brush.fillBleed(pass ? 0.18 : 0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.9);
    const r = pass ? 100 : 130;
    for (let i = 0; i < 14; i++) {
      const a = i * 25.7 + pass * 12;
      const p = pass ? 0.92 : 0.98;
      brush.vertex(cx2 + cos(a) * r * p, cy2 + sin(a) * r * p);
    }
    brush.endShape(true);
    brush.fill("#9a8432", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    for (let i = 0; i < 12; i++) {
      const a = i * 30 + 180;
      const r = pass ? 60 : 78;
      brush.vertex(cx2 + cos(a) * r, cy2 + sin(a) * r);
    }
    brush.endShape(true);
  }
  brush.fill("#5a4a28", 210);
  brush.fillBleed(0.15);
  brush.circle(cx2, cy2, 28, 0.2);

  // a few stray petals
  brush.fill("#d4c860", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 200, 18, 0.6);
  brush.circle(520, 330, 14, 0.6);
  brush.circle(120, 470, 12, 0.6);
}
