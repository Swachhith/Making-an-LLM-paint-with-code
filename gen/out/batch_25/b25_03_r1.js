async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf1f3");
  randomSeed(313);
  brush.noStroke();
  let hz = 310;

  // cool sky, stronger at the top
  brush.fill("#8fb0cc", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 150); brush.vertex(-10, 170);
  brush.endShape(true);
  brush.fill("#c8d8e4", 160);
  brush.beginShape(0.6);
  brush.vertex(-10, 130); brush.vertex(610, 120); brush.vertex(610, hz); brush.vertex(-10, hz);
  brush.endShape(true);

  // mesas: steep cliffs, dead-flat tops, rubble aprons. Cool mauve-greys.
  let mesas = [
    { pts: [[-10, hz], [-10, 190], [60, 186], [72, 200], [85, 238], [120, 262], [150, hz]], c: ["#a79bb6", "#7c6f98"] },
    { pts: [[110, hz], [150, 268], [168, 222], [175, 150], [300, 146], [306, 175], [318, 230], [355, 270], [390, hz]], c: ["#9a8fb2", "#6b5f8e"] },
    { pts: [[360, hz], [400, 280], [420, 248], [424, 210], [470, 208], [476, 238], [500, 268], [540, hz]], c: ["#b3aac4", "#8a80a6"] },
    { pts: [[500, hz], [528, 260], [536, 176], [610, 172], [610, hz]], c: ["#a197b8", "#746996"] }
  ];
  for (let m of mesas) {
    brush.fill(m.c[0], 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.45);
    brush.beginShape(0);
    for (let p of m.pts) brush.vertex(p[0], p[1]);
    brush.endShape(true);
    // shadowed right face
    let top = m.pts.reduce((a, b) => (b[1] < a[1] ? b : a));
    brush.fill(m.c[1], 205);
    brush.fillBleed(0.15);
    brush.beginShape(0);
    let right = m.pts.filter(p => p[0] >= top[0]);
    brush.vertex(top[0] - 10, top[1] + 8);
    for (let p of right) brush.vertex(p[0], p[1] + 4);
    brush.vertex(top[0] - 10, hz);
    brush.endShape(true);
  }

  // water
  brush.fill("#b5cad9", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-10, hz); brush.vertex(610, hz); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // mirrored mesas, softer and slightly wobbled
  for (let m of mesas) {
    brush.fill(m.c[1], 175);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.2);
    for (let p of m.pts) brush.vertex(p[0] + random(-5, 5), hz + (hz - p[1]) * 0.95);
    brush.endShape(true);
  }
  // pale reflected-sky ripples breaking the reflection
  for (let y = hz + 22; y < 600; y += 38) {
    brush.fill("#e2ecf2", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.7);
    let x0 = random(-20, 250);
    brush.vertex(x0, y); brush.vertex(x0 + random(200, 380), y + 3);
    brush.vertex(x0 + random(200, 360), y + 15); brush.vertex(x0 + 10, y + 13);
    brush.endShape(true);
  }
  // dark shoreline line
  brush.fill("#5c5378", 210);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(-10, hz - 3); brush.vertex(610, hz - 4); brush.vertex(610, hz + 12); brush.vertex(-10, hz + 13);
  brush.endShape(true);
}
