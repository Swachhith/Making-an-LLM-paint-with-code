async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede6d6");
  randomSeed(26042);
  brush.noStroke();

  // sky strip and far ridge
  brush.fill("#a6aaa8", 155);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 105); brush.vertex(-20, 110);
  brush.endShape(true);
  brush.fill("#7e8074", 185);
  brush.beginShape(0.7);
  brush.vertex(-20, 108); brush.vertex(100, 72); brush.vertex(220, 96); brush.vertex(340, 60);
  brush.vertex(480, 92); brush.vertex(620, 70); brush.vertex(620, 140); brush.vertex(-20, 145);
  brush.endShape(true);

  // patchwork: rows of fields that grow taller toward the viewer, each row cut into plots
  let cols = ["#a0905a", "#7c7844", "#9a6c40", "#6a6a3c", "#b49c66", "#84703e"];
  let y = 130;
  let row = 0;
  while (y < 620) {
    let h = 22 + row * 9;
    let x = -30;
    while (x < 620) {
      let w = random(70, 150) * (0.6 + row * 0.12);
      brush.fill(random(cols), 170 + random(0, 40));
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.3);
      brush.vertex(x, y + random(-3, 3)); brush.vertex(x + w, y + random(-3, 3));
      brush.vertex(x + w + random(-6, 6), y + h); brush.vertex(x + random(-6, 6), y + h);
      brush.endShape(true);
      x += w + random(2, 6);
    }
    y += h + 3;
    row++;
  }

  // dark hedges between rows (only some)
  brush.fill("#48482a", 190);
  for (let k = 0; k < 18; k++) {
    brush.circle(random(0, 600), random(150, 600), random(6, 14), true);
  }

  // river winding from the far ridge down and out of the bottom, broadening
  let pts = [[340, 135], [290, 175], [380, 225], [240, 300], [400, 380], [230, 480], [330, 620]];
  brush.fill("#8aa2ae", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  for (let i = 0; i < pts.length; i++) brush.vertex(pts[i][0] - (5 + i * i * 2.2), pts[i][1]);
  for (let i = pts.length - 1; i >= 0; i--) brush.vertex(pts[i][0] + (5 + i * i * 2.2), pts[i][1]);
  brush.endShape(true);
  brush.fill("#5a7888", 205);
  brush.beginShape(0.9);
  for (let i = 1; i < pts.length; i++) brush.vertex(pts[i][0] - (3 + i * i * 1.4), pts[i][1] + 4);
  for (let i = pts.length - 1; i >= 1; i--) brush.vertex(pts[i][0] + (1 + i * i * 0.3), pts[i][1] + 4);
  brush.endShape(true);
  // tree clumps crowding the banks
  brush.fill("#3e4426", 215);
  for (let i = 1; i < pts.length; i++) {
    let w = 5 + i * i * 2.2;
    brush.circle(pts[i][0] - w - 6, pts[i][1] + random(-10, 10), 4 + i * 2, true);
    brush.circle(pts[i][0] + w + 6, pts[i][1] + random(-10, 10), 3 + i * 1.6, true);
  }
}
