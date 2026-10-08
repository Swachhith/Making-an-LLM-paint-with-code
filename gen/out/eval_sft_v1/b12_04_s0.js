async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe4");
  brush.noStroke();

  // limited palette: two violets + one green
  const v1 = "#5a3a8a";
  const v2 = "#3a1e6a";
  const g = "#2f6a3a";

  // tall stems behind the blooms
  brush.fill(g, 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(230, 470); brush.vertex(230, 560); brush.vertex(240, 600); brush.vertex(230, 600); brush.vertex(220, 560);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(420, 470); brush.vertex(420, 550); brush.vertex(430, 600); brush.vertex(420, 600); brush.vertex(410, 560);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(520, 470); brush.vertex(520, 540); brush.vertex(530, 600); brush.vertex(520, 600); brush.vertex(510, 560);
  brush.endShape(true);

  // bloom 1: open, left, facing right
  brush.fill(v2, 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(170, 300); brush.vertex(230, 270); brush.vertex(290, 300); brush.vertex(240, 340); brush.vertex(180, 310);
  brush.endShape(true);
  brush.fill(v1, 220);
  brush.beginShape(0.8);
  brush.vertex(170, 300); brush.vertex(210, 260); brush.vertex(245, 280); brush.vertex(215, 315); brush.vertex(175, 295);
  brush.endShape(true);
  brush.fill(v2, 210);
  brush.beginShape(0.8);
  brush.vertex(170, 300); brush.vertex(130, 330); brush.vertex(160, 360); brush.vertex(190, 335); brush.vertex(155, 310);
  brush.endShape(true);
  brush.fill(v1, 210);
  brush.beginShape(0.8);
  brush.vertex(170, 300); brush.vertex(210, 325); brush.vertex(245, 355); brush.vertex(215, 380); brush.vertex(180, 350);
  brush.endShape(true);
  brush.fill(v2, 210);
  brush.beginShape(0.8);
  brush.vertex(230, 270); brush.vertex(270, 290); brush.vertex(295, 315); brush.vertex(265, 335); brush.vertex(235, 315);
  brush.endShape(true);
  brush.fill(v1, 220);
  brush.beginShape(0.8);
  brush.vertex(230, 270); brush.vertex(260, 240); brush.vertex(285, 260); brush.vertex(255, 280); brush.vertex(232, 260);
  brush.endShape(true);
  brush.fill(v2, 220);
  brush.beginShape(0.8);
  brush.vertex(230, 270); brush.vertex(250, 230); brush.vertex(265, 245); brush.vertex(250, 260); brush.vertex(235, 245);
  brush.endShape(true);

  // bloom 2: open, right, facing left
  brush.fill(v2, 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(430, 300); brush.vertex(370, 270); brush.vertex(310, 300); brush.vertex(360, 340); brush.vertex(420, 310);
  brush.endShape(true);
  brush.fill(v1, 220);
  brush.beginShape(0.8);
  brush.vertex(430, 300); brush.vertex(470, 260); brush.vertex(505, 280); brush.vertex(475, 315); brush.vertex(435, 295);
  brush.endShape(true);
  brush.fill(v2, 210);
  brush.beginShape(0.8);
  brush.vertex(430, 300); brush.vertex(470, 330); brush.vertex(440, 360); brush.vertex(410, 335); brush.vertex(445, 310);
  brush.endShape(true);
  brush.fill(v1, 210);
  brush.beginShape(0.8);
  brush.vertex(430, 300); brush.vertex(390, 325); brush.vertex(355, 355); brush.vertex(385, 380); brush.vertex(420, 350);
  brush.endShape(true);
  brush.fill(v2, 210);
  brush.beginShape(0.8);
  brush.vertex(370, 270); brush.vertex(330, 290); brush.vertex(305, 315); brush.vertex(335, 335); brush.vertex(365, 315);
  brush.endShape(true);
  brush.fill(v1, 220);
  brush.beginShape(0.8);
  brush.vertex(370, 270); brush.vertex(340, 240); brush.vertex(315, 260); brush.vertex(345, 280); brush.vertex(372, 260);
  brush.endShape(true);
  brush.fill(v2, 220);
  brush.beginShape(0.8);
  brush.vertex(370, 270); brush.vertex(350, 230); brush.vertex(335, 245); brush.vertex(350, 260); brush.vertex(365, 245);
  brush.endShape(true);

  // bloom 3: closed, top, facing down
  brush.fill(v2, 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(340, 120); brush.vertex(380, 150); brush.vertex(340, 180); brush.vertex(300, 150);
  brush.endShape(true);
  brush.fill(v1, 220);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(320, 130); brush.vertex(340, 145); brush.vertex(320, 160); brush.vertex(300, 145);
  brush.endShape(true);
  brush.fill(v2, 210);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(280, 170); brush.vertex(300, 185); brush.vertex(320, 170); brush.vertex(300, 155);
  brush.endShape(true);
  brush.fill(v1, 210);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(320, 130); brush.vertex(340, 145); brush.vertex(320, 160); brush.vertex(300, 145);
  brush.endShape(true);
  brush.fill(v2, 220);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(270, 170); brush.vertex(250, 190); brush.vertex(270, 210); brush.vertex(300, 195);
  brush.endShape(true);
  brush.fill(v1, 220);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(330, 170); brush.vertex(350, 190); brush.vertex(330, 210); brush.vertex(300, 195);
  brush.endShape(true);
  brush.fill(v2, 220);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(300, 130); brush.vertex(300, 110); brush.vertex(300, 130);
  brush.endShape(true);
  brush.fill(g, 210);
  brush.beginShape(0.8);
  brush.vertex(300, 150); brush.vertex(290, 180); brush.vertex(310, 180); brush.vertex(300, 170);
  brush.endShape(true);
}
