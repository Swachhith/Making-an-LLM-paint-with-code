async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fef6e6");
  brush.noStroke();
  // warm sunlight wash from the right edge
  brush.fill("#f8d088", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(1);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(380, 620);
  brush.vertex(300, 300);
  brush.vertex(360, -20);
  brush.endShape(true);
  brush.fill("#f2e0b4", 170);
  brush.circle(120, 120, 140, 0.7);
  // stem arcs from the right edge low, up and over to the head hanging at upper left
  for (let pass = 0; pass < 2; pass++) {
    let w = pass ? 7 : 14;
    brush.fill(pass ? "#58781e" : "#8eaa3e", 220);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(1);
    brush.vertex(610, 520);
    brush.vertex(470, 300);
    brush.vertex(330, 170);
    brush.vertex(210, 170);
    brush.vertex(210, 170 + w * 2);
    brush.vertex(326, 170 + w * 2);
    brush.vertex(456, 306 + w);
    brush.vertex(610, 520 + w * 3);
    brush.endShape(true);
  }
  // two leaves as fat rounded ovals with a darker vein half
  let lv = [[470, 330, 30], [380, 230, -50]];
  for (let L of lv) {
    let x = L[0], y = L[1], a = L[2];
    let ux = cos(a), uy = sin(a), vx = -uy, vy = ux;
    brush.fill("#96b848", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + ux * 50 + vx * 45, y + uy * 50 + vy * 45);
    brush.vertex(x + ux * 120 + vx * 30, y + uy * 120 + vy * 30);
    brush.vertex(x + ux * 150, y + uy * 150);
    brush.vertex(x + ux * 110 - vx * 30, y + uy * 110 - vy * 30);
    brush.vertex(x + ux * 50 - vx * 40, y + uy * 50 - vy * 40);
    brush.endShape(true);
    brush.fill("#5e8228", 185);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + ux * 60 + vx * 36, y + uy * 60 + vy * 36);
    brush.vertex(x + ux * 130 + vx * 16, y + uy * 130 + vy * 16);
    brush.vertex(x + ux * 140, y + uy * 140);
    brush.endShape(true);
  }
  // the head hangs, facing down-left: petals as broad tongues
  let hx = 180, hy = 230;
  let tones = [["#fbd44a", 220, 132], ["#f4b020", 210, 108], ["#e08a10", 180, 80]];
  for (let t = 0; t < 3; t++) {
    for (let k = 0; k < 20; k++) {
      let a = k * 18 + t * 7;
      let r = tones[t][2];
      brush.fill(tones[t][0], tones[t][1]);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(hx + cos(a - 12) * 44, hy + sin(a - 12) * 50);
      brush.vertex(hx + cos(a - 6) * r, hy + sin(a - 6) * r * 1.1);
      brush.vertex(hx + cos(a + 6) * r, hy + sin(a + 6) * r * 1.1);
      brush.vertex(hx + cos(a + 12) * 44, hy + sin(a + 12) * 50);
      brush.endShape(true);
    }
  }
  brush.fill("#6e4210", 235);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.circle(hx, hy, 56, 0.25);
  brush.fill("#3e2206", 225);
  brush.circle(hx - 6, hy + 8, 40, 0.25);
  brush.fill("#b07420", 170);
  brush.circle(hx + 20, hy - 20, 14, 0.5);
}
