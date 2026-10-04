async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf0e0");
  brush.noStroke();

  brush.fill("#ff7a1a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 190); brush.vertex(620, 180); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#e0206a", 220);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#6a1a8a", 210);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 130);
  brush.endShape(true);
  brush.fill("#ffd23a", 245);
  brush.fillBleed(0.2);
  brush.circle(440, 380, 60, 0.2);
  brush.circle(440, 380, 40, 0.15);
  // cloud streaks
  brush.fill("#a01a5a", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 280); brush.vertex(250, 265); brush.vertex(330, 285); brush.vertex(-20, 305);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(330, 320); brush.vertex(620, 300); brush.vertex(620, 325); brush.vertex(420, 335);
  brush.endShape(true);

  // sea
  brush.fill("#1a3a8a", 230);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.3);
  brush.vertex(-20, 395); brush.vertex(620, 392); brush.vertex(620, 470); brush.vertex(-20, 475);
  brush.endShape(true);
  brush.fill("#ffb03a", 220);
  brush.beginShape(0.3);
  brush.vertex(400, 405); brush.vertex(480, 405); brush.vertex(490, 460); brush.vertex(390, 460);
  brush.endShape(true);
  // foam line left paper-ish: wet sand below
  brush.fill("#e0503a", 215);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 482); brush.vertex(620, 476); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#ff9a3a", 190);
  brush.beginShape(0.5);
  brush.vertex(360, 490); brush.vertex(520, 488); brush.vertex(560, 620); brush.vertex(330, 620);
  brush.endShape(true);
  brush.fill("#7a2a3a", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 560); brush.vertex(300, 545); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // figure: 3 passes, taller, mid-stride
  const F = "#150a1e";
  for (let p = 0; p < 3; p++) {
    brush.fill(F, 245);
    brush.fillBleed(0.16);
    brush.fillTexture(0.3, 0.4);
    brush.circle(185, 318, 16, 0.2);
    brush.beginShape(0.3);
    brush.vertex(166, 338); brush.vertex(204, 338); brush.vertex(208, 425); brush.vertex(162, 425);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(166, 418); brush.vertex(186, 418); brush.vertex(158, 500); brush.vertex(140, 497);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(184, 418); brush.vertex(204, 418); brush.vertex(226, 496); brush.vertex(208, 500);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(198, 344); brush.vertex(222, 405); brush.vertex(206, 410); brush.vertex(190, 356);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(170, 344); brush.vertex(150, 400); brush.vertex(164, 406); brush.vertex(180, 356);
    brush.endShape(true);
  }
  brush.fill(F, 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(140, 502); brush.vertex(228, 502); brush.vertex(210, 600); brush.vertex(160, 600);
  brush.endShape(true);
  // footprints
  brush.fill("#7a2a3a", 220);
  for (const f of [[250, 510], [290, 520], [330, 528], [372, 538]]) brush.circle(f[0], f[1], 6, 0.4);
  brush.fill("#1a3a8a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 466); brush.vertex(620, 482); brush.vertex(-20, 488);
  brush.endShape(true);
  brush.fill("#150a1e", 220);
  brush.beginShape(0.5);
  brush.vertex(300, 150); brush.vertex(318, 138); brush.vertex(330, 148); brush.vertex(342, 136); brush.vertex(360, 150); brush.vertex(330, 158);
  brush.endShape(true);
}
