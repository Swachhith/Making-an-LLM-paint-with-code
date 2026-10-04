async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e6c4");
  randomSeed(166);
  brush.noStroke();

  // sky: deep indigo at the top to blazing tangerine low, the sun left as bright paper
  let sky = [["#3b2466", -20, 140], ["#8e2f6a", 90, 250], ["#e0482e", 200, 380], ["#f59a24", 320, 460]];
  for (let s of sky) {
    brush.fill(s[0], 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(-10, s[1]); brush.vertex(610, s[1] - 10); brush.vertex(610, s[2]); brush.vertex(-10, s[2] + 10);
    brush.endShape(true);
  }
  // halo around the sun
  brush.fill("#fbd24a", 200);
  brush.fillBleed(0.3);
  brush.circle(360, 420, 90, 0.5);

  // far skyline, plum
  let x = -10;
  while (x < 610) {
    let w = random(25, 55), h = random(60, 150);
    brush.fill("#5a2a4e", 205);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(x, 610); brush.vertex(x, 470 - h); brush.vertex(x + w, 470 - h); brush.vertex(x + w, 610);
    brush.endShape(true);
    x += w - 5;
  }
  // near silhouettes, three passes of near-black so they read solid
  let towers = [];
  x = -20;
  while (x < 610) {
    let w = random(40, 85), h = random(140, 340);
    towers.push([x, w, h, random() < 0.35]);
    x += w + random(-6, 4);
  }
  for (let pass = 0; pass < 3; pass++) {
    for (let t of towers) {
      let [tx, w, h, spire] = t;
      brush.fill(pass == 0 ? "#2a1430" : "#0e0610", 235);
      brush.fillBleed(0.1);
      brush.fillTexture(0.25, 0.25);
      brush.beginShape(0);
      brush.vertex(tx, 610); brush.vertex(tx, 600 - h);
      if (spire) { brush.vertex(tx + w * 0.4, 600 - h); brush.vertex(tx + w * 0.5, 560 - h); brush.vertex(tx + w * 0.6, 600 - h); }
      brush.vertex(tx + w, 600 - h); brush.vertex(tx + w, 610);
      brush.endShape(true);
    }
  }
  // a few lit windows as warm specks
  for (let i = 0; i < 25; i++) {
    let t = random(towers);
    brush.fill("#f7b53a", 220);
    brush.fillBleed(0.05);
    brush.circle(t[0] + random(8, t[1] - 8), 600 - random(20, t[2] - 20), 2, 0.1);
  }
}
