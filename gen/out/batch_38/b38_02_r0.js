async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4eee4");
  brush.noStroke();
  // wash behind
  brush.fill("#e8b86a", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(60,80); brush.vertex(540,60); brush.vertex(560,540); brush.vertex(80,560); brush.endShape(true);
  // stem dark
  brush.fill("#2a1c18", 220); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(290,120); brush.vertex(315,120); brush.vertex(330,570); brush.vertex(285,570); brush.endShape(true);
  // open bloom (left), petals in orange-red
  const cx = 220, cy = 330;
  for (let k = 0; k < 5; k++) {
    const a = k * 72 - 90;
    const px = cx + 55 * Math.cos(a * Math.PI / 180), py = cy + 55 * Math.sin(a * Math.PI / 180);
    brush.fill("#d4501f", 190); brush.fillBleed(0.3);
    brush.circle(px, py, 42, 0.7);
    brush.fill("#b02e14", 170);
    brush.circle(px * 0.5 + cx * 0.5, py * 0.5 + cy * 0.5, 26, 0.6);
  }
  brush.fill("#2a1c18", 230); brush.circle(cx, cy, 16, 0.4);
  brush.fill("#e8a12a", 220); brush.circle(cx, cy - 4, 8, 0.4);
  // closed bud (right)
  brush.fill("#d4501f", 200); brush.fillBleed(0.25);
  brush.beginShape(0.7); brush.vertex(385,300); brush.vertex(430,320); brush.vertex(425,400); brush.vertex(400,430); brush.vertex(375,390); brush.endShape(true);
  brush.fill("#8e2410", 180);
  brush.beginShape(0.7); brush.vertex(395,330); brush.vertex(420,340); brush.vertex(412,405); brush.vertex(398,390); brush.endShape(true);
  // side stalk leading to bud
  brush.fill("#2a1c18", 200);
  brush.beginShape(0.3); brush.vertex(310,470); brush.vertex(330,470); brush.vertex(410,425); brush.vertex(400,400); brush.endShape(true);
  // buds up top
  brush.fill("#e8a12a", 200);
  brush.circle(300, 150, 22, 0.6); brush.circle(310, 110, 16, 0.6);
}
