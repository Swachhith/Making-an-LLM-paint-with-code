async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f2");
  brush.noStroke();

  // misty sky
  brush.fill("#cbd6e0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 300);
  brush.endShape(true);

  // ridges above the waterline at y=300, then mirrored below
  let ridges = [
    ["#aebdcc", 170, [[-20,190],[90,150],[180,175],[300,120],[420,165],[520,140],[620,170]]],
    ["#8ea3b8", 180, [[-20,220],[70,200],[170,230],[260,190],[380,235],[480,205],[620,225]]],
    ["#6f8aa3", 190, [[-20,255],[110,240],[220,265],[330,245],[450,270],[560,250],[620,258]]],
  ];
  for (let r of ridges) {
    // above
    brush.fill(r[0], r[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    for (let p of r[2]) brush.vertex(p[0], p[1]);
    brush.vertex(620, 302);
    brush.vertex(-20, 302);
    brush.endShape(true);
  }
  // water base
  brush.fill("#c3cfda", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 300);
  brush.vertex(620, 300);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // mirrored, fainter, softer
  for (let k = ridges.length - 1; k >= 0; k--) {
    let r = ridges[k];
    brush.fill(r[0], r[1] - 25);
    brush.fillBleed(0.35);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.8);
    brush.vertex(-20, 298);
    brush.vertex(620, 298);
    for (let i = r[2].length - 1; i >= 0; i--) {
      let p = r[2][i];
      brush.vertex(p[0], 600 - p[1]);
    }
    brush.endShape(true);
  }
  // pale ripple streaks, horizontal wide bands in blue-grey
  for (let i = 0; i < 5; i++) {
    let y = 330 + i * 55;
    brush.fill("#9fb2c4", 140);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.5);
    brush.vertex(40 + i * 30, y);
    brush.vertex(380 + i * 25, y - 3);
    brush.vertex(370 + i * 25, y + 16);
    brush.vertex(50 + i * 30, y + 18);
    brush.endShape(true);
  }
}
