async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121118");
  randomSeed(707);
  brush.noStroke();

  // tall vertical: a narrow column of faint violet sky between towering pines
  brush.fill("#34304e", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#4a4668", 190);
  brush.beginShape(0.8);
  brush.vertex(150, -20); brush.vertex(460, -20); brush.vertex(430, 440); brush.vertex(180, 440);
  brush.endShape(true);

  // snowflakes/stars in the column
  for (let i = 0; i < 70; i++) {
    brush.fill("#d9dcea", random(150, 230));
    brush.fillBleed(0.05);
    brush.fillTexture(0.3, 0.3);
    brush.circle(random(200, 410), random(0, 420), random(1, 2.6), 0.2);
  }

  // snow ground, pale paint on dark paper
  brush.fill("#c7cfdf", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(420, 450);
  brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e6eaf2", 190);
  brush.beginShape(0.7);
  brush.vertex(-20, 540); brush.vertex(300, 500); brush.vertex(620, 520);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // warm glow spilling onto the snow
  brush.fill("#f0a340", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(240, 470); brush.vertex(380, 470); brush.vertex(430, 560); brush.vertex(200, 560);
  brush.endShape(true);

  // tall pines on both edges, stacked tiers reaching the crown
  const pines = [[80, 60, -20], [150, 38, 60], [480, 55, -10], [555, 45, 40]];
  for (const p of pines) {
    const x = p[0], w = p[1], crown = p[2];
    for (let t = 0; t < 7; t++) {
      const y0 = crown + t * 68;
      const ww = w * (0.45 + t * 0.12);
      brush.fill("#020203", 245);
      brush.fillBleed(0.15);
      brush.fillTexture(0.35, 0.3);
      brush.beginShape(0.2);
      brush.vertex(x, y0); brush.vertex(x + ww, y0 + 95); brush.vertex(x - ww, y0 + 95);
      brush.endShape(true);
    }
  }

  // cabin
  brush.fill("#2a1a14", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(245, 400); brush.vertex(365, 400); brush.vertex(365, 475); brush.vertex(245, 475);
  brush.endShape(true);
  // snowy roof
  brush.fill("#dfe4ee", 230);
  brush.beginShape(0.2);
  brush.vertex(228, 405); brush.vertex(305, 345); brush.vertex(382, 405); brush.vertex(370, 412); brush.vertex(240, 412);
  brush.endShape(true);
  // chimney
  brush.fill("#2a1a14", 230);
  brush.beginShape(0);
  brush.vertex(335, 350); brush.vertex(352, 350); brush.vertex(352, 385); brush.vertex(335, 372);
  brush.endShape(true);
  // windows
  brush.fill("#ffb640", 240);
  brush.fillBleed(0.2);
  brush.beginShape(0);
  brush.vertex(262, 420); brush.vertex(292, 420); brush.vertex(292, 448); brush.vertex(262, 448);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(318, 420); brush.vertex(348, 420); brush.vertex(348, 448); brush.vertex(318, 448);
  brush.endShape(true);
  brush.fill("#ffe08a", 200);
  brush.circle(277, 434, 7, 0.3);
  brush.circle(333, 434, 7, 0.3);
  // tall thin smoke column (vertical emphasis)
  brush.fill("#5a5870", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(336, 345); brush.vertex(352, 345); brush.vertex(362, 250); brush.vertex(345, 150);
  brush.vertex(360, 40); brush.vertex(338, 40); brush.vertex(325, 150); brush.vertex(340, 250);
  brush.endShape(true);
}
