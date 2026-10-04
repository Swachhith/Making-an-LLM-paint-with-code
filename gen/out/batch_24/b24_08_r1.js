async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f4f6");

  brush.noStroke();
  brush.fill("#a8c8ec", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 230);
  brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#f4c0d0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 160);
  brush.vertex(300, 140);
  brush.vertex(620, 170);
  brush.vertex(620, 260);
  brush.vertex(-20, 260);
  brush.endShape(true);

  brush.fill("#b6a6dc", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 280);
  brush.vertex(120, 215);
  brush.vertex(260, 255);
  brush.vertex(420, 200);
  brush.vertex(620, 245);
  brush.vertex(620, 330);
  brush.vertex(-20, 330);
  brush.endShape(true);

  brush.fill("#b2d9a4", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 320);
  brush.vertex(200, 300);
  brush.vertex(420, 312);
  brush.vertex(620, 295);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#96c88a", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 440);
  brush.vertex(250, 400);
  brush.vertex(620, 430);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f0d8a0", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 530);
  brush.vertex(300, 500);
  brush.vertex(620, 540);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let cols = ["#ef8aa4", "#f7c070", "#7cc0dc", "#b08ce0", "#f59c6c", "#86d0a8", "#f0d060"];
  let x = 215;
  let base = 322;
  for (let i = 0; i < cols.length; i++) {
    let w = 26 + (i % 3) * 3;
    let h = 44 + (i % 2) * 12;
    for (let p = 0; p < 2; p++) {
      brush.fill(cols[i], 230);
      brush.fillBleed(0.12);
      brush.fillTexture(0.35, 0.3);
      brush.beginShape(0);
      brush.vertex(x, base);
      brush.vertex(x, base - h);
      brush.vertex(x + w, base - h);
      brush.vertex(x + w, base);
      brush.endShape(true);
    }
    brush.fill("#9a6a8a", 220);
    brush.fillBleed(0.1);
    brush.beginShape(0);
    brush.vertex(x - 2, base - h);
    brush.vertex(x + w / 2, base - h - 16);
    brush.vertex(x + w + 2, base - h);
    brush.endShape(true);
    brush.fill("#6a5a8a", 200);
    brush.circle(x + w / 2, base - h * 0.6, 3.5, 0.2);
    brush.circle(x + w / 2, base - h * 0.25, 3.5, 0.2);
    x += w;
  }
  brush.fill("#6aa870", 200);
  brush.fillBleed(0.3);
  brush.circle(200, 312, 18, 0.6);
  brush.circle(x + 16, 310, 20, 0.6);
  brush.fill("#a8b0d8", 150);
  brush.beginShape(0.5);
  brush.vertex(210, 322);
  brush.vertex(x + 5, 322);
  brush.vertex(x, 338);
  brush.vertex(215, 338);
  brush.endShape(true);
}
