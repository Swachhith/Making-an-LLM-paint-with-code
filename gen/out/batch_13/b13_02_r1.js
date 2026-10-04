async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee6d8");
  brush.noStroke();
  // warm overcast sky
  brush.fill("#d3c3a6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 180);
  brush.vertex(-10, 190);
  brush.endShape(true);
  // treeline and hills, olive and slate, thin band
  brush.fill("#7c8266", 200);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 190);
  brush.vertex(80, 172);
  brush.vertex(190, 182);
  brush.vertex(330, 166);
  brush.vertex(470, 178);
  brush.vertex(610, 168);
  brush.vertex(610, 204);
  brush.vertex(-10, 206);
  brush.endShape(true);
  brush.fill("#525a42", 210);
  brush.fillBleed(0.2);
  for (let t = 0; t < 7; t++) {
    brush.circle(40 + t * 22, 186, 10, 0.6);
  }
  // stone farmhouse right
  brush.fill("#a68668", 220);
  brush.beginShape(0);
  brush.vertex(440, 176);
  brush.vertex(500, 176);
  brush.vertex(500, 200);
  brush.vertex(440, 200);
  brush.endShape(true);
  brush.fill("#8a4e36", 220);
  brush.beginShape(0);
  brush.vertex(434, 178);
  brush.vertex(470, 162);
  brush.vertex(506, 178);
  brush.endShape(true);
  // earthy soil under the field
  brush.fill("#a48c6a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0);
  brush.vertex(-10, 204);
  brush.vertex(610, 204);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // rows of lavender converging on a point near the horizon
  let vx = 300, vy = 204;
  for (let i = -6; i <= 6; i++) {
    if (i === 0) continue;
    let bx = vx + i * 110;
    for (let pass = 0; pass < 2; pass++) {
      let hw = pass ? 22 : 38;
      brush.fill(pass ? "#553f78" : "#7d66a0", pass ? 200 : 215);
      brush.fillBleed(pass ? 0.2 : 0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.5);
      brush.vertex(vx + i * 4 - 1, vy + 2);
      brush.vertex(vx + i * 4 + 1, vy + 2);
      brush.vertex(bx + hw, 610);
      brush.vertex(bx - hw, 610);
      brush.endShape(true);
    }
  }
  // a pale dirt track running down the middle and bending left
  brush.fill("#c9ae84", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(298, 206);
  brush.vertex(304, 206);
  brush.vertex(330, 330);
  brush.vertex(350, 610);
  brush.vertex(240, 610);
  brush.vertex(282, 330);
  brush.endShape(true);
  brush.fill("#8e7454", 160);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(300, 260);
  brush.vertex(318, 450);
  brush.vertex(310, 610);
  brush.vertex(286, 610);
  brush.vertex(292, 450);
  brush.endShape(true);
}
