async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8da");
  brush.noStroke();

  // pale sky wash
  brush.fill("#b9c2c4", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 330);
  brush.vertex(-20, 330);
  brush.endShape(true);

  // distant ridge on the right
  brush.fill("#8d8f94", 160);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(300, 330);
  brush.vertex(390, 230);
  brush.vertex(450, 260);
  brush.vertex(520, 200);
  brush.vertex(620, 250);
  brush.vertex(620, 360);
  brush.vertex(300, 360);
  brush.endShape(true);

  // big peak, left of centre
  brush.fill("#6f6a66", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 380);
  brush.vertex(60, 260);
  brush.vertex(150, 150);
  brush.vertex(215, 70);
  brush.vertex(265, 130);
  brush.vertex(330, 210);
  brush.vertex(420, 340);
  brush.vertex(460, 400);
  brush.vertex(-20, 420);
  brush.endShape(true);

  // shadow side of the peak
  brush.fill("#4f4a4c", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3);
  brush.vertex(215, 75);
  brush.vertex(265, 135);
  brush.vertex(330, 215);
  brush.vertex(410, 340);
  brush.vertex(280, 330);
  brush.vertex(240, 220);
  brush.endShape(true);

  // snow left as paper: light cap made by leaving lighter wash - add warm light facet
  brush.fill("#a79a86", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(140, 170);
  brush.vertex(200, 100);
  brush.vertex(225, 180);
  brush.vertex(170, 260);
  brush.vertex(100, 280);
  brush.endShape(true);

  // autumn slopes: ochre and rust woods
  brush.fill("#b58a4a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 360);
  brush.vertex(120, 320);
  brush.vertex(260, 350);
  brush.vertex(400, 380);
  brush.vertex(620, 360);
  brush.vertex(620, 470);
  brush.vertex(-20, 480);
  brush.endShape(true);

  brush.fill("#9c5a34", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 400);
  brush.vertex(80, 380);
  brush.vertex(180, 410);
  brush.vertex(240, 460);
  brush.vertex(-20, 490);
  brush.endShape(true);

  brush.fill("#8a6a3a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(380, 420);
  brush.vertex(480, 380);
  brush.vertex(620, 390);
  brush.vertex(620, 480);
  brush.vertex(360, 480);
  brush.endShape(true);

  // clumps of trees
  let trees = [[40,420,28,"#7a3e26"],[95,430,22,"#a8642e"],[150,445,26,"#6e4a2a"],[430,430,24,"#b0773a"],[490,420,30,"#7c4228"],[560,440,26,"#9a6a34"],[230,470,20,"#a14e2c"]];
  for (let t of trees) {
    brush.fill(t[3], 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.circle(t[0], t[1], t[2], 0.5);
  }

  // valley floor
  brush.fill("#7d7650", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470);
  brush.vertex(200, 480);
  brush.vertex(400, 470);
  brush.vertex(620, 460);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  // winding river
  brush.fill("#9aa6a8", 180);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.8);
  brush.vertex(290, 480);
  brush.vertex(320, 480);
  brush.vertex(300, 530);
  brush.vertex(360, 600);
  brush.vertex(300, 620);
  brush.vertex(260, 560);
  brush.endShape(true);

  brush.fill("#55482e", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 560);
  brush.vertex(150, 540);
  brush.vertex(240, 580);
  brush.vertex(-20, 620);
  brush.endShape(true);
}
