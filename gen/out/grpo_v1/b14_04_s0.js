async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e3d4");
  brush.noStroke();

  // sky: slate over a pale blue, soft uneven wash
  brush.fill("#9aa8b8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 230); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#a6b8d4", 160);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 80); brush.vertex(300, 100); brush.vertex(-20, 60);
  brush.endShape(true);

  // rolling fields, olive to ochre
  brush.fill("#b8a870", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 200); brush.vertex(300, 190); brush.vertex(620, 210); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9a8a5a", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 280); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a7a4a", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the windmill, small in the distance
  let mx = 300, my = 340;
  // tower
  brush.fill("#8a7a5a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(mx - 24, my - 110); brush.vertex(mx + 24, my - 110); brush.vertex(mx + 24, my + 110); brush.vertex(mx - 24, my + 110);
  brush.endShape(true);
  // four belfry windows
  for (let k = 0; k < 4; k++) {
    let a = k * 90;
    brush.fill("#6e624a", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(mx + 12 * cos(a - 15), my - 100 + 12 * sin(a - 15));
    brush.vertex(mx + 20 * cos(a - 5), my - 80 + 20 * sin(a - 5));
    brush.vertex(mx + 20 * cos(a + 5), my - 80 + 20 * sin(a + 5));
    brush.vertex(mx + 12 * cos(a + 15), my - 100 + 12 * sin(a + 15));
    brush.endShape(true);
  }
  // door
  brush.fill("#5a4a3a", 210);
  brush.beginShape(0.1);
  brush.vertex(mx - 12, my + 100); brush.vertex(mx + 12, my + 100); brush.vertex(mx + 12, my + 130); brush.vertex(mx - 12, my + 130);
  brush.endShape(true);
  // cap
  brush.fill("#7a6a5a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(mx - 26, my - 116); brush.vertex(mx + 26, my - 116); brush.vertex(mx + 20, my - 150); brush.vertex(mx - 20, my - 150);
  brush.endShape(true);
  // sails, two broad passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#5a5a50", pass ? 225 : 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.15);
    brush.vertex(mx, my - 116); brush.vertex(mx + 120, my - 160); brush.vertex(mx + 120, my - 50); brush.vertex(mx, my - 50);
    brush.endShape(true);
    brush.beginShape(0.15);
    brush.vertex(mx, my - 116); brush.vertex(mx - 120, my - 160); brush.vertex(mx - 120, my - 50); brush.vertex(mx, my - 50);
    brush.endShape(true);
  }
  // a few tall grasses
  brush.fill("#3a4a2a", 200);
  for (let i = 0; i < 12; i++) {
    let x = 50 + i * 48;
    brush.beginShape(0.3);
    brush.vertex(x, 420); brush.vertex(x + 7, 390); brush.vertex(x + 18, 410); brush.vertex(x + 4, 440);
    brush.endShape(true);
  }
}
