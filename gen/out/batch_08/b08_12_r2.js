async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede5d6");
  brush.noStroke();
  // sky: umber at top melting to warm ochre haze at horizon
  brush.fill("#b8a888", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 430); brush.vertex(-20, 430);
  brush.endShape(true);
  brush.fill("#8a7c68", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(300, 150); brush.vertex(-20, 110);
  brush.endShape(true);
  brush.fill("#d8b27a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 300); brush.vertex(620, 280); brush.vertex(620, 430); brush.vertex(-20, 430);
  brush.endShape(true);
  // a thin cloud band
  brush.fill("#9c8e78", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.8);
  brush.vertex(60, 230); brush.vertex(220, 210); brush.vertex(380, 225); brush.vertex(330, 250); brush.vertex(120, 252);
  brush.endShape(true);
  // ridges receding: three layers, farthest palest and bluest
  let ridges = [
    ["#8f9290", 190, [[-20, 440], [70, 400], [170, 425], [300, 380], [430, 420], [540, 395], [620, 410]]],
    ["#76705c", 205, [[-20, 490], [100, 455], [230, 480], [360, 445], [480, 470], [620, 450]]],
    ["#5e5240", 215, [[-20, 545], [140, 515], [290, 540], [620, 530]]]
  ];
  for (let r of ridges) {
    brush.fill(r[0], r[1]);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.5);
    for (let p of r[2]) brush.vertex(p[0], p[1]);
    brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // summit crag, lower right
  brush.fill("#4a3a2a", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(280, 620); brush.vertex(370, 530); brush.vertex(440, 470); brush.vertex(495, 452); brush.vertex(560, 470); brush.vertex(620, 505); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#2a2018", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(470, 620); brush.vertex(505, 460); brush.vertex(565, 478); brush.vertex(620, 515); brush.vertex(620, 620);
  brush.endShape(true);
  // cairn beside the hiker
  for (let c of [[545, 462, 10], [545, 448, 8], [546, 437, 6]]) {
    brush.fill("#6a5a48", 225);
    brush.fillBleed(0.1);
    brush.circle(c[0], c[1], c[2], 0.4);
  }
  // hiker, a little larger
  let hx = 490, hy = 455;
  brush.fill("#221c18", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(hx, hy - 60, 7, 0.3);
  brush.beginShape(0.2);
  brush.vertex(hx - 8, hy - 52); brush.vertex(hx + 8, hy - 52); brush.vertex(hx + 9, hy - 22); brush.vertex(hx - 8, hy - 22);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(hx - 8, hy - 23); brush.vertex(hx - 1, hy - 23); brush.vertex(hx - 10, hy + 2); brush.vertex(hx - 16, hy + 1);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(hx + 1, hy - 23); brush.vertex(hx + 8, hy - 23); brush.vertex(hx + 13, hy + 2); brush.vertex(hx + 6, hy + 2);
  brush.endShape(true);
  brush.fill("#a8481e", 230);
  brush.beginShape(0.3);
  brush.vertex(hx - 17, hy - 50); brush.vertex(hx - 6, hy - 50); brush.vertex(hx - 6, hy - 26); brush.vertex(hx - 18, hy - 28);
  brush.endShape(true);
  brush.fill("#221c18", 215);
  brush.beginShape(0.2);
  brush.vertex(hx + 5, hy - 48); brush.vertex(hx + 22, hy - 84); brush.vertex(hx + 28, hy - 80); brush.vertex(hx + 10, hy - 44);
  brush.endShape(true);
  // birds in the empty sky
  for (let b of [[150, 170], [175, 160], [200, 178]]) {
    brush.fill("#3a3028", 210);
    brush.fillBleed(0.05);
    brush.circle(b[0], b[1], 3, 0.2);
    brush.circle(b[0] + 6, b[1] - 2, 3, 0.2);
  }
}
