async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e9c9");
  brush.noStroke();

  // sky: deep orange at the top, fading to warm pink and a pale gold near the horizon
  brush.fill("#d85a2a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#f28a4a", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 180); brush.vertex(620, 170); brush.vertex(620, 330); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#ffc88a", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 330); brush.vertex(620, 320); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);

  // sun disc, lower right, not a perfect circle
  brush.fill("#ff9a3a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(460, 370, 45, 0.3);
  brush.fill("#ffcc6a", 200);
  brush.circle(460, 370, 32, 0.3);

  // palm fronds as dark silhouettes against the sky
  let palms = [
    { x: 100, y: 460, up: 180 },
    { x: 210, y: 450, up: 190 },
    { x: 320, y: 455, up: 185 },
    { x: 430, y: 440, up: 195 },
    { x: 540, y: 465, up: 180 }
  ];
  for (let p of palms) {
    brush.fill("#141424", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.6);
    brush.vertex(p.x, p.y);
    brush.vertex(p.x + 14, p.y - 20);
    brush.vertex(p.x + 28, p.y - 36);
    brush.vertex(p.x + 34, p.y - 42);
    brush.vertex(p.x + 22, p.y - 52);
    brush.vertex(p.x + 10, p.y - 40);
    brush.vertex(p.x - 6, p.y - 48);
    brush.vertex(p.x - 16, p.y - 38);
    brush.vertex(p.x - 22, p.y - 30);
    brush.vertex(p.x - 14, p.y - 22);
    brush.vertex(p.x + 2, p.y - 12);
    brush.endShape(true);
  }
  // trunks
  brush.fill("#141424", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(92, 460); brush.vertex(96, 620); brush.vertex(100, 620); brush.vertex(104, 460);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(202, 450); brush.vertex(204, 620); brush.vertex(208, 620); brush.vertex(210, 450);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(312, 455); brush.vertex(314, 620); brush.vertex(318, 620); brush.vertex(320, 455);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(422, 440); brush.vertex(424, 620); brush.vertex(428, 620); brush.vertex(430, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(532, 465); brush.vertex(534, 620); brush.vertex(538, 620); brush.vertex(540, 465);
  brush.endShape(true);
}
