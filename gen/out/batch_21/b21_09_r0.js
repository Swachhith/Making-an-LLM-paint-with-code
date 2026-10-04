async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f6f7");
  brush.noStroke();

  // pale sky and a sliver of sea top right
  brush.fill("#b9d3e3", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 110);
  brush.endShape(true);
  brush.fill("#5f9bbd", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(330, 92); brush.vertex(620, 84); brush.vertex(620, 170); brush.vertex(330, 170);
  brush.endShape(true);

  // houses stepping up the hill behind, small cool roofs
  let back = [[20, 120, 90, 60, "#8aa6b8"], [120, 100, 80, 70, "#b67a66"], [210, 110, 100, 60, "#7d98aa"], [330, 150, 90, 50, "#9fb2bd"], [430, 160, 110, 50, "#b67a66"]];
  for (let h of back) {
    let [x, y, w, hh, roof] = h;
    brush.fill("#c6d2d8", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(x + w * 0.6, y); brush.vertex(x + w, y); brush.vertex(x + w, y + hh); brush.vertex(x + w * 0.6, y + hh);
    brush.endShape(true);
    brush.fill(roof, 200);
    brush.beginShape(0.1);
    brush.vertex(x - 4, y); brush.vertex(x + w * 0.5, y - 22); brush.vertex(x + w + 4, y);
    brush.endShape(true);
  }

  // the big house, close up: shadowed side wall on the right, front left as paper
  brush.fill("#9eb3c4", 190);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.05);
  brush.vertex(400, 230); brush.vertex(600, 200); brush.vertex(600, 620); brush.vertex(400, 620);
  brush.endShape(true);
  brush.fill("#7f97aa", 170);
  brush.beginShape(0.3);
  brush.vertex(400, 230); brush.vertex(460, 222); brush.vertex(440, 620); brush.vertex(400, 620);
  brush.endShape(true);
  // roof: slate blue, overhanging, casting shadow under the eave
  brush.fill("#476b88", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.05);
  brush.vertex(20, 240); brush.vertex(220, 140); brush.vertex(420, 240); brush.vertex(400, 252); brush.vertex(220, 160); brush.vertex(40, 252);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(220, 140); brush.vertex(560, 110); brush.vertex(610, 190); brush.vertex(420, 240);
  brush.endShape(true);
  brush.fill("#a9bccb", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(44, 254); brush.vertex(398, 254); brush.vertex(398, 276); brush.vertex(44, 272);
  brush.endShape(true);

  // shuttered windows and a door on the white front
  let wins = [[80, 310], [280, 310], [80, 450]];
  for (let w of wins) {
    brush.fill("#2f6f96", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    brush.vertex(w[0] - 22, w[1]); brush.vertex(w[0], w[1]); brush.vertex(w[0], w[1] + 80); brush.vertex(w[0] - 22, w[1] + 80);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(w[0] + 50, w[1]); brush.vertex(w[0] + 72, w[1]); brush.vertex(w[0] + 72, w[1] + 80); brush.vertex(w[0] + 50, w[1] + 80);
    brush.endShape(true);
    brush.fill("#3b4a58", 200);
    brush.beginShape(0);
    brush.vertex(w[0] + 2, w[1] + 4); brush.vertex(w[0] + 48, w[1] + 4); brush.vertex(w[0] + 48, w[1] + 76); brush.vertex(w[0] + 2, w[1] + 76);
    brush.endShape(true);
  }
  brush.fill("#2a5e82", 230);
  brush.beginShape(0);
  brush.vertex(250, 440); brush.vertex(330, 440); brush.vertex(330, 620); brush.vertex(250, 620);
  brush.endShape(true);
  // pot of geraniums for a single warm note
  brush.fill("#c07256", 210);
  brush.circle(370, 590, 20, 0.3);
  brush.fill("#d64a5a", 220);
  brush.circle(362, 562, 12, 0.6);
  brush.circle(380, 566, 10, 0.6);
  brush.fill("#5e8a6a", 200);
  brush.circle(372, 574, 10, 0.6);
}
