async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f3");
  brush.noStroke();

  // wide cool sky with a streak of cloud left as paper
  brush.fill("#a8c7da", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(300, 140); brush.vertex(-20, 120);
  brush.endShape(true);
  brush.fill("#c3d8e3", 170);
  brush.beginShape(0.3);
  brush.vertex(-20, 160); brush.vertex(300, 175); brush.vertex(620, 150); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // sea
  brush.fill("#4f86a6", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.1);
  brush.vertex(-20, 290); brush.vertex(620, 285); brush.vertex(620, 370); brush.vertex(-20, 385);
  brush.endShape(true);
  brush.fill("#3e7894", 170);
  brush.beginShape(0.2);
  brush.vertex(-20, 290); brush.vertex(620, 285); brush.vertex(620, 310); brush.vertex(-20, 318);
  brush.endShape(true);

  // wet sand, cool grey-lilac
  brush.fill("#b7b8c8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 370); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // dunes with grass
  brush.fill("#9fae94", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(120, 470); brush.vertex(240, 520); brush.vertex(400, 540);
  brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // small woman, right third, standing at the water's edge
  const fx = 430, fy = 400;
  // dress
  brush.fill("#1f4a7a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(fx - 7, fy - 30); brush.vertex(fx + 7, fy - 30); brush.vertex(fx + 16, fy + 8); brush.vertex(fx - 16, fy + 8);
  brush.endShape(true);
  // legs
  brush.fill("#6f5347", 210);
  brush.beginShape(0.2);
  brush.vertex(fx - 8, fy + 6); brush.vertex(fx + 8, fy + 6); brush.vertex(fx + 6, fy + 26); brush.vertex(fx - 6, fy + 26);
  brush.endShape(true);
  // head
  brush.fill("#b98d77", 200);
  brush.circle(fx, fy - 37, 6, true);
  // wide hat
  brush.fill("#d4b77a", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(fx - 26, fy - 40); brush.vertex(fx - 8, fy - 48); brush.vertex(fx, fy - 54);
  brush.vertex(fx + 8, fy - 48); brush.vertex(fx + 26, fy - 40); brush.vertex(fx, fy - 36);
  brush.endShape(true);
  brush.fill("#7a6a4a", 200);
  brush.circle(fx, fy - 46, 6, true);
  // reflection / shadow on wet sand
  brush.fill("#6f7f96", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(fx - 10, fy + 26); brush.vertex(fx + 10, fy + 26); brush.vertex(fx + 50, fy + 44); brush.vertex(fx + 30, fy + 48);
  brush.endShape(true);

  // foam line at the water's edge left as paper, with a darker wet band below it
  brush.fill("#8f9ab0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 395); brush.vertex(300, 388); brush.vertex(620, 380); brush.vertex(620, 400); brush.vertex(300, 410); brush.vertex(-20, 418);
  brush.endShape(true);
  // a couple of gulls
  brush.fill("#50606e", 200);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(150, 90, 4, true);
  brush.circle(190, 70, 3, true);
}
