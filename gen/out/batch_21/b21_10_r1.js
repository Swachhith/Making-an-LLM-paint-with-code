async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  brush.noStroke();

  // wide sky, cerulean high, clearing to paper near the peaks
  brush.fill("#6f9ccb", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 190); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#a9c3dc", 175);
  brush.beginShape(0.5);
  brush.vertex(-20, 150); brush.vertex(620, 130); brush.vertex(620, 300); brush.vertex(-20, 330);
  brush.endShape(true);
  // one high wisp
  brush.fill("#8fb0d4", 170);
  brush.beginShape(0.8);
  brush.vertex(60, 80); brush.vertex(240, 60); brush.vertex(300, 74); brush.vertex(120, 96);
  brush.endShape(true);

  // distant peak on the left
  brush.fill("#aeb0cc", 185);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.1);
  brush.vertex(-20, 450); brush.vertex(60, 360); brush.vertex(130, 300); brush.vertex(170, 330); brush.vertex(260, 450);
  brush.endShape(true);
  brush.fill("#9194b8", 170);
  brush.beginShape(0.1);
  brush.vertex(130, 300); brush.vertex(170, 330); brush.vertex(260, 450); brush.vertex(150, 450);
  brush.endShape(true);

  // main peak right of centre
  brush.fill("#8795b0", 210);
  brush.fillBleed(0.22);
  brush.beginShape(0.1);
  brush.vertex(220, 450); brush.vertex(330, 300); brush.vertex(390, 218); brush.vertex(420, 206); brush.vertex(450, 240); brush.vertex(540, 340); brush.vertex(620, 380); brush.vertex(620, 450);
  brush.endShape(true);
  brush.fill("#56688c", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(420, 206); brush.vertex(450, 240); brush.vertex(540, 340); brush.vertex(620, 380); brush.vertex(620, 450); brush.vertex(460, 450); brush.vertex(424, 320);
  brush.endShape(true);
  // snow on the lit face: paper, with a couple of blue gullies
  brush.fill("#dfe6ef", 0);
  brush.fill("#7a89a8", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(396, 222); brush.vertex(408, 218); brush.vertex(380, 320); brush.vertex(340, 400); brush.vertex(350, 330);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(360, 280); brush.vertex(370, 278); brush.vertex(300, 420); brush.vertex(290, 410);
  brush.endShape(true);

  // cloud sea: long overlapping rolls, white tops left as paper, cool shadowed bellies
  let rolls = [[420, "#b9c7da"], [470, "#a4b5cd"], [520, "#8fa2c0"], [570, "#7f93b4"]];
  for (let i = 0; i < rolls.length; i++) {
    let y = rolls[i][0];
    brush.fill(rolls[i][1], 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(-20, y + 10); brush.vertex(80, y - 14); brush.vertex(170, y + 6); brush.vertex(270, y - 20); brush.vertex(380, y + 4); brush.vertex(480, y - 16); brush.vertex(620, y + 2);
    brush.vertex(620, y + 44); brush.vertex(300, y + 50); brush.vertex(-20, y + 44);
    brush.endShape(true);
  }
  brush.fill("#6f82a6", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 600); brush.vertex(300, 590); brush.vertex(620, 600); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
