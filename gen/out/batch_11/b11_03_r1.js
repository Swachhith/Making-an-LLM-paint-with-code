async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbe6c8");
  brush.noStroke();

  // sky bands: magenta top to orange to yellow near horizon
  const sky = [["#8a1f6e", 0, 130], ["#d6336c", 110, 250], ["#f36a2a", 230, 360], ["#fbb13c", 340, 430]];
  // each band is split in two around the sun so the disc stays unpainted paper
  const sx = 200, sy = 405, sr = 52;
  for (const s of sky) {
    brush.fill(s[0], 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    const t = s[1], b = s[2];
    if (b < sy - sr || t > sy + sr) {
      brush.beginShape(0.5);
      brush.vertex(-30, t); brush.vertex(630, t - 10); brush.vertex(630, b); brush.vertex(-30, b + 10);
      brush.endShape(true);
    } else {
      brush.beginShape(0.3);
      brush.vertex(-30, t); brush.vertex(sx - sr, t); brush.vertex(sx - sr, sy); brush.vertex(sx - sr * 0.7, sy + sr * 0.7); brush.vertex(sx - sr * 0.2, b); brush.vertex(-30, b + 10);
      brush.endShape(true);
      brush.beginShape(0.3);
      brush.vertex(sx + sr, t - 5); brush.vertex(630, t - 10); brush.vertex(630, b); brush.vertex(sx + sr * 0.2, b); brush.vertex(sx + sr * 0.7, sy + sr * 0.7); brush.vertex(sx + sr, sy);
      brush.endShape(true);
      brush.beginShape(0.5);
      brush.vertex(sx - sr, t); brush.vertex(sx + sr, t - 5); brush.vertex(sx + sr * 0.8, sy - sr * 0.8); brush.vertex(sx, sy - sr - 4); brush.vertex(sx - sr * 0.8, sy - sr * 0.8);
      brush.endShape(true);
    }
  }

  // low sun off-centre, left of middle, left as a warm glow
  brush.fill("#ffd84a", 200);
  brush.fillBleed(0.2);
  brush.circle(200, 405, 44, 0.15);

  // distant mesa silhouettes
  brush.fill("#7a2a4a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 440); brush.vertex(40, 410); brush.vertex(140, 408); brush.vertex(170, 430); brush.vertex(330, 432);
  brush.vertex(360, 395); brush.vertex(480, 392); brush.vertex(510, 425); brush.vertex(620, 430); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);

  // desert floor
  brush.fill("#b8442a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 450); brush.vertex(620, 445); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6e1f2a", 210);
  brush.beginShape(0.6);
  brush.vertex(-20, 530); brush.vertex(250, 505); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // saguaro cactus, right side, dark silhouette
  const c = "#2a1030";
  for (let pass = 0; pass < 3; pass++) {
    brush.fill(c, 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.35);
    // trunk
    brush.beginShape(0.3);
    brush.vertex(440, 540); brush.vertex(438, 260); brush.vertex(452, 240); brush.vertex(468, 240); brush.vertex(478, 260); brush.vertex(476, 540);
    brush.endShape(true);
    // left arm
    brush.beginShape(0.5);
    brush.vertex(440, 400); brush.vertex(400, 395); brush.vertex(392, 320); brush.vertex(405, 305); brush.vertex(418, 320); brush.vertex(418, 375); brush.vertex(440, 378);
    brush.endShape(true);
    // right arm
    brush.beginShape(0.5);
    brush.vertex(476, 360); brush.vertex(510, 355); brush.vertex(512, 290); brush.vertex(525, 278); brush.vertex(538, 292); brush.vertex(534, 380); brush.vertex(476, 385);
    brush.endShape(true);
  }
  // shadow of cactus on sand
  brush.fill("#3a0f25", 180);
  brush.beginShape(0.5);
  brush.vertex(430, 540); brush.vertex(300, 560); brush.vertex(200, 575); brush.vertex(310, 585); brush.vertex(480, 552);
  brush.endShape(true);
}
