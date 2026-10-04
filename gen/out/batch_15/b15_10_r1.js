async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1df");
  brush.noStroke();

  // warm apricot sky, deeper at the top right
  brush.fill("#f2b27a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(150, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 260);
  brush.vertex(380, 230);
  brush.vertex(300, 120);
  brush.endShape(true);
  brush.fill("#e8905a", 150);
  brush.circle(560, 40, 110, 0.5);
  brush.fill("#f6c890", 150);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(170, 0);
  brush.vertex(120, 160);
  brush.vertex(0, 300);
  brush.endShape(true);

  // the peak, large and left of centre; snowfield stays paper
  let peak = [[-30, 440], [60, 260], [140, 150], [215, 45], [280, 120], [350, 190], [440, 300], [600, 370], [600, 450]];
  brush.fill("#c47a52", 200);
  brush.fillBleed(0.22);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.15);
  for (let p of peak) brush.vertex(p[0], p[1] + (p[1] < 200 ? 60 : 0));
  brush.endShape(true);
  // shadow face on the right, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#6a3a40" : "#8e5048", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.15);
    brush.vertex(215 + pass * 10, 50 + pass * 30);
    brush.vertex(280, 120);
    brush.vertex(350, 190);
    brush.vertex(440, 300);
    brush.vertex(360, 410 - pass * 30);
    brush.vertex(250, 230);
    brush.endShape(true);
  }
  // rose shadow in the snowfield
  brush.fill("#d89890", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(215, 50);
  brush.vertex(255, 110);
  brush.vertex(240, 180);
  brush.vertex(222, 120);
  brush.endShape(true);
  // rock gullies
  for (let g of [[150, 220], [110, 280], [190, 260]]) {
    brush.fill("#8a4a38", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(g[0], g[1]);
    brush.vertex(g[0] + 18, g[1]);
    brush.vertex(g[0] - 10, g[1] + 90);
    brush.vertex(g[0] - 28, g[1] + 90);
    brush.endShape(true);
  }

  // warm golden meadow, two passes
  brush.fill("#d8b448", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(0, 430);
  brush.vertex(300, 410);
  brush.vertex(600, 430);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#8a9a38", 180);
  brush.beginShape(0.6);
  brush.vertex(0, 510);
  brush.vertex(260, 490);
  brush.vertex(600, 530);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // hut: timber walls, gable end, red roof, dark door
  brush.fill("#8a5e3e", 230);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(418, 470);
  brush.vertex(418, 432);
  brush.vertex(496, 432);
  brush.vertex(496, 472);
  brush.endShape(true);
  brush.fill("#5a3a24", 210);
  brush.beginShape(0);
  brush.vertex(418, 470);
  brush.vertex(418, 432);
  brush.vertex(440, 412);
  brush.vertex(462, 432);
  brush.vertex(462, 470);
  brush.endShape(true);
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#d02818", 235);
    brush.fillBleed(0.1);
    brush.beginShape(0);
    brush.vertex(436, 404);
    brush.vertex(490, 404);
    brush.vertex(506, 434);
    brush.vertex(458, 434);
    brush.endShape(true);
  }
  brush.fill("#2a1810", 230);
  brush.beginShape(0);
  brush.vertex(434, 470);
  brush.vertex(434, 445);
  brush.vertex(448, 445);
  brush.vertex(448, 470);
  brush.endShape(true);
  // path
  brush.fill("#b8905a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(438, 474);
  brush.vertex(456, 474);
  brush.vertex(330, 600);
  brush.vertex(270, 600);
  brush.endShape(true);
}
