async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffaf0");
  brush.noStroke();

  // deep cobalt sky, painted around the chapel shape
  brush.fill("#1a46b0", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.05);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(520, 420);
  brush.vertex(520, 250); brush.vertex(330, 150); brush.vertex(330, 60); brush.vertex(300, 20); brush.vertex(270, 60); brush.vertex(270, 150);
  brush.vertex(80, 250); brush.vertex(80, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#0e2d7e", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(340, 70); brush.vertex(260, 70); brush.vertex(-20, 110);
  brush.endShape(true);

  // bold green hill
  brush.fill("#2f9a3c", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 430); brush.vertex(80, 440); brush.vertex(520, 430); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#177030", 210);
  brush.beginShape(0.6);
  brush.vertex(-20, 520); brush.vertex(300, 490); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // poppies in the grass
  let pops = [[60, 560], [110, 590], [470, 575], [520, 555], [560, 590], [30, 600]];
  for (let p of pops) {
    brush.fill("#e82b1c", 235);
    brush.fillBleed(0.15);
    brush.circle(p[0], p[1], 7, 0.5);
  }

  // chapel is white paper; violet shadows give it form
  // shadowed right side of the nave
  brush.fill("#8a6ac8", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(420, 250); brush.vertex(520, 250); brush.vertex(520, 440); brush.vertex(420, 440);
  brush.endShape(true);
  // red tiled roof over the nave
  brush.fill("#d8341e", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.05);
  brush.vertex(70, 256); brush.vertex(270, 150); brush.vertex(330, 150); brush.vertex(530, 256); brush.vertex(530, 270); brush.vertex(70, 270);
  brush.endShape(true);
  // bell tower shadow side, bell opening, cross
  brush.fill("#8a6ac8", 180);
  brush.beginShape(0.05);
  brush.vertex(305, 60); brush.vertex(330, 60); brush.vertex(330, 150); brush.vertex(305, 150);
  brush.endShape(true);
  brush.fill("#2a1f4a", 230);
  brush.beginShape(0.3);
  brush.vertex(285, 85); brush.vertex(315, 85); brush.vertex(315, 125); brush.vertex(285, 125);
  brush.endShape(true);
  brush.fill("#e8b21a", 235);
  brush.circle(300, 105, 7, 0.3);
  brush.fill("#2a1f4a", 230);
  brush.beginShape(0);
  brush.vertex(295, 0); brush.vertex(305, 0); brush.vertex(305, 30); brush.vertex(295, 30);
  brush.endShape(true);
  // arched door and windows
  brush.fill("#1e5fbf", 235);
  brush.fillBleed(0.15);
  brush.beginShape(0.5);
  brush.vertex(270, 440); brush.vertex(270, 360); brush.vertex(300, 330); brush.vertex(330, 360); brush.vertex(330, 440);
  brush.endShape(true);
  let ws = [140, 440];
  for (let x of ws) {
    brush.fill("#1e5fbf", 225);
    brush.beginShape(0.5);
    brush.vertex(x - 16, 380); brush.vertex(x - 16, 320); brush.vertex(x, 300); brush.vertex(x + 16, 320); brush.vertex(x + 16, 380);
    brush.endShape(true);
  }
  // cast shadow on the grass
  brush.fill("#135a26", 200);
  brush.beginShape(0.5);
  brush.vertex(520, 440); brush.vertex(620, 430); brush.vertex(620, 470); brush.vertex(520, 462);
  brush.endShape(true);
}
