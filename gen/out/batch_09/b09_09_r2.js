async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6ea");
  brush.noStroke();

  // pale ground wash
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.fill("#d8a070", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(300, 480); brush.vertex(620, 505); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // trunk and main limbs as broad soft shapes
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#3a2018", 225);
  brush.beginShape(0.4);
  brush.vertex(275, 540); brush.vertex(285, 380); brush.vertex(240, 290); brush.vertex(262, 282);
  brush.vertex(300, 350); brush.vertex(340, 270); brush.vertex(362, 280); brush.vertex(318, 380); brush.vertex(328, 540);
  brush.endShape(true);

  // crown: big splashy blooms, loose pass
  let blobs = [
    [300, 200, 150, "#e8501a"], [170, 260, 110, "#d8241a"], [440, 250, 115, "#f08a1a"],
    [230, 130, 95, "#c81a2a"], [390, 130, 100, "#e0301a"], [300, 90, 80, "#f0a020"],
    [120, 350, 70, "#f07a1a"], [480, 360, 75, "#b81a2a"]
  ];
  for (let b of blobs) {
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.fill(b[3], 180);
    brush.circle(b[0], b[1], b[2], 0.9);
  }
  // denser inner pass
  let inner = [[260, 220, 60, "#9a0e1a"], [380, 200, 55, "#c83a0a"], [200, 310, 45, "#8a1020"], [420, 330, 45, "#d0400a"], [310, 140, 45, "#b01a1a"]];
  for (let b of inner) {
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.fill(b[3], 200);
    brush.circle(b[0], b[1], b[2], 0.8);
  }

  // saturated top-light pass on the crown
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.fill("#ff6a0a", 190);
  brush.circle(340, 170, 50, 0.8);
  brush.circle(180, 240, 40, 0.8);
  brush.circle(450, 280, 40, 0.8);

  // drips falling from the crown
  brush.fillBleed(0.25);
  let drips = [[140, 400, 60, "#d8241a"], [210, 380, 90, "#e8501a"], [470, 420, 70, "#b81a2a"], [410, 390, 50, "#f08a1a"]];
  for (let d of drips) {
    brush.fill(d[3], 190);
    brush.beginShape(0.6);
    brush.vertex(d[0] - 9, d[1]); brush.vertex(d[0] + 9, d[1]); brush.vertex(d[0] + 5, d[1] + d[2]); brush.vertex(d[0] - 5, d[1] + d[2]);
    brush.endShape(true);
    brush.circle(d[0], d[1] + d[2] + 4, 9, 0.3);
  }

  // trunk strengthened below the crown
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2a140e", 235);
  brush.beginShape(0.4);
  brush.vertex(278, 545); brush.vertex(287, 400); brush.vertex(318, 400); brush.vertex(326, 545);
  brush.endShape(true);
  brush.fill("#1a0a08", 200);
  brush.beginShape(0.4);
  brush.vertex(305, 545); brush.vertex(308, 410); brush.vertex(320, 410); brush.vertex(326, 545);
  brush.endShape(true);

  // fallen leaves
  let leaves = [[80, 540], [180, 560], [380, 555], [470, 530], [540, 575], [250, 585]];
  for (let l of leaves) {
    brush.fill("#e0401a", 200);
    brush.circle(l[0], l[1], 10, 0.7);
  }
}
