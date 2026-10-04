async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ebdf");
  randomSeed(1111);
  brush.noStroke();
  // big muted sky: dusty grey-blue top, warm grey lower, cloud masses in raw umber-grey
  brush.fill("#9aa3a6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 250);
  brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#d3c3a2", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 260);
  brush.vertex(620, 230);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    brush.fill("#857c6c", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(random(40, 560), random(80, 260), random(40, 80), 0.9);
  }
  // low horizon: field
  brush.fill("#8d8452", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 470);
  brush.vertex(300, 465);
  brush.vertex(620, 472);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6e6538", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 530);
  brush.vertex(300, 520);
  brush.vertex(620, 540);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // distant hedge line
  brush.fill("#5f6146", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 470);
  brush.vertex(100, 460);
  brush.vertex(200, 466);
  brush.vertex(620, 462);
  brush.vertex(620, 476);
  brush.vertex(-20, 478);
  brush.endShape(true);
  // oak, left of centre: short thick trunk, broad spreading crown
  let ox = 220;
  brush.fill("#3d3322", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(ox - 12, 475);
  brush.vertex(ox - 8, 400);
  brush.vertex(ox - 30, 380);
  brush.vertex(ox - 12, 378);
  brush.vertex(ox + 2, 395);
  brush.vertex(ox + 20, 375);
  brush.vertex(ox + 32, 380);
  brush.vertex(ox + 10, 405);
  brush.vertex(ox + 14, 475);
  brush.endShape(true);
  let crown = ["#5e5a33", "#4b4a2a", "#6f6a3d", "#3b3a22"];
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < 9; i++) {
      brush.fill(random(crown), 170 + pass * 25);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(ox + random(-80, 80) * (1 - pass * 0.2), 355 + random(-35, 25) + pass * 6, random(24, 40) - pass * 5, 0.8);
    }
  }
  // tree shadow on the field
  brush.fill("#4a4526", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(ox - 40, 478);
  brush.vertex(ox + 120, 474);
  brush.vertex(ox + 80, 488);
  brush.vertex(ox - 30, 486);
  brush.endShape(true);
}
