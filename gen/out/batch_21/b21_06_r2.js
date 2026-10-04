async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4c8");
  brush.noStroke();

  // sky: cobalt top, turquoise, a blazing orange-yellow near the hill
  brush.fill("#1c3fa8", 230);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#1c3fa8", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(-20, 130);
  brush.endShape(true);
  brush.fill("#14a6bf", 205);
  brush.beginShape(0.4);
  brush.vertex(-20, 190); brush.vertex(620, 160); brush.vertex(620, 350); brush.vertex(-20, 370);
  brush.endShape(true);
  brush.fill("#ff9d1c", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 360); brush.vertex(620, 320); brush.vertex(620, 470); brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#ffd23a", 200);
  brush.beginShape(0.5);
  brush.vertex(200, 400); brush.vertex(620, 370); brush.vertex(620, 450); brush.vertex(250, 450);
  brush.endShape(true);

  // low sun blazing behind the hill, right
  brush.fill("#fff27a", 230);
  brush.fillBleed(0.3);
  brush.circle(520, 430, 40, 0.3);

  // hill: very dark, three passes
  for (let k = 0; k < 3; k++) {
    brush.fill(k == 2 ? "#0a1a10" : "#123020", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-20, 520 + k * 10); brush.vertex(150, 474 + k * 10); brush.vertex(320, 440 + k * 12); brush.vertex(420, 436 + k * 12); brush.vertex(520, 452 + k * 10); brush.vertex(620, 476 + k * 10); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }

  // the child silhouette, painted three times so it goes near-black
  for (let k = 0; k < 3; k++) {
    brush.fill("#140c22", 240);
    brush.fillBleed(0.12);
    brush.fillTexture(0.35, 0.35);
    brush.circle(398, 344, 14, 0.15);
    brush.beginShape(0.3);
    brush.vertex(382, 358); brush.vertex(412, 358); brush.vertex(420, 404); brush.vertex(376, 406);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(380, 400); brush.vertex(398, 400); brush.vertex(384, 444); brush.vertex(364, 444);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(396, 400); brush.vertex(414, 400); brush.vertex(428, 444); brush.vertex(408, 446);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(384, 364); brush.vertex(366, 326); brush.vertex(352, 306); brush.vertex(366, 298); brush.vertex(384, 320); brush.vertex(400, 362);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(410, 364); brush.vertex(438, 384); brush.vertex(430, 396); brush.vertex(404, 380);
    brush.endShape(true);
  }

  // kite high left
  brush.fill("#e81c2a", 240);
  brush.fillBleed(0.18);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0);
  brush.vertex(130, 60); brush.vertex(172, 108); brush.vertex(130, 178); brush.vertex(88, 108);
  brush.endShape(true);
  brush.fill("#ffd21f", 240);
  brush.beginShape(0);
  brush.vertex(130, 60); brush.vertex(172, 108); brush.vertex(130, 108);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(130, 108); brush.vertex(88, 108); brush.vertex(130, 178);
  brush.endShape(true);

  // string: dense small dark dots, easing down to the hand
  for (let i = 0; i <= 90; i++) {
    let t = i / 90;
    let x = lerp(130, 358, t);
    let y = lerp(178, 302, t) + sin(t * 180) * 36;
    brush.fill("#140c22", 250);
    brush.fillBleed(0);
    brush.fillTexture(0.1, 0.1);
    brush.circle(x, y, 2.2, 0.05);
  }
  // tail of bows fluttering
  let bows = [[126, 196], [114, 220], [122, 244], [106, 266], [116, 290]];
  for (let b of bows) {
    brush.fill("#ff2a8a", 235);
    brush.fillBleed(0.15);
    brush.circle(b[0], b[1], 7, 0.4);
  }
}
