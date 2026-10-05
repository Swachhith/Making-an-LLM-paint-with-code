async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf2ec");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // pastel dawn sky
  brush.fill("#f6a8bc", 190); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,430); brush.vertex(-60,430); brush.endShape(true);
  brush.fill("#a8c0f0", 190); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,200); brush.vertex(-60,240); brush.endShape(true);
  brush.fill("#fbd890", 190); brush.beginShape(0.9); brush.vertex(-60,260); brush.vertex(660,230); brush.vertex(660,430); brush.vertex(-60,430); brush.endShape(true);
  brush.fill("#fff0b0", 200); brush.circle(440,300,70,1.2);
  brush.fill("#f8c8a0", 160); brush.circle(440,300,105,1.4);
  brush.fill("#d0b8f0", 150); brush.circle(110,150,50,1.5); brush.circle(520,90,55,1.5);
  // pavement
  brush.fill("#b8d8c0", 200); brush.beginShape(0.8); brush.vertex(-60,440); brush.vertex(660,420); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#98b8b0", 170); brush.beginShape(0.8); brush.vertex(-60,520); brush.vertex(660,500); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // distant lamppost / roofs
  brush.fill("#9a88c0", 170); brush.beginShape(0.2); brush.vertex(480,330); brush.vertex(600,330); brush.vertex(600,440); brush.vertex(480,440); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(470,335); brush.vertex(540,285); brush.vertex(610,335); brush.endShape(true);
  // figure silhouette, plum
  brush.fill("#6a5090", 235); brush.beginShape(0.4); brush.vertex(215,270); brush.vertex(285,270); brush.vertex(305,440); brush.vertex(195,440); brush.endShape(true);
  brush.fill("#3a2860", 230); brush.beginShape(0.4); brush.vertex(255,275); brush.vertex(285,275); brush.vertex(305,440); brush.vertex(250,440); brush.endShape(true);
  brush.fill("#3a2860", 235); brush.beginShape(0.3); brush.vertex(215,430); brush.vertex(250,430); brush.vertex(248,540); brush.vertex(212,540); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(256,430); brush.vertex(295,430); brush.vertex(302,540); brush.vertex(262,540); brush.endShape(true);
  brush.fill("#4a3878", 235); brush.circle(252,238,26,1.2);
  // top hat
  brush.fill("#2a1c48", 235); brush.beginShape(0.1); brush.vertex(232,222); brush.vertex(274,222); brush.vertex(270,185); brush.vertex(236,185); brush.endShape(true);
  // arms and violin
  brush.fill("#4a3878", 230); brush.beginShape(0.3); brush.vertex(232,300); brush.vertex(330,255); brush.vertex(345,278); brush.vertex(250,330); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(290,310); brush.vertex(400,262); brush.vertex(408,284); brush.vertex(295,335); brush.endShape(true);
  brush.fill("#6a3a30", 235); brush.circle(300,262,17,1.2);
  // case on ground
  brush.fill("#5a4078", 210); brush.beginShape(0.2); brush.vertex(340,520); brush.vertex(430,520); brush.vertex(430,555); brush.vertex(340,555); brush.endShape(true);
  brush.fill("#ffd890", 150); brush.circle(440,300,125,1.5);
  brush.fill("#fff6c8", 215); brush.circle(440,300,48,1.1);
  brush.fill("#f090a8", 140); brush.beginShape(0.9); brush.vertex(-60,350); brush.vertex(200,340); brush.vertex(200,430); brush.vertex(-60,430); brush.endShape(true);
  brush.fill("#5a4088", 215); brush.beginShape(0.4); brush.vertex(222,275); brush.vertex(290,275); brush.vertex(308,438); brush.vertex(200,438); brush.endShape(true);
  brush.fill("#4a3878", 230); brush.beginShape(0.3); brush.vertex(232,300); brush.vertex(330,255); brush.vertex(345,278); brush.vertex(250,330); brush.endShape(true);
  brush.fill("#7a6aa8", 160); brush.beginShape(0.8); brush.vertex(-60,560); brush.vertex(660,545); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
}
