async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();

  // sky: deep indigo, then teal, then turquoise
  brush.fill("#3a2a8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(-20, 170);
  brush.endShape(true);
  brush.fill("#1f8a9a", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 130); brush.vertex(620, 110); brush.vertex(620, 260); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#2fb0c8", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, 230); brush.vertex(620, 210); brush.vertex(620, 340); brush.vertex(-20, 360);
  brush.endShape(true);

  // valley floor: a ribbon of burnt orange
  brush.fill("#e06020", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 360); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // far hills, layered
  brush.fill("#b83a1a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 340); brush.vertex(150, 300); brush.vertex(300, 330); brush.vertex(470, 290); brush.vertex(620, 330); brush.vertex(620, 370); brush.vertex(-20, 370);
  brush.endShape(true);
  brush.fill("#8a2010", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 360); brush.vertex(300, 340); brush.vertex(620, 360); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);

  // near ridge, bold ochre
  brush.fill("#d98a1a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 365); brush.vertex(150, 340); brush.vertex(300, 360); brush.vertex(470, 330); brush.vertex(620, 350); brush.vertex(620, 380); brush.vertex(-20, 380);
  brush.endShape(true);

  // pine trees along the ridge, right side
  let trees = [[520, 360, 15, 170], [550, 355, 14, 180], [580, 362, 16, 165], [610, 350, 13, 190]];
  for (let t of trees) {
    let [x, y, w, h] = t;
    brush.fill("#1a4a2a", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - w, y); brush.vertex(x + w, y); brush.vertex(x + w * 0.6, y + h * 0.3); brush.vertex(x + w * 0.3, y + h * 0.6); brush.vertex(x, y + h); brush.vertex(x - w * 0.3, y + h * 0.6); brush.vertex(x - w * 0.6, y + h * 0.3);
    brush.endShape(true);
  }

  // a figure walking the path
  brush.fill("#2a1a3a", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(470, 420, 7, 0.3);
  brush.circle(470, 435, 5, 0.3);
  brush.circle(470, 448, 5, 0.3);
}
