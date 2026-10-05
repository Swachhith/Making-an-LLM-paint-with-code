async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef1f4");
  randomSeed(3);
  brush.noStroke();

  // soft misty sky, layered
  brush.fill("#b8c7d8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#a3b8c8", 150);
  brush.beginShape(0.5);
  brush.vertex(-20, 130); brush.vertex(620, 110); brush.vertex(620, 300); brush.vertex(-20, 290);
  brush.endShape(true);

  // tall grass along the horizon
  let grass = [];
  for (let i = 0; i < 60; i++) {
    let x = random(0, 600);
    let h = random(10, 30);
    grass.push({ x, h, c: random(["#6f8a5a", "#8a9a7a", "#5a704a"]) });
  }
  for (let g of grass) {
    brush.fill(g.c, 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(g.x - 12, 230); brush.vertex(g.x + 12, 230); brush.vertex(g.x + 8, 230 - g.h); brush.vertex(g.x - 8, 230 - g.h);
    brush.endShape(true);
  }

  // poppies, two passes each
  let cx = [80, 150, 210, 270, 330, 390, 450, 510, 560, 600];
  let cy = [270, 250, 235, 225, 215, 200, 195, 185, 180, 175];
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < cx.length; i++) {
      let x = cx[i] + random(-20, 20), y = cy[i] + random(-15, 15);
      let r = random(22, 34);
      brush.fill(pass ? "#c22a3a" : "#e03a5a", pass ? 180 : 210);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.circle(x, y, r, 0.4);
    }
  }
  // dark centres
  for (let i = 0; i < cx.length; i++) {
    brush.fill("#5a121a", 220);
    brush.fillBleed(0.1);
    brush.circle(cx[i], cy[i], random(8, 12), 0.2);
  }
  // stems
  for (let i = 0; i < cx.length; i++) {
    brush.fill("#3a3a30", 200);
    brush.fillBleed(0.1);
    brush.beginShape(0.3);
    brush.vertex(cx[i] - 12, cy[i] + 20); brush.vertex(cx[i] + 12, cy[i] + 20); brush.vertex(cx[i] + 4, 230); brush.vertex(cx[i] - 6, 230);
    brush.endShape(true);
  }
}
