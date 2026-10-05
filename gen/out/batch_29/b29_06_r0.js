async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d6");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.fill("#d8a070", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#c87a58", 170);
  brush.beginShape(0.6);
  brush.vertex(0, 160); brush.vertex(600, 190); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#8a7a8a", 150);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 80); brush.vertex(0, 70);
  brush.endShape(true);
  // mountain
  brush.fill("#8a4a3a", 220);
  brush.beginShape(0.35);
  brush.vertex(70, 300); brush.vertex(190, 190); brush.vertex(270, 100); brush.vertex(330, 150); brush.vertex(430, 210); brush.vertex(540, 300);
  brush.endShape(true);
  brush.fill("#5a3a3a", 210);
  brush.beginShape(0.35);
  brush.vertex(270, 100); brush.vertex(330, 150); brush.vertex(430, 210); brush.vertex(540, 300); brush.vertex(330, 300);
  brush.endShape(true);
  brush.fill("#b8683a", 150);
  brush.beginShape(0.4);
  brush.vertex(120, 300); brush.vertex(200, 215); brush.vertex(262, 130); brush.vertex(250, 300);
  brush.endShape(true);
  // ground band
  brush.fill("#6a5a3a", 200);
  brush.beginShape(0.5);
  brush.vertex(0, 290); brush.vertex(600, 290); brush.vertex(600, 318); brush.vertex(0, 318);
  brush.endShape(true);
  // reflection (water): flipped
  brush.fill("#a88a78", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 318); brush.vertex(600, 318); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#8a4a3a", 190);
  brush.beginShape(0.5);
  brush.vertex(70, 322); brush.vertex(190, 430); brush.vertex(270, 520); brush.vertex(330, 470); brush.vertex(430, 410); brush.vertex(540, 322);
  brush.endShape(true);
  brush.fill("#5a3a3a", 180);
  brush.beginShape(0.5);
  brush.vertex(270, 520); brush.vertex(330, 470); brush.vertex(430, 410); brush.vertex(540, 322); brush.vertex(330, 322);
  brush.endShape(true);
  brush.fill("#d8a070", 160);
  for (let i = 0; i < 6; i++) {
    brush.beginShape(0.3);
    brush.vertex(40 + i * 20, 350 + i * 40); brush.vertex(560 - i * 30, 355 + i * 40); brush.vertex(550 - i * 30, 372 + i * 40); brush.vertex(50 + i * 20, 368 + i * 40);
    brush.endShape(true);
  }
}
