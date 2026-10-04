async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ead9");
  brush.noStroke();
  // big sky
  brush.fill("#aaa89a", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#6e6658", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 40); brush.vertex(160, 75); brush.vertex(320, 50); brush.vertex(480, 95); brush.vertex(620, 60);
  brush.vertex(620, -20); brush.vertex(-20, -20);
  brush.endShape(true);
  brush.fill("#7a7264", 175);
  brush.beginShape(0.8);
  brush.vertex(40, 205); brush.vertex(150, 160); brush.vertex(270, 178); brush.vertex(370, 150); brush.vertex(480, 195);
  brush.vertex(390, 240); brush.vertex(200, 245);
  brush.endShape(true);
  brush.fill("#dcb478", 185);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(240, 330); brush.vertex(390, 298); brush.vertex(560, 312); brush.vertex(610, 355); brush.vertex(420, 368); brush.vertex(290, 360);
  brush.endShape(true);
  // hills
  brush.fill("#6a6c54", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 435); brush.vertex(90, 410); brush.vertex(210, 428); brush.vertex(340, 405); brush.vertex(470, 425); brush.vertex(620, 408);
  brush.vertex(620, 462); brush.vertex(-20, 462);
  brush.endShape(true);
  // valley floor, light ochre
  brush.fill("#a8945a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 455); brush.vertex(620, 452); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // river as a chain of silvery washes, widening toward us in S-bends
  let path = [[330, 460, 4], [300, 470, 6], [330, 482, 8], [390, 496, 10], [400, 510, 12], [340, 526, 15],
              [250, 542, 18], [190, 562, 22], [215, 588, 26], [300, 612, 30]];
  for (let p of path) {
    brush.fill("#8aa0ac", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.4);
    brush.circle(p[0], p[1], p[2] + 4, 0.4);
  }
  for (let i = 0; i < path.length - 1; i++) {
    let a = path[i], b = path[i + 1];
    brush.fill("#9ab0b8", 215);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.3);
    brush.vertex(a[0], a[1] - a[2]); brush.vertex(b[0], b[1] - b[2]); brush.vertex(b[0], b[1] + b[2]); brush.vertex(a[0], a[1] + a[2]);
    brush.endShape(true);
  }
  // dark umber field shapes hugging the banks
  brush.fill("#5a4a28", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(150, 548); brush.vertex(165, 575); brush.vertex(180, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(620, 505); brush.vertex(430, 512); brush.vertex(360, 548); brush.vertex(260, 580); brush.vertex(330, 620); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#7a6a3a", 185);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(270, 470); brush.vertex(360, 500); brush.vertex(220, 525); brush.vertex(-20, 520);
  brush.endShape(true);
  // tree clumps
  let trees = [[70, 450, 16], [480, 452, 13], [560, 472, 22], [230, 520, 16], [440, 530, 20], [110, 590, 28], [420, 470, 11]];
  for (let t of trees) {
    brush.fill("#44462a", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.circle(t[0], t[1], t[2], 0.8);
    brush.fill("#262816", 205);
    brush.circle(t[0] + 4, t[1] + 4, t[2] * 0.6, 0.7);
  }
}
