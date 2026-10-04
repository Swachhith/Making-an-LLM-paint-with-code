async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e9ec");
  brush.noStroke();

  // top: violet into magenta into hot pink at the horizon
  let sky = [["#6a3f8f", -20, 110], ["#b0408a", 80, 200], ["#ef6a8e", 170, 260], ["#f7a07a", 230, 300]];
  for (let s of sky) {
    brush.fill(s[0], 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(-20, s[1]); brush.vertex(620, s[1] + 10); brush.vertex(620, s[2]); brush.vertex(-20, s[2] - 10);
    brush.endShape(true);
  }
  // streaks of cloud
  brush.fill("#7c2f7a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(60, 150); brush.vertex(260, 138); brush.vertex(330, 150); brush.vertex(200, 162);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(360, 110); brush.vertex(560, 100); brush.vertex(600, 115); brush.vertex(420, 124);
  brush.endShape(true);

  // strip of fields at the horizon, dark
  brush.fill("#3b2a4a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 296); brush.vertex(150, 288); brush.vertex(330, 294); brush.vertex(620, 286); brush.vertex(620, 318); brush.vertex(-20, 318);
  brush.endShape(true);
  brush.fill("#50613a", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 305); brush.vertex(620, 300); brush.vertex(620, 322); brush.vertex(-20, 324);
  brush.endShape(true);

  // water: mirrored bands, a bit darker and broken
  let water = [["#f7a07a", 318, 350], ["#ef6a8e", 345, 420], ["#b0408a", 410, 510], ["#6a3f8f", 500, 620]];
  for (let w of water) {
    brush.fill(w[0], 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(-20, w[1]); brush.vertex(620, w[1] - 6); brush.vertex(620, w[2]); brush.vertex(-20, w[2] + 6);
    brush.endShape(true);
  }
  // reflected cloud streaks and ripples
  brush.fill("#7c2f7a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(80, 470); brush.vertex(250, 462); brush.vertex(320, 474); brush.vertex(180, 486);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    let y = 360 + i * 36;
    brush.fill("#fbd0c0", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(120 + i * 30, y); brush.vertex(260 + i * 25, y - 3); brush.vertex(270 + i * 25, y + 4); brush.vertex(130 + i * 30, y + 6);
    brush.endShape(true);
  }
  // the reflected shore
  brush.fill("#2e2240", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 322); brush.vertex(620, 320); brush.vertex(620, 336); brush.vertex(-20, 340);
  brush.endShape(true);
}
