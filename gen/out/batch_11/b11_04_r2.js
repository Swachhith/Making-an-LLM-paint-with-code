async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4f2");
  brush.noStroke();

  // big pastel sky: soft blue with lilac, clouds left as paper
  brush.fill("#93b9e2", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.45);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(400, 230); brush.vertex(200, 270); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#c8b6e2", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 180); brush.vertex(300, 150); brush.vertex(620, 200); brush.vertex(620, 330); brush.vertex(-20, 330);
  brush.endShape(true);

  // row of townhouses, pushed to lower-right, tops at varying heights
  const houses = [
    { x: 230, w: 70, h: 190, c: "#f2a7b5", roof: "#c9707f" },
    { x: 300, w: 62, h: 215, c: "#f7d58f", roof: "#d4a24c" },
    { x: 362, w: 74, h: 180, c: "#9fd8c4", roof: "#5ea38c" },
    { x: 436, w: 66, h: 225, c: "#f6b99a", roof: "#d07f5c" },
    { x: 502, w: 72, h: 195, c: "#b8c4f0", roof: "#7684c4" },
    { x: 574, w: 60, h: 210, c: "#f4c2d8", roof: "#c7809f" }
  ];
  const ground = 520;
  for (const h of houses) {
    const top = ground - h.h;
    for (let p = 0; p < 2; p++) {
      brush.fill(h.c, p ? 230 : 210);
      brush.fillBleed(0.2);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.1);
      const inset = p * 8;
      brush.vertex(h.x + inset, ground); brush.vertex(h.x + inset, top + inset); brush.vertex(h.x + h.w / 2, top - 30 + inset); brush.vertex(h.x + h.w, top); brush.vertex(h.x + h.w, ground);
      brush.endShape(true);
    }
    // shaded right side
    brush.fill(h.roof, 150);
    brush.beginShape(0.1);
    brush.vertex(h.x + h.w - 16, ground); brush.vertex(h.x + h.w - 16, top + 4); brush.vertex(h.x + h.w, top); brush.vertex(h.x + h.w, ground);
    brush.endShape(true);
    // gable roof edge
    brush.fill(h.roof, 230);
    brush.beginShape(0.1);
    brush.vertex(h.x - 4, top + 8); brush.vertex(h.x + h.w / 2, top - 34); brush.vertex(h.x + h.w + 4, top + 8); brush.vertex(h.x + h.w - 12, top + 10); brush.vertex(h.x + h.w / 2, top - 14); brush.vertex(h.x + 12, top + 10);
    brush.endShape(true);
    // windows: two rows, painted as slightly darker tint
    brush.fill(h.roof, 215);
    for (let r = 0; r < 3; r++) {
      const wy = top + 30 + r * 50;
      if (wy > ground - 60) break;
      brush.beginShape(0);
      brush.vertex(h.x + 14, wy); brush.vertex(h.x + h.w - 14, wy); brush.vertex(h.x + h.w - 14, wy + 26); brush.vertex(h.x + 14, wy + 26);
      brush.endShape(true);
    }
    // door
    brush.fill(h.roof, 210);
    brush.beginShape(0);
    brush.vertex(h.x + h.w / 2 - 12, ground); brush.vertex(h.x + h.w / 2 - 12, ground - 40); brush.vertex(h.x + h.w / 2 + 12, ground - 40); brush.vertex(h.x + h.w / 2 + 12, ground);
    brush.endShape(true);
  }

  // a round pastel-green tree at the left end of the row
  brush.fill("#9ccf9a", 210);
  brush.fillBleed(0.3);
  brush.circle(175, 440, 55, 0.6);
  brush.fill("#6fae78", 200);
  brush.circle(185, 455, 34, 0.6);
  brush.fill("#8a6a5a", 210);
  brush.beginShape(0.2);
  brush.vertex(170, 520); brush.vertex(172, 470); brush.vertex(188, 470); brush.vertex(190, 520);
  brush.endShape(true);
  // cobbled street wash
  brush.fill("#c9bfae", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 515); brush.vertex(620, 515); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // soft shadow along base
  brush.fill("#9a8fb0", 170);
  brush.beginShape(0.6);
  brush.vertex(220, 512); brush.vertex(620, 512); brush.vertex(620, 540); brush.vertex(240, 545);
  brush.endShape(true);
}
