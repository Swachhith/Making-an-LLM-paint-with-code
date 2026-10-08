async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f7");
  brush.noStroke();
  // cool light blue sky, a few high clouds
  brush.fill("#9fb7d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(450, 250); brush.vertex(320, 230); brush.vertex(150, 260); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#a7c3e2", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(250, 200); brush.vertex(380, 190); brush.vertex(470, 230); brush.vertex(360, 260); brush.vertex(260, 240);
  brush.endShape(true);
  // ground: cool slate
  brush.fill("#7a8f9c", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 420); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // birch: pale paper trunks, cool grey shadow on one side
  const trunks = [
    [330, 350, 100, 260],
    [420, 370, 90, 230],
    [220, 390, 95, 210],
    [140, 410, 85, 200],
    [490, 380, 85, 220]
  ];
  for (const [x, y, w, h] of trunks) {
    brush.fill("#eae8e2", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(x, y); brush.vertex(x + w, y); brush.vertex(x + w * 0.9, y + h); brush.vertex(x + w * 0.1, y + h);
    brush.endShape(true);
    brush.fill("#9aa3b0", 180);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(x + w * 0.2, y + h * 0.2); brush.vertex(x + w * 0.6, y + h * 0.2); brush.vertex(x + w * 0.6, y + h * 0.7); brush.vertex(x + w * 0.2, y + h * 0.7);
    brush.endShape(true);
  }
  // wide spreading crowns, pale blue-grey with darker cool shadow underneath
  for (const [x, y, w, h] of trunks) {
    const cx = x + w * 0.5, cy = y + h * 0.5;
    brush.fill("#cfd9e8", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy - h * 0.5);
    brush.vertex(cx + w * 0.6, cy - h * 0.3); brush.vertex(cx + w * 0.9, cy + 20); brush.vertex(cx + w * 0.5, cy + h * 0.3); brush.vertex(cx - w * 0.5, cy + h * 0.3); brush.vertex(cx - w * 0.9, cy + 20); brush.vertex(cx - w * 0.6, cy - h * 0.3);
    brush.endShape(true);
    brush.fill("#9fb7d4", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy + h * 0.5);
    brush.vertex(cx + w * 0.7, cy + h * 0.4); brush.vertex(cx + w * 0.9, cy + h * 0.7); brush.vertex(cx + w * 0.5, cy + h * 1.1); brush.vertex(cx - w * 0.5, cy + h * 1.1); brush.vertex(cx - w * 0.9, cy + h * 0.7); brush.vertex(cx - w * 0.7, cy + h * 0.4);
    brush.endShape(true);
  }
  // a few blue flowers on the ground
  brush.fill("#5a8fd8", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(120, 540, 12, 0.5);
  brush.circle(300, 530, 10, 0.5);
  brush.circle(520, 550, 11, 0.5);
  brush.circle(460, 520, 9, 0.5);
}
