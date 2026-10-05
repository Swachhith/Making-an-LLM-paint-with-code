async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef1ee");
  brush.noStroke();

  // soft misty sky, lighter near the top
  brush.fill("#b8c6d0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#9aa8b8", 140);
  brush.beginShape(0.6);
  brush.vertex(-20, 120); brush.vertex(620, 110); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);

  // rolling cloud bank, lower half of canvas
  brush.fill("#c8d8e0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 300); brush.vertex(150, 280); brush.vertex(320, 310); brush.vertex(470, 290); brush.vertex(620, 300);
  brush.vertex(620, 360); brush.vertex(300, 370); brush.vertex(120, 350); brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#b8c8d8", 150);
  brush.beginShape(0.7);
  brush.vertex(-20, 340); brush.vertex(220, 320); brush.vertex(420, 345); brush.vertex(620, 330); brush.vertex(620, 380); brush.vertex(340, 385); brush.vertex(-20, 385);
  brush.endShape(true);

  // three peaks: a big one off-centre right
  let peaks = [[220, 420, 190, 320], [360, 400, 140, 260], [490, 370, 90, 210]];
  for (let p of peaks) {
    let [x, base, w, h] = p;
    brush.fill("#8a9aa8", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - w, base); brush.vertex(x, base - h); brush.vertex(x + w, base);
    brush.endShape(true);
    brush.fill("#6e7f90", 190);
    brush.beginShape(0.5);
    brush.vertex(x - w * 0.6, base); brush.vertex(x, base - h * 0.9); brush.vertex(x + w * 0.6, base);
    brush.endShape(true);
  }
  // a few smaller distant peaks
  brush.fill("#7f8f9e", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(100, 350); brush.vertex(150, 320); brush.vertex(200, 350);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(470, 330); brush.vertex(520, 300); brush.vertex(570, 330);
  brush.endShape(true);

  // far valley shadow, cool
  brush.fill("#9aa8b8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(220, 370); brush.vertex(470, 385); brush.vertex(620, 375); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7f8f9e", 140);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(220, 460); brush.vertex(470, 475); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
