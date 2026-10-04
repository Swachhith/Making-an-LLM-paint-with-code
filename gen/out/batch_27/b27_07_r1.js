async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee7d7");
  randomSeed(707);
  brush.noStroke();
  // muted sky, warm grey with a dusty violet cloud bank
  brush.fill("#bdb5a0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 300);
  brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#a39aa0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 60);
  brush.vertex(200, 40);
  brush.vertex(420, 80);
  brush.vertex(620, 50);
  brush.vertex(620, 150);
  brush.vertex(380, 140);
  brush.vertex(150, 160);
  brush.vertex(-20, 130);
  brush.endShape(true);
  // far hills, cool grey-green
  brush.fill("#8a8e7c", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 300);
  brush.vertex(140, 272);
  brush.vertex(300, 290);
  brush.vertex(460, 265);
  brush.vertex(620, 285);
  brush.vertex(620, 330);
  brush.vertex(-20, 330);
  brush.endShape(true);
  // field in receding bands of ochre, sage and umber
  let bands = [[325, "#b0a371"], [360, "#9c9460"], [415, "#8a7d4a"], [490, "#766840"], [560, "#62552f"]];
  for (let b of bands) {
    brush.fill(b[1], 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.4);
    brush.vertex(-20, b[0] + random(-6, 6));
    brush.vertex(300, b[0] + random(-10, 10));
    brush.vertex(620, b[0] + random(-6, 6));
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // furrow lines converging towards the tree
  for (let i = 0; i < 7; i++) {
    let bx = -60 + i * 120;
    brush.fill("#5b5030", 150);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(390, 345);
    brush.vertex(bx - 12, 620);
    brush.vertex(bx + 12, 620);
    brush.endShape(true);
  }
  // the far cherry tree: small but the only warm pink on the canvas
  let tx = 390, ty = 318;
  brush.fill("#4a382c", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(tx - 5, ty + 14);
  brush.vertex(tx - 3, ty - 14);
  brush.vertex(tx + 4, ty - 14);
  brush.vertex(tx + 6, ty + 14);
  brush.endShape(true);
  brush.fill("#c69a9c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(tx, ty - 34, 42, 0.6);
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 14; i++) {
      brush.fill(random(["#b27a80", "#d5aca9", "#9e6570"]), 180 + pass * 30);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.circle(tx + random(-38, 38), ty - 34 + random(-26, 16), random(7, 14) - pass * 3, 0.6);
    }
  }
  brush.fill("#5a4f34", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(tx - 40, ty + 12);
  brush.vertex(tx + 45, ty + 10);
  brush.vertex(tx + 25, ty + 20);
  brush.vertex(tx - 30, ty + 20);
  brush.endShape(true);
  // fallen petals drifting across the near field
  for (let i = 0; i < 20; i++) {
    brush.fill("#b98a8c", 200);
    brush.circle(random(0, 600), random(420, 600), random(2, 4), 0.4);
  }
}
