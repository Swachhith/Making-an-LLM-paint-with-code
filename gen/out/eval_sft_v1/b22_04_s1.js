async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f3f0");
  brush.noStroke();
  // misty sky: pale blue-grey, two wide passes
  brush.fill("#b9c4d0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 170); brush.vertex(420, 160); brush.vertex(200, 175); brush.vertex(-20, 170);
  brush.endShape(true);
  brush.fill("#a3b0c4", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 170); brush.vertex(620, 170); brush.vertex(620, 290); brush.vertex(400, 295); brush.vertex(220, 295); brush.vertex(-20, 290);
  brush.endShape(true);
  // meadow: soft green, two passes
  brush.fill("#9fb090", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 290); brush.vertex(620, 290); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7fa07a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 350); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // poppies: many small rounded shapes, loose and overlapping
  const poppies = [
    [320, 420, "#d93a3a"], [360, 450, "#b02a3a"], [280, 390, "#e04a4a"],
    [470, 440, "#c82a3a"], [510, 470, "#a02a3a"], [430, 400, "#d93a3a"],
    [200, 460, "#b82a3a"], [240, 490, "#d03a3a"], [160, 440, "#c82a3a"],
    [120, 470, "#a82a3a"], [50, 450, "#d03a3a"], [80, 480, "#b02a3a"],
    [540, 460, "#c82a3a"], [580, 490, "#a82a3a"], [600, 470, "#d03a3a"],
    [300, 520, "#c82a3a"], [330, 540, "#a82a3a"], [350, 510, "#d03a3a"],
    [180, 540, "#b82a3a"], [210, 560, "#c82a3a"], [230, 530, "#a82a3a"],
    [460, 550, "#c82a3a"], [490, 570, "#b82a3a"], [510, 540, "#d03a3a"],
    [100, 560, "#b02a3a"], [130, 580, "#a02a3a"], [150, 550, "#c82a3a"],
    [560, 520, "#c82a3a"], [590, 540, "#b82a3a"], [610, 510, "#d03a3a"]
  ];
  for (const p of poppies) {
    brush.fill(p[2], 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(p[0], p[1], 11, 0.5);
    brush.fill("#6a121a", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(p[0], p[1], 7, 0.5);
  }
  // stems
  for (const p of poppies) {
    brush.fill("#3a5a3a", 180);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(p[0] - 3, p[1] + 12); brush.vertex(p[0] + 3, p[1] + 12); brush.vertex(p[0] + 4, p[1] + 45); brush.vertex(p[0] - 4, p[1] + 45);
    brush.endShape(true);
  }
}
