async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece4d4");
  brush.noStroke();

  // overcast sky, grey-green
  brush.fill("#aab1a8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 340);
  brush.vertex(-20, 340);
  brush.endShape(true);

  // far ridge right
  brush.fill("#8a8a86", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(330, 340);
  brush.vertex(420, 250);
  brush.vertex(480, 280);
  brush.vertex(550, 230);
  brush.vertex(620, 260);
  brush.vertex(620, 370);
  brush.vertex(330, 370);
  brush.endShape(true);

  // large peak, summit at (210, 60) - one broad pass
  brush.fill("#7a716a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.15);
  brush.vertex(-20, 330);
  brush.vertex(70, 230);
  brush.vertex(140, 140);
  brush.vertex(210, 60);
  brush.vertex(270, 120);
  brush.vertex(350, 220);
  brush.vertex(470, 380);
  brush.vertex(-20, 400);
  brush.endShape(true);
  // second pass, lower body
  brush.fill("#6a605a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 300);
  brush.vertex(90, 250);
  brush.vertex(200, 230);
  brush.vertex(320, 260);
  brush.vertex(460, 380);
  brush.vertex(-20, 400);
  brush.endShape(true);
  // shadow flank, deep umber-violet
  brush.fill("#453c40", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(212, 65);
  brush.vertex(270, 125);
  brush.vertex(350, 225);
  brush.vertex(450, 370);
  brush.vertex(300, 360);
  brush.vertex(250, 230);
  brush.vertex(225, 140);
  brush.endShape(true);
  // gullies on the lit side
  brush.fill("#5a4e48", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(190, 110);
  brush.vertex(175, 200);
  brush.vertex(130, 290);
  brush.vertex(155, 290);
  brush.vertex(200, 190);
  brush.endShape(true);

  // autumn larch slopes
  brush.fill("#b8863e", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 350);
  brush.vertex(110, 330);
  brush.vertex(270, 360);
  brush.vertex(420, 375);
  brush.vertex(620, 355);
  brush.vertex(620, 470);
  brush.vertex(-20, 480);
  brush.endShape(true);
  // rust and ochre tree clumps, overlapping
  let trees = [[20,380,34,"#8e4426"],[70,395,30,"#b0682c"],[125,405,34,"#7a3a22"],[185,420,28,"#c07a34"],[240,430,26,"#8a4a2a"],[380,410,28,"#a55a2e"],[440,400,34,"#7c3e24"],[500,395,30,"#c08038"],[560,405,36,"#8a4628"],[600,420,28,"#a86430"]];
  for (let t of trees) {
    brush.fill(t[3], 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.circle(t[0], t[1], t[2], 0.6);
    brush.fill("#5a2e1c", 150);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(t[0] + 6, t[1] + 10, t[2] * 0.55, 0.6);
  }

  // valley meadow, olive
  brush.fill("#8a8250", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 450);
  brush.vertex(200, 460);
  brush.vertex(400, 450);
  brush.vertex(620, 440);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // river curving toward viewer
  brush.fill("#8e9ea4", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 455);
  brush.vertex(330, 455);
  brush.vertex(310, 510);
  brush.vertex(390, 590);
  brush.vertex(330, 620);
  brush.vertex(260, 540);
  brush.endShape(true);
  // near bank
  brush.fill("#5c4a2c", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 540);
  brush.vertex(140, 525);
  brush.vertex(250, 570);
  brush.vertex(260, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6e5a34", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(420, 620);
  brush.vertex(460, 560);
  brush.vertex(620, 545);
  brush.vertex(620, 620);
  brush.endShape(true);
}
