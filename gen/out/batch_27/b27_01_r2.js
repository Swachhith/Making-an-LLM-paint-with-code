async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece5d6");
  randomSeed(27);
  brush.noStroke();
  // very soft warm-grey sky wash so the empty space still feels painted
  brush.fill("#c9c0ab", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 250);
  brush.vertex(-20, 330);
  brush.endShape(true);
  // earthy ground, ochre fading to umber
  brush.fill("#bfa26d", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 430);
  brush.vertex(200, 415);
  brush.vertex(420, 425);
  brush.vertex(620, 405);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8f7a4f", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 520);
  brush.vertex(300, 500);
  brush.vertex(620, 515);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // muted olive haze behind the grove
  brush.fill("#8e8c6a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(360, 430);
  brush.vertex(380, 330);
  brush.vertex(440, 300);
  brush.vertex(520, 290);
  brush.vertex(590, 320);
  brush.vertex(620, 430);
  brush.endShape(true);
  // birch trunks, pale, their shaded sides grey and bark marks near-black
  let trunks = [[420, 20, 220], [455, 15, 265], [486, 22, 200], [520, 14, 280], [548, 17, 240]];
  for (let t of trunks) {
    let x = t[0], w = t[1], y0 = t[2];
    brush.fill("#5f5c56", 205);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x + w * 0.45, y0);
    brush.vertex(x + w + 2, y0 + 5);
    brush.vertex(x + w + 3, 475);
    brush.vertex(x + w * 0.45, 477);
    brush.endShape(true);
    for (let y = y0 + 15; y < 465; y += random(22, 40)) {
      brush.fill("#2e2820", 220);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.3);
      brush.vertex(x - 3, y);
      brush.vertex(x + w * random(0.5, 1.1), y - 3);
      brush.vertex(x + w * random(0.5, 1.1), y + 5);
      brush.vertex(x - 3, y + 7);
      brush.endShape(true);
    }
  }
  // thin canopy of yellowed leaves, loose dabs in two passes
  let cols = ["#b08a3c", "#8a854a", "#c09a58", "#9a6c35"];
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 22; i++) {
      brush.fill(random(cols), 160 + pass * 40);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.4);
      brush.circle(random(400, 585), random(190, 300) + pass * 10, random(10, 20) - pass * 3, 0.7);
    }
  }
  // long raking cast shadows
  for (let t of trunks) {
    brush.fill("#7a6c50", 160);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(t[0], 474);
    brush.vertex(t[0] + t[1], 474);
    brush.vertex(t[0] - 90, 505);
    brush.vertex(t[0] - 104, 505);
    brush.endShape(true);
  }
}
