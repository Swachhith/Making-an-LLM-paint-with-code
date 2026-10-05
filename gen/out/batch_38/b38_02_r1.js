async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4eee4");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#eab863", 170);
  brush.beginShape(0.6); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#d9843a", 140);
  brush.beginShape(0.6); brush.vertex(60,160); brush.vertex(300,120); brush.vertex(560,260); brush.vertex(500,540); brush.vertex(120,560); brush.endShape(true);
  brush.fill("#2a1c18", 215); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(285,100); brush.vertex(320,100); brush.vertex(335,640); brush.vertex(280,640); brush.endShape(true);
  brush.fill("#14100e", 170);
  brush.beginShape(0.3); brush.vertex(300,100); brush.vertex(318,100); brush.vertex(322,640); brush.vertex(298,640); brush.endShape(true);
  // leaves dark
  brush.fill("#3a2a22", 190);
  brush.beginShape(0.6); brush.vertex(290,520); brush.vertex(190,480); brush.vertex(130,540); brush.vertex(250,560); brush.endShape(true);
  const cx = 205, cy = 330;
  for (let k = 0; k < 5; k++) {
    const a = (k * 72 - 90) * Math.PI / 180, px = cx + 62 * Math.cos(a), py = cy + 62 * Math.sin(a);
    brush.fill("#e0561f", 190); brush.fillBleed(0.3);
    brush.circle(px, py, 50, 0.8);
    brush.fill("#b8300f", 175);
    brush.circle(cx + 40 * Math.cos(a), cy + 40 * Math.sin(a), 30, 0.7);
    brush.fill("#8a1f0a", 150);
    brush.circle(cx + 22 * Math.cos(a), cy + 22 * Math.sin(a), 16, 0.6);
  }
  brush.fill("#2a1c18", 235); brush.circle(cx, cy, 15, 0.4);
  brush.fill("#f0b030", 235); brush.circle(cx, cy - 3, 8, 0.4);
  brush.fill("#2a1c18", 215);
  brush.beginShape(0.3); brush.vertex(318,480); brush.vertex(340,470); brush.vertex(410,430); brush.vertex(395,405); brush.endShape(true);
  brush.fill("#d9501f", 200); brush.fillBleed(0.25);
  brush.beginShape(0.7); brush.vertex(380,290); brush.vertex(440,315); brush.vertex(438,400); brush.vertex(405,445); brush.vertex(370,395); brush.endShape(true);
  brush.fill("#8e2410", 190);
  brush.beginShape(0.7); brush.vertex(395,325); brush.vertex(425,335); brush.vertex(420,410); brush.vertex(400,420); brush.endShape(true);
  brush.fill("#e8a12a", 210);
  brush.circle(305, 130, 26, 0.6); brush.circle(312, 85, 18, 0.6); brush.circle(300, 200, 28, 0.6);
}
