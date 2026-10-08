async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e8");
  randomSeed(1337);
  brush.noStroke();

  // bold sky: azure above, gold lower
  brush.fill("#2f8fd8", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(420, 230); brush.vertex(380, 190); brush.vertex(260, 220); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#f2a83a", 220);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 220); brush.vertex(620, 220); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // layered ridges, each pass a darker, more opaque pass
  let ridges = [
    [[300, 300], [360, 330], [420, 310], [480, 340], [540, 320], [600, 350], [600, 620], [0, 620], [0, 330]],
    [[200, 200], [280, 250], [340, 220], [420, 260], [500, 230], [560, 270], [600, 620], [0, 620], [0, 240]],
    [[60, 120], [150, 160], [230, 130], [300, 170], [380, 140], [460, 180], [540, 150], [600, 620], [0, 620], [0, 150]]
  ];
  for (let pass = 0; pass < 2; pass++) {
    for (let r = ridges.length - 1; r >= 0; r--) {
      let pts = ridges[r];
      let col = ["#b8387e", "#8a329e", "#6a2a8a", "#522570"][pass + r];
      brush.fill(col, 215 - pass * 15);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.45);
      brush.beginShape(0.3);
      for (let p of pts) brush.vertex(p[0], p[1]);
      brush.endShape(true);
    }
  }

  // foreground meadows and trees
  brush.fill("#d25a2a", 235);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 360); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#a83a1a", 215);
  brush.beginShape(0.5);
  brush.vertex(-20, 440); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // scattered bold trees
  for (let i = 0; i < 30; i++) {
    let x = random(20, 580);
    let h = random(60, 160);
    let y = 360 - h;
    brush.fill("#5a2a10", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, y); brush.vertex(x + 18, y - 12); brush.vertex(x + 38, y + 12); brush.vertex(x + 18, y + 24);
    brush.endShape(true);
    brush.fill("#2a1a0a", 200);
    brush.beginShape(0.4);
    brush.vertex(x - 6, y + 10); brush.vertex(x + 12, y - 10); brush.vertex(x + 24, y + 10); brush.vertex(x + 6, y + 20);
    brush.endShape(true);
  }
  // a river reflecting the sky
  brush.fill("#3a8fd8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 460); brush.vertex(200, 450); brush.vertex(420, 462); brush.vertex(620, 452); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a78c8", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 520); brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sun as a warm halo
  brush.fill("#ffd04a", 230);
  brush.fillBleed(0.35);
  brush.circle(560, 120, 55, 0.7);
}
