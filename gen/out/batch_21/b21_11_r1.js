async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f0");
  randomSeed(517);
  brush.noStroke();

  // tall panel: a lake seen through a narrow upright frame
  brush.fill("#d4e1e6", 185);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(160, 20); brush.vertex(440, 20); brush.vertex(440, 580); brush.vertex(160, 580);
  brush.endShape(true);
  // pale sky tint at the top
  brush.fill("#bcd2de", 170);
  brush.beginShape(0.3);
  brush.vertex(160, 20); brush.vertex(440, 20); brush.vertex(440, 90); brush.vertex(160, 100);
  brush.endShape(true);
  // far wooded shore, high
  brush.fill("#8aa39c", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.7);
  brush.vertex(160, 118); brush.vertex(210, 96); brush.vertex(270, 110); brush.vertex(340, 88); brush.vertex(400, 104); brush.vertex(440, 96); brush.vertex(440, 132); brush.vertex(160, 134);
  brush.endShape(true);
  brush.fill("#9fb5b0", 165);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(160, 134); brush.vertex(440, 132); brush.vertex(440, 158); brush.vertex(340, 172); brush.vertex(270, 156); brush.vertex(210, 168); brush.vertex(160, 152);
  brush.endShape(true);
  // water deepening down the panel
  brush.fill("#9dbac8", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.4);
  brush.vertex(160, 240); brush.vertex(440, 230); brush.vertex(440, 580); brush.vertex(160, 580);
  brush.endShape(true);
  brush.fill("#6f96ad", 180);
  brush.beginShape(0.5);
  brush.vertex(160, 400); brush.vertex(440, 390); brush.vertex(440, 580); brush.vertex(160, 580);
  brush.endShape(true);
  // a few soft ripple marks, short and broken
  for (let i = 0; i < 8; i++) {
    let y = 200 + i * 44;
    let x = 180 + random(0, 160);
    brush.fill("#5f86a0", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.3);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 70, y - 2); brush.vertex(x + 64, y + 7); brush.vertex(x + 4, y + 8);
    brush.endShape(true);
  }
  // lily pads in the lower water
  let pads = [[250, 470], [290, 492], [340, 520], [220, 540]];
  for (let p of pads) {
    brush.fill("#6a8c62", 215);
    brush.fillBleed(0.2);
    brush.circle(p[0], p[1], 12, 0.3);
  }
  brush.fill("#f2eef0", 0);

  // reeds: curving tapered blades clustered at the lower left and right of the panel
  for (let i = 0; i < 16; i++) {
    let left = i < 9;
    let x = left ? random(160, 250) : random(350, 440);
    let top = random(40, 330);
    let bend = (left ? 1 : -1) * random(10, 50);
    let col = random(["#4f6e58", "#6d8456", "#3e5a4a", "#879660"]);
    brush.fill(col, random(195, 235));
    brush.fillBleed(0.18);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.7);
    brush.vertex(x - 9, 582);
    brush.vertex(x - 5 + bend * 0.2, lerp(582, top, 0.5));
    brush.vertex(x + bend, top);
    brush.vertex(x + 5 + bend * 0.25, lerp(582, top, 0.45));
    brush.vertex(x + 9, 582);
    brush.endShape(true);
  }
  // cattail heads on a few stems
  let heads = [[200, 120], [232, 190], [402, 96], [376, 170]];
  for (let h of heads) {
    brush.fill("#6b4630", 235);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(h[0] - 8, h[1]); brush.vertex(h[0] + 8, h[1]); brush.vertex(h[0] + 8, h[1] + 44); brush.vertex(h[0] - 8, h[1] + 44);
    brush.endShape(true);
  }
}
