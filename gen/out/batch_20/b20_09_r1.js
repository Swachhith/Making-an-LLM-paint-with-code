async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e8");
  brush.noStroke();

  brush.fill("#f6b24a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(380, 230, 250, 1.0);
  brush.fill("#e86a6a", 190);
  brush.circle(120, 130, 180, 1.0);
  brush.fill("#8fb0e0", 170);
  brush.circle(560, 60, 140, 1.0);
  brush.fill("#f6b24a", 190);
  for (const d of [[470, 400, 60], [120, 300, 90], [220, 330, 50]]) {
    brush.beginShape(0.4);
    brush.vertex(d[0] - 9, d[1]); brush.vertex(d[0] + 9, d[1]); brush.vertex(d[0] + 4, d[1] + d[2]); brush.vertex(d[0], d[1] + d[2] + 10); brush.vertex(d[0] - 4, d[1] + d[2]);
    brush.endShape(true);
  }

  // ground low so figure sits against sky
  brush.fill("#5a7a3a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 490); brush.vertex(200, 470); brush.vertex(420, 485); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c8a878", 210);
  brush.beginShape(0.4);
  brush.vertex(-20, 505); brush.vertex(620, 492); brush.vertex(620, 530); brush.vertex(-20, 545);
  brush.endShape(true);

  const D = "#241a2a";
  const ring = (cx, cy, r) => {
    for (let k = 0; k < 18; k++) brush.circle(cx + cos(k * 20) * r, cy + sin(k * 20) * r, 7, 0.2);
  };
  for (let p = 0; p < 2; p++) {
    brush.fill(D, 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.4);
    ring(210, 455, 48);
    ring(370, 455, 48);
    // frame
    brush.beginShape(0.05);
    brush.vertex(210, 455); brush.vertex(262, 380); brush.vertex(345, 380); brush.vertex(370, 455); brush.vertex(354, 458); brush.vertex(336, 396); brush.vertex(270, 396); brush.vertex(226, 462);
    brush.endShape(true);
    brush.beginShape(0.05);
    brush.vertex(262, 380); brush.vertex(300, 455); brush.vertex(284, 460); brush.vertex(250, 395);
    brush.endShape(true);
    // rider: torso leaning forward
    brush.beginShape(0.4);
    brush.vertex(258, 385); brush.vertex(285, 320); brush.vertex(330, 300); brush.vertex(348, 318); brush.vertex(330, 336); brush.vertex(298, 345); brush.vertex(282, 392);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(328, 305); brush.vertex(352, 370); brush.vertex(338, 378); brush.vertex(316, 320);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(262, 380); brush.vertex(318, 395); brush.vertex(304, 455); brush.vertex(288, 452); brush.vertex(298, 410); brush.vertex(262, 400);
    brush.endShape(true);
    brush.circle(345, 288, 18, 0.2);
    brush.beginShape(0.3);
    brush.vertex(336, 380); brush.vertex(362, 376); brush.vertex(360, 392);
    brush.endShape(true);
  }

  brush.fill("#e86a6a", 210);
  for (const s of [[500,90],[540,140],[60,60],[400,70],[560,320],[90,420],[250,120]]) brush.circle(s[0], s[1], 6, 0.9);
}
