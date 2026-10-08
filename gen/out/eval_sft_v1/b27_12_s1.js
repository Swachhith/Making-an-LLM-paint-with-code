async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f3f0");
  brush.noStroke();
  // misty sky: pale lavender over a darker blue
  brush.fill("#d6cfe8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 230); brush.vertex(-20, 210);
  brush.endShape(true);
  brush.fill("#9fa6c4", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 210); brush.vertex(620, 210); brush.vertex(620, 360); brush.vertex(-20, 370);
  brush.endShape(true);
  // far shore: a soft green hill behind the trees
  brush.fill("#8faa8a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 370); brush.vertex(200, 350); brush.vertex(420, 375); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // reeds on the far shore: tall thin strokes
  for (let i = 0; i < 20; i++) {
    const x = 200 + i * 18;
    const h = 80 + (i % 3) * 20;
    brush.fill("#5a7a5a", 180);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(x, 375); brush.vertex(x + 6, 375 - h); brush.vertex(x + 12, 375 - h * 0.45); brush.vertex(x + 6, 375 - h * 0.7); brush.vertex(x, 375);
    brush.endShape(true);
    brush.beginShape(0.2);
    brush.vertex(x - 6, 375); brush.vertex(x - 12, 375 - h); brush.vertex(x - 8, 375 - h * 0.45); brush.vertex(x - 2, 375 - h * 0.7); brush.vertex(x, 375);
    brush.endShape(true);
  }
  // mid shore: a row of soft willow-like trees
  for (let i = 0; i < 10; i++) {
    const x = 20 + i * 70;
    brush.fill("#6f8a6f", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(x, 380); brush.vertex(x + 12, 200 - i * 10); brush.vertex(x + 26, 210 + i * 5); brush.vertex(x, 225 + i * 5);
    brush.endShape(true);
    // drooping branches
    for (let p = 0; p < 3; p++) {
      const y = 215 + p * 15;
      brush.fill("#5a705a", 170);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(x + 12, y); brush.vertex(x + 30 + p * 12, y + 20 + p * 8); brush.vertex(x + 42, y + 18 + p * 6); brush.vertex(x + 30, y + 22 + p * 10); brush.vertex(x + 12, y + 20 + p * 8);
      brush.endShape(true);
    }
  }
  // lake: pale blue-grey with soft ripples
  brush.fill("#a8b8c4", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 370); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 12; i++) {
    const y = 390 + i * 35;
    const w = 120 + (i % 3) * 30;
    brush.fill("#8fa8b8", 150);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-20, y); brush.vertex(20, y + 3); brush.vertex(w, y + 5); brush.vertex(w - 2, y + 3); brush.vertex(-20, y + 2);
    brush.endShape(true);
  }
  // reeds in the foreground: long soft strokes reaching up
  for (let i = 0; i < 14; i++) {
    const x = 20 + i * 45;
    const h = 150 + (i % 2) * 20;
    brush.fill("#7a8a7a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x, 620); brush.vertex(x + 8, 620 - h); brush.vertex(x + 14, 620 - h * 0.5); brush.vertex(x + 8, 620 - h * 0.7); brush.vertex(x, 620);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(x - 8, 620); brush.vertex(x - 14, 620 - h); brush.vertex(x - 10, 620 - h * 0.5); brush.vertex(x - 4, 620 - h * 0.7); brush.vertex(x, 620);
    brush.endShape(true);
  }
  // a small dark island
  brush.fill("#5a6a5a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(470, 440, 28, 0.3);
  // a single white reed flower head
  brush.fill("#f2f0e8", 250);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(474, 432, 7, 0.2);
  // reflection of the island
  brush.fill("#6f8070", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(460, 570); brush.vertex(485, 570); brush.vertex(485, 585); brush.vertex(460, 585);
  brush.endShape(true);
}
