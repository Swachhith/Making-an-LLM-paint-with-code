async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4e2");
  brush.noStroke();
  // sky bands: magenta above, orange near the hills
  const skies = [["#b8286a", -20, 90], ["#e8452c", 70, 180], ["#f7962a", 160, 270]];
  for (const [c, y0, y1] of skies) {
    brush.fill(c, 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(-20, y0); brush.vertex(620, y0 + 10); brush.vertex(620, y1); brush.vertex(-20, y1 - 10);
    brush.endShape(true);
  }
  // sun sitting in the dip of the hills
  brush.fill("#ffd23a", 240);
  brush.fillBleed(0.25);
  brush.circle(250, 250, 50, 0.3);
  // rolling hills, back to front
  brush.fill("#7a2a6a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(-20, 270); brush.vertex(80, 235); brush.vertex(190, 258); brush.vertex(300, 262); brush.vertex(420, 225); brush.vertex(540, 245); brush.vertex(620, 238); brush.vertex(620, 305); brush.vertex(-20, 305);
  brush.endShape(true);
  brush.fill("#4a1d58", 230);
  brush.beginShape(0.9);
  brush.vertex(-20, 285); brush.vertex(120, 262); brush.vertex(260, 290); brush.vertex(400, 270); brush.vertex(520, 282); brush.vertex(620, 268); brush.vertex(620, 305); brush.vertex(-20, 305);
  brush.endShape(true);
  // water: mirrored bands, darker
  const waters = [["#e07a28", 300, 360], ["#c43a30", 350, 460], ["#8e2464", 450, 620]];
  for (const [c, y0, y1] of waters) {
    brush.fill(c, 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-20, y0); brush.vertex(620, y0); brush.vertex(620, y1); brush.vertex(-20, y1);
    brush.endShape(true);
  }
  // reflected hills
  brush.fill("#3a1848", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 305); brush.vertex(620, 305); brush.vertex(620, 330); brush.vertex(520, 322); brush.vertex(400, 335); brush.vertex(260, 318); brush.vertex(120, 342); brush.vertex(-20, 322);
  brush.endShape(true);
  // the sun's broken path across the water
  for (let i = 0; i < 9; i++) {
    let y = 330 + i * 28;
    let w = 30 + i * 9;
    brush.fill("#ffc93a", 220 - i * 8);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(250 - w, y); brush.vertex(250 + w, y - 3); brush.vertex(250 + w * 0.8, y + 9); brush.vertex(250 - w * 0.8, y + 10);
    brush.endShape(true);
  }
}
