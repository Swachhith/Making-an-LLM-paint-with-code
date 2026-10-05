async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f3e6");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // soft turquoise backdrop, uneven
  brush.fill("#5ac8b0", 160); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#2a9a90", 140); brush.beginShape(0.9); brush.vertex(-60,400); brush.vertex(660,360); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#f4e890", 120); brush.circle(300,230,200,1.6);
  // leaves
  brush.fill("#0e8a30", 215); brush.beginShape(0.6); brush.vertex(300,640); brush.vertex(110,300); brush.vertex(160,290); brush.vertex(345,640); brush.endShape(true);
  brush.fill("#064a1a", 190); brush.beginShape(0.6); brush.vertex(320,640); brush.vertex(150,320); brush.vertex(170,300); brush.vertex(345,640); brush.endShape(true);
  brush.fill("#18a040", 210); brush.beginShape(0.6); brush.vertex(330,640); brush.vertex(520,350); brush.vertex(560,370); brush.vertex(365,640); brush.endShape(true);
  // stems
  brush.fill("#1a8a38", 230); brush.beginShape(0.4); brush.vertex(268,320); brush.vertex(302,320); brush.vertex(325,640); brush.vertex(290,640); brush.endShape(true);
  brush.fill("#0e5a24", 200); brush.beginShape(0.4); brush.vertex(285,320); brush.vertex(302,320); brush.vertex(325,640); brush.vertex(305,640); brush.endShape(true);
  brush.fill("#1a8a38", 230); brush.beginShape(0.4); brush.vertex(425,330); brush.vertex(455,330); brush.vertex(440,640); brush.vertex(412,640); brush.endShape(true);
  // open bloom: outer 6 petals big wash, then smaller pass
  brush.fill("#f8c010", 205);
  for (let a=15;a<375;a+=60){ brush.circle(285+Math.cos(a*Math.PI/180)*62, 235+Math.sin(a*Math.PI/180)*62, 50, 1.3); }
  brush.fill("#e8a000", 190);
  for (let a=15;a<375;a+=60){ brush.circle(285+Math.cos(a*Math.PI/180)*50, 235+Math.sin(a*Math.PI/180)*50, 30, 1.3); }
  // trumpet
  brush.fill("#f09000", 230); brush.circle(285,235,46,1.1);
  brush.fill("#c85a00", 220); brush.circle(285,235,28,1.1);
  brush.fill("#8a3000", 200); brush.circle(285,235,12,1);
  // closed bud
  brush.fill("#f8c010", 225); brush.beginShape(0.7); brush.vertex(412,335); brush.vertex(470,335); brush.vertex(462,260); brush.vertex(440,205); brush.vertex(420,265); brush.endShape(true);
  brush.fill("#d89000", 205); brush.beginShape(0.7); brush.vertex(442,335); brush.vertex(470,335); brush.vertex(462,260); brush.vertex(440,205); brush.endShape(true);
  brush.fill("#8a9a30", 220); brush.beginShape(0.5); brush.vertex(414,345); brush.vertex(468,345); brush.vertex(460,310); brush.vertex(422,310); brush.endShape(true);
}
