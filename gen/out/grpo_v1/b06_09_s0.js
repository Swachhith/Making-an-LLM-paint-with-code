async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d9");
  brush.noStroke();
  // muted earthy ground wash
  brush.fill("#b89c7a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 520); brush.vertex(600, 470); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stems
  brush.fill("#5e5a4a", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(320, 420); brush.vertex(328, 420); brush.vertex(328, 600); brush.vertex(320, 600);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(470, 420); brush.vertex(478, 420); brush.vertex(478, 600); brush.vertex(470, 600);
  brush.endShape(true);
  // open anemone: six petals, dark centre
  let cx = 260, cy = 270;
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 12;
    brush.fill("#9e8372", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a) * 18, cy + sin(a) * 18);
    brush.vertex(cx + cos(a - 17) * 70, cy + sin(a - 17) * 70);
    brush.vertex(cx + cos(a - 8) * 90, cy + sin(a - 8) * 90);
    brush.vertex(cx + cos(a + 8) * 90, cy + sin(a + 8) * 90);
    brush.vertex(cx + cos(a + 17) * 70, cy + sin(a + 17) * 70);
    brush.endShape(true);
  }
  brush.fill("#5a4234", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 34, 0.5);
  // closed bud
  brush.fill("#8f7464", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(520, 220); brush.vertex(538, 210); brush.vertex(550, 230); brush.vertex(530, 245); brush.vertex(510, 230);
  brush.endShape(true);
  brush.fill("#4a3428", 225);
  brush.fillBleed(0.15);
  brush.circle(530, 230, 16, 0.4);
  // a few loose petals behind
  brush.fill("#a89280", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(350, 160, 26, 0.7);
  brush.circle(460, 350, 22, 0.7);
  brush.circle(160, 420, 20, 0.7);
}
