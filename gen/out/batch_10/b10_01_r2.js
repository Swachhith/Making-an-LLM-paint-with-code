async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece4d6");
  brush.noStroke();
  // wet-in-wet dusk sky: indigo top melting into rose and apricot
  brush.fill("#3f3a86", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200);
  brush.vertex(380, 240); brush.vertex(140, 210); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#3f3a86", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 130);
  brush.endShape(true);
  brush.fill("#c85a78", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 190); brush.vertex(220, 160); brush.vertex(470, 200);
  brush.vertex(620, 170); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#f09a4a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 280); brush.vertex(260, 250); brush.vertex(620, 275);
  brush.vertex(620, 370); brush.vertex(-20, 370);
  brush.endShape(true);
  // splashes and blooms dropped into the wet sky
  const spl = [[70, 90, 34], [190, 50, 22], [330, 110, 40], [470, 60, 26], [560, 140, 30], [120, 200, 20], [420, 190, 24]];
  for (let i = 0; i < spl.length; i++) {
    brush.fill(i % 2 ? "#7a4a9a" : "#e0708a", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(spl[i][0], spl[i][1], spl[i][2], 0.9);
  }
  // drips running down from the sky wash
  for (let i = 0; i < 6; i++) {
    const x = 50 + i * 100 + (i % 2) * 20;
    const len = 25 + (i * 37) % 35;
    brush.fill("#5c3f86", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 16, 175); brush.vertex(x + 16, 175); brush.vertex(x + 8, 170 + len); brush.vertex(x, 180 + len); brush.vertex(x - 8, 170 + len);
    brush.endShape(true);
    brush.circle(x, 180 + len, 11, 0.8);
  }
  // distant blue hills
  brush.fill("#3a3f70", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 380); brush.vertex(90, 335); brush.vertex(210, 358); brush.vertex(330, 325);
  brush.vertex(470, 350); brush.vertex(620, 330); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  // wide dark field, two passes
  brush.fill("#2f4a44", 220);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 405); brush.vertex(250, 396); brush.vertex(620, 408);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1b2a2c", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(180, 450); brush.vertex(420, 490);
  brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 8; i++) {
    brush.fill(i % 3 ? "#16211f" : "#4a5f3a", 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(20 + i * 80, 525 + (i % 3) * 25, 26 + (i % 2) * 12, 0.9);
  }
  // window glow on paper first, a halo of warm light
  brush.fill("#ffb640", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.circle(372, 388, 34, 0.5);
  brush.fill("#ffd35a", 240);
  brush.fillBleed(0.15);
  brush.circle(372, 390, 10, 0.3);
  // house painted around the window, three passes
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#1d1528", 225);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0);
    brush.vertex(330, 372); brush.vertex(363, 372); brush.vertex(363, 425); brush.vertex(330, 425);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(381, 372); brush.vertex(412, 372); brush.vertex(412, 425); brush.vertex(381, 425);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(330, 400); brush.vertex(412, 400); brush.vertex(412, 426); brush.vertex(330, 426);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(322, 376); brush.vertex(371, 336); brush.vertex(420, 376);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(392, 344); brush.vertex(407, 344); brush.vertex(407, 366); brush.vertex(392, 366);
    brush.endShape(true);
  }
  // warm light spilling onto the field
  brush.fill("#e0a050", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(355, 428); brush.vertex(395, 428); brush.vertex(420, 470); brush.vertex(330, 470);
  brush.endShape(true);
  // trees beside the house
  brush.fill("#141d1e", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(445, 372, 28, 0.7);
  brush.circle(462, 392, 22, 0.7);
  brush.circle(300, 400, 18, 0.7);
  brush.fill("#141d1e", 200);
  brush.circle(448, 378, 20, 0.6);
}
