async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121628");
  randomSeed(1101);

  // sky: teal top fading to indigo
  brush.noStroke();
  brush.fill("#3f8a8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#6a7fb0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 260); brush.vertex(620, 260); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);

  // full moon, paper left, ring of indigo halo
  brush.fill("#1a2a5a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 140, 105, 0.5);
  brush.fill("#1a2a5a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 140, 92, 0.5);
  brush.fill("#1a2a5a", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 140, 78, 0.5);

  // sea: deep indigo, rippled with teal
  brush.fill("#161a30", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 460); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 8; i++) {
    let y = 460 + i * 20;
    brush.fill("#2a5a7a", 170);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-20, y + 3); brush.vertex(620, y + 3); brush.vertex(620, y + 18);
    brush.vertex(420 + i * 10, y + 28); brush.vertex(220 + i * 10, y + 16); brush.vertex(-20, y + 18);
    brush.endShape(true);
  }
  // moonlit glint on water
  brush.fill("#8aa0c8", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 475, 22, 0.3);
  brush.circle(300, 490, 14, 0.3);
  brush.circle(300, 505, 8, 0.3);
  // a few stars
  for (let i = 0; i < 14; i++) {
    brush.fill("#f0f0f0", 180);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(random(620), random(260), random(1.2, 2.2), 0.2);
  }
}
