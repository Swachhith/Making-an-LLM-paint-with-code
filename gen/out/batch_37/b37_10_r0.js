async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f0ec");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#f0d0d8", 150);
  brush.circle(300, 280, 260, 0.9);
  brush.fill("#6a9a68", 220);
  brush.beginShape(0.6);
  brush.vertex(285, 340); brush.vertex(325, 340); brush.vertex(335, 600); brush.vertex(280, 600);
  brush.endShape(true);
  brush.fill("#88b080", 190);
  brush.beginShape(0.8);
  brush.vertex(290, 560); brush.vertex(150, 470); brush.vertex(110, 520); brush.vertex(250, 600);
  brush.endShape(true);
  const petals = [[-130, -60, 60], [130, -60, 120], [-60, 50, 200], [90, 50, 160]];
  for (let p = 0; p < petals.length; p++) {
    const dx = petals[p][0], dy = petals[p][1];
    brush.fill("#e87088", 190);
    brush.beginShape(0.8);
    brush.vertex(300, 320); brush.vertex(300 + dx * 0.5, 320 + dy - 60); brush.vertex(300 + dx * 1.2, 320 + dy); brush.vertex(300 + dx * 0.6, 320 + dy + 60);
    brush.endShape(true);
    brush.fill("#d03a58", 170);
    brush.beginShape(0.8);
    brush.vertex(300, 320); brush.vertex(300 + dx * 0.4, 320 + dy - 30); brush.vertex(300 + dx * 0.9, 320 + dy); brush.vertex(300 + dx * 0.5, 320 + dy + 35);
    brush.endShape(true);
  }
  brush.fill("#f4c868", 200);
  brush.circle(300, 322, 14, 0.6);
  brush.fill("#98b898", 190);
  brush.beginShape(0.6);
  brush.vertex(360, 400); brush.vertex(480, 350); brush.vertex(500, 400); brush.vertex(370, 450);
  brush.endShape(true);
}
