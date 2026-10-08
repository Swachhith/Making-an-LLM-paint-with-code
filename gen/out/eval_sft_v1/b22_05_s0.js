async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f4");
  brush.noStroke();
  // cool teal sky, indigo near the horizon
  brush.fill("#5fa6b8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(0, 220);
  brush.endShape(true);
  brush.fill("#4a6fa6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 300); brush.vertex(600, 320); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // indigo low on the horizon
  brush.fill("#2a3a5a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 500); brush.vertex(600, 490); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // pine trees, left side
  const trees = [
    [30, 420, 45, 250], [60, 430, 50, 220], [90, 445, 48, 190],
    [130, 410, 52, 250], [165, 425, 46, 230], [200, 435, 50, 210],
    [240, 405, 54, 260], [280, 420, 48, 235], [320, 440, 50, 200],
    [360, 415, 52, 255], [400, 430, 48, 230], [440, 450, 50, 190],
    [485, 425, 54, 260], [525, 440, 46, 235], [565, 455, 50, 200]
  ];
  for (const [x, y, w, h] of trees) {
    brush.fill("#1a2a4a", 220);
    brush.fillBleed(0.22);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.3);
    brush.vertex(x, y + h); brush.vertex(x + w / 2, y); brush.vertex(x + w, y + h);
    brush.endShape(true);
  }
  // a few snow-capped pines on the right
  brush.fill("#1a2a4a", 220);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.3);
  brush.vertex(500, 520); brush.vertex(530, 350); brush.vertex(560, 520);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(540, 530); brush.vertex(570, 370); brush.vertex(600, 530);
  brush.endShape(true);
  // crescent moon, large and off-centre: upper right
  brush.fill("#f6efe1", 250);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.circle(490, 170, 100, 0.15);
  brush.fill("#c8b8c8", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(490, 170, 80, 0.15);
  // the crescent
  brush.fill("#e8d8e8", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.7);
  brush.vertex(410, 170); brush.vertex(490, 170); brush.vertex(555, 140); brush.vertex(555, 170); brush.vertex(490, 170); brush.vertex(410, 170);
  brush.endShape(true);
  // a faint halo
  brush.fill("#b8c8d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(490, 170, 130, 0.3);
  // a couple stars
  brush.fill("#f0e8f0", 240);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.circle(220, 90, 2, 0.1); brush.circle(320, 130, 2, 0.1); brush.circle(55, 250, 2, 0.1);
}
