async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6d8");
  brush.noStroke();

  // bold sky, cobalt top into turquoise, lemon at the hill line
  brush.fill("#1f4fb8", 220);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#18a7c2", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, 200); brush.vertex(620, 170); brush.vertex(620, 380); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#ffc93a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 360); brush.vertex(620, 340); brush.vertex(620, 470); brush.vertex(-20, 480);
  brush.endShape(true);

  // hill: one big dark curve, crest right of centre
  brush.fill("#1e3a24", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 520); brush.vertex(150, 470); brush.vertex(320, 432); brush.vertex(420, 428); brush.vertex(520, 445); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0f2418", 220);
  brush.beginShape(0.5);
  brush.vertex(-20, 560); brush.vertex(300, 500); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the child, silhouetted on the crest, arm up to the string
  let ink = "#1a1328";
  brush.fill(ink, 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(392, 352, 11, 0.2);
  brush.beginShape(0.3); // body
  brush.vertex(380, 364); brush.vertex(404, 364); brush.vertex(410, 400); brush.vertex(376, 402);
  brush.endShape(true);
  brush.beginShape(0.3); // legs mid-stride
  brush.vertex(380, 398); brush.vertex(394, 398); brush.vertex(384, 432); brush.vertex(368, 432);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(392, 398); brush.vertex(408, 398); brush.vertex(418, 432); brush.vertex(402, 434);
  brush.endShape(true);
  brush.beginShape(0.3); // raised arm
  brush.vertex(382, 370); brush.vertex(368, 336); brush.vertex(356, 322); brush.vertex(366, 316); brush.vertex(382, 332); brush.vertex(396, 368);
  brush.endShape(true);
  // second pass to deepen
  brush.fill(ink, 220);
  brush.circle(392, 352, 9, 0.2);
  brush.beginShape(0.3);
  brush.vertex(382, 366); brush.vertex(402, 366); brush.vertex(406, 398); brush.vertex(380, 398);
  brush.endShape(true);

  // kite high left: red and yellow diamond
  brush.fill("#e2242f", 235);
  brush.fillBleed(0.18);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0);
  brush.vertex(140, 70); brush.vertex(175, 110); brush.vertex(140, 170); brush.vertex(105, 110);
  brush.endShape(true);
  brush.fill("#ffd21f", 235);
  brush.beginShape(0);
  brush.vertex(140, 70); brush.vertex(175, 110); brush.vertex(140, 110);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(140, 110); brush.vertex(105, 110); brush.vertex(140, 170);
  brush.endShape(true);

  // string as a sagging line of small dots, tail as bows
  for (let i = 0; i <= 40; i++) {
    let t = i / 40;
    let x = lerp(140, 360, t);
    let y = lerp(170, 320, t) + sin(t * 180) * 40;
    brush.fill("#1a1328", 220);
    brush.fillBleed(0);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, 1.6, 0.1);
  }
  let bows = [[130, 190], [118, 215], [124, 240], [110, 262]];
  for (let b of bows) {
    brush.fill("#ff5aa0", 230);
    brush.fillBleed(0.15);
    brush.circle(b[0], b[1], 6, 0.4);
  }
}
