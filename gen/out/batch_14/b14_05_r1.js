async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfaf3");
  randomSeed(515);
  brush.noStroke();

  // big loose splashes of warm and cool behind, bleeding into each other
  const splash = [["#f39a4c", 80, 120], ["#6fbad6", 480, 90], ["#ea6a8c", 520, 330], ["#f4cc4e", 60, 380], ["#8fd0c0", 300, 60]];
  for (const s of splash) {
    for (let k = 0; k < 2; k++) {
      brush.fill(s[0], 170 - k * 20);
      brush.fillBleed(0.3);
      brush.fillTexture(0.6, 0.6);
      brush.beginShape(1);
      for (let a = 0; a < 360; a += 45) {
        const r = random(60, 130);
        brush.vertex(s[1] + cos(a) * r + k * 20, s[2] + sin(a) * r * 0.8);
      }
      brush.endShape(true);
    }
  }

  // dress: cobalt, turned slightly, two passes and a shadowed side
  brush.fill("#2a76b8", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.6);
  brush.vertex(100, 620); brush.vertex(130, 470); brush.vertex(225, 425);
  brush.vertex(300, 450); brush.vertex(375, 425); brush.vertex(465, 470); brush.vertex(500, 620);
  brush.endShape(true);
  brush.fill("#164e86", 190);
  brush.beginShape(0.6);
  brush.vertex(330, 620); brush.vertex(360, 470); brush.vertex(440, 480); brush.vertex(480, 620);
  brush.endShape(true);
  // neckline skin
  brush.fill("#e39a72", 215);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(262, 395); brush.vertex(338, 395); brush.vertex(345, 440); brush.vertex(300, 480); brush.vertex(255, 440);
  brush.endShape(true);

  // hair, auburn mass behind the face
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#5a2410" : "#9a4a22", 210);
    brush.fillBleed(0.28);
    brush.beginShape(0.8);
    brush.vertex(228 + k * 8, 260); brush.vertex(372 - k * 8, 260); brush.vertex(395 - k * 10, 400);
    brush.vertex(360, 440); brush.vertex(300, 380); brush.vertex(240, 440); brush.vertex(205 + k * 10, 400);
    brush.endShape(true);
  }
  // face: warm skin, two passes, cooler shadow side
  brush.fill("#eaa27a", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(255, 275); brush.vertex(345, 275); brush.vertex(342, 350); brush.vertex(300, 392); brush.vertex(258, 350);
  brush.endShape(true);
  brush.fill("#c7704c", 180);
  brush.beginShape(0.8);
  brush.vertex(310, 280); brush.vertex(345, 280); brush.vertex(342, 350); brush.vertex(305, 388); brush.vertex(318, 330);
  brush.endShape(true);
  // cheeks, lips, eyes
  brush.fill("#e0605a", 170);
  brush.circle(275, 340, 11, 0.5);
  brush.circle(330, 340, 10, 0.5);
  brush.fill("#b8323a", 220);
  brush.beginShape(0.6);
  brush.vertex(288, 362); brush.vertex(313, 362); brush.vertex(300, 372);
  brush.endShape(true);
  brush.fill("#3a2018", 220);
  brush.circle(282, 318, 4, 0.2);
  brush.circle(320, 318, 4, 0.2);
  // hat shadow on face
  brush.fill("#9a5a48", 170);
  brush.beginShape(0.6);
  brush.vertex(252, 272); brush.vertex(348, 272); brush.vertex(342, 302); brush.vertex(300, 295); brush.vertex(258, 302);
  brush.endShape(true);

  // the wide hat, tilted, painted in three passes
  const hats = [["#e7b54c", 210, 0], ["#cf9230", 170, 12], ["#a86a1c", 150, 24]];
  for (const h of hats) {
    brush.fill(h[0], h[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.8);
    brush.vertex(50 + h[2], 300); brush.vertex(140 + h[2], 230); brush.vertex(300, 205);
    brush.vertex(460 - h[2], 222); brush.vertex(560 - h[2], 270); brush.vertex(450, 296);
    brush.vertex(300, 285); brush.vertex(160, 300);
    brush.endShape(true);
    if (h[2] > 12) break;
  }
  brush.fill("#c88a26", 210);
  brush.beginShape(0.7);
  brush.vertex(222, 245); brush.vertex(238, 170); brush.vertex(300, 150); brush.vertex(362, 168); brush.vertex(378, 245);
  brush.endShape(true);
  brush.fill("#d22a44", 225);
  brush.beginShape(0.5);
  brush.vertex(222, 225); brush.vertex(378, 225); brush.vertex(380, 248); brush.vertex(220, 248);
  brush.endShape(true);

  // drips from the hat brim and dress hem, and flicked splatters
  for (let i = 0; i < 5; i++) {
    const x = random(90, 520), y = 285, len = random(40, 90);
    brush.fill("#cf9230", 170);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 3, y + len); brush.vertex(x - 3, y + len);
    brush.endShape(true);
    brush.circle(x, y + len + 4, 6, 0.3);
  }
  for (let i = 0; i < 40; i++) {
    brush.fill(random(["#2a76b8", "#d22a44", "#e7b54c", "#ea6a8c"]), random(180, 235));
    brush.fillBleed(0.1);
    brush.circle(random(30, 570), random(30, 570), random(2, 7), 0.4);
  }
}
