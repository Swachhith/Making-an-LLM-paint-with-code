async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6eaec");
  randomSeed(1909);
  brush.noStroke();
  // the rain-wet backdrop: blooms of blue, lilac and grey run together
  for (let i = 0; i < 12; i++) {
    brush.fill(random(["#8ea3b4", "#6f86a0", "#a79bc0", "#9ab5ad"]), random(150, 200));
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(-20, 620), random(-20, 620), random(90, 170), 0.9);
  }
  // coat: three passes, each darker and smaller
  const coat = [["#3a5070", 230, 0], ["#26384f", 235, 20], ["#1a2638", 220, 50]];
  for (const [c, o, inset] of coat) {
    brush.fill(c, o);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(235 + inset * 0.3, 400); brush.vertex(335, 400); brush.vertex(460 - inset, 440 + inset * 0.3);
    brush.vertex(560 - inset, 520); brush.vertex(590 - inset, 630); brush.vertex(10 + inset, 630);
    brush.vertex(40 + inset, 520); brush.vertex(130 + inset, 440);
    brush.endShape(true);
  }
  // scarf
  brush.fill("#f0b030", 235);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(232, 392); brush.vertex(338, 392); brush.vertex(322, 430); brush.vertex(300, 520); brush.vertex(275, 520); brush.vertex(262, 430);
  brush.endShape(true);
  // face, lit warm, with a shadowed side
  brush.fill("#e8ad8a", 230);
  brush.fillBleed(0.22);
  brush.beginShape(0.7);
  brush.vertex(240, 300); brush.vertex(252, 255); brush.vertex(292, 245); brush.vertex(330, 268); brush.vertex(332, 322); brush.vertex(312, 366); brush.vertex(270, 372); brush.vertex(244, 342);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(268, 360); brush.vertex(304, 360); brush.vertex(306, 398); brush.vertex(266, 398);
  brush.endShape(true);
  brush.fill("#b86a4c", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(304, 275); brush.vertex(332, 290); brush.vertex(328, 330); brush.vertex(306, 365); brush.vertex(300, 320);
  brush.endShape(true);
  // eyes, looking up at the rain
  brush.fill("#2a1e1a", 240);
  brush.fillBleed(0.05);
  brush.circle(270, 300, 4, 0.2);
  brush.circle(304, 298, 4, 0.2);
  brush.fill("#b8483a", 210);
  brush.circle(288, 342, 6, 0.4);
  // hair under the umbrella
  brush.fill("#2a1e1a", 240);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(228, 320); brush.vertex(234, 258); brush.vertex(280, 232); brush.vertex(336, 246); brush.vertex(348, 300); brush.vertex(322, 272); brush.vertex(272, 266); brush.vertex(250, 340);
  brush.endShape(true);
  // raised arm and hand
  brush.fill("#26384f", 235);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(410, 440); brush.vertex(450, 385); brush.vertex(428, 330); brush.vertex(400, 330); brush.vertex(410, 385); brush.vertex(365, 425);
  brush.endShape(true);
  brush.fill("#e8ad8a", 235);
  brush.circle(414, 322, 20, 0.3);
  brush.fill("#2a1a14", 235);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(404, 180); brush.vertex(420, 180); brush.vertex(424, 312); brush.vertex(406, 312);
  brush.endShape(true);
  // umbrella dome, cropped at the top, laid in wet and bleeding
  brush.fill("#e3281c", 240);
  brush.fillBleed(0.4);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.6);
  brush.vertex(60, 215); brush.vertex(130, 95); brush.vertex(260, 15); brush.vertex(410, -10); brush.vertex(550, 45); brush.vertex(630, 150); brush.vertex(645, 210);
  brush.vertex(585, 192); brush.vertex(515, 212); brush.vertex(445, 190); brush.vertex(375, 212); brush.vertex(305, 190); brush.vertex(235, 212); brush.vertex(160, 192);
  brush.endShape(true);
  brush.fill("#a80c0c", 220);
  brush.fillBleed(0.35);
  brush.beginShape(0.6);
  brush.vertex(410, 0); brush.vertex(480, 35); brush.vertex(515, 210); brush.vertex(445, 190);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(400, 0); brush.vertex(255, 45); brush.vertex(160, 192); brush.vertex(235, 211);
  brush.endShape(true);
  brush.fill("#ff6a44", 170);
  brush.fillBleed(0.4);
  brush.circle(340, 95, 60, 0.8);
  // drips from the rim points only, kept clear of the face
  const tips = [70, 160, 235, 445, 515, 585];
  for (const x of tips) {
    let len = random(60, 190);
    brush.fill("#cc2418", random(170, 215));
    brush.fillBleed(0.25);
    brush.beginShape(0.4);
    brush.vertex(x - 9, 200); brush.vertex(x + 9, 200); brush.vertex(x + 4, 200 + len); brush.vertex(x - 4, 200 + len);
    brush.endShape(true);
    brush.circle(x, 203 + len, random(6, 9), 0.3);
  }
  for (let i = 0; i < 40; i++) {
    brush.fill(random(["#d8281c", "#1a2638", "#f4f6f7"]), random(170, 230));
    brush.fillBleed(0.15);
    brush.circle(random(0, 600), random(0, 600), random(2, 6), 0.4);
  }
}
