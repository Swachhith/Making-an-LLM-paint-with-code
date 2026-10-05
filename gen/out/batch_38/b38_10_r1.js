async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0dc");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#8ac0f0", 185);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,110); brush.vertex(-40,100); brush.endShape(true);
  brush.fill("#f8f0d0", 150); brush.circle(480, 55, 40, 0.8);
  brush.fill("#4a5ac0", 170);
  brush.beginShape(0.8); brush.vertex(-40,110); brush.vertex(150,70); brush.vertex(350,110); brush.vertex(640,80); brush.vertex(640,150); brush.vertex(-40,150); brush.endShape(true);
  const cols = ["#2fa03a", "#1f8a3a", "#7ac82f", "#17692f", "#3aaa2a", "#0f5a28", "#5ab82f"];
  for (let r = 0; r < 7; r++) {
    const y = 120 + r * 75, d = (r % 2) * 40;
    brush.fill(cols[r], 205); brush.fillBleed(0.25);
    brush.beginShape(0.8); brush.vertex(-40,y+20); brush.vertex(150+d,y-25); brush.vertex(330,y+10); brush.vertex(480-d,y-30); brush.vertex(640,y); brush.vertex(640,y+120); brush.vertex(-40,y+120); brush.endShape(true);
    brush.fill("#e4ea4a", 130);
    brush.beginShape(0.8); brush.vertex(30,y+30); brush.vertex(200+d,y+8); brush.vertex(400,y+35); brush.vertex(200,y+55); brush.endShape(true);
    brush.fill("#0a4a20", 150);
    brush.beginShape(0.8); brush.vertex(-40,y+60); brush.vertex(300,y+50); brush.vertex(640,y+62); brush.vertex(640,y+90); brush.vertex(-40,y+95); brush.endShape(true);
  }
  brush.fill("#c2502a", 195);
  brush.beginShape(0.6); brush.vertex(270,160); brush.vertex(305,160); brush.vertex(400,640); brush.vertex(290,640); brush.endShape(true);
  brush.fill("#8a2a14", 150);
  brush.beginShape(0.6); brush.vertex(285,200); brush.vertex(300,200); brush.vertex(350,600); brush.vertex(300,600); brush.endShape(true);
  brush.fill("#f0302a", 235); brush.circle(110, 330, 9, 0.4); brush.circle(470, 410, 9, 0.4); brush.circle(180, 505, 10, 0.4); brush.circle(520, 255, 8, 0.4);
  brush.fill("#1a1a2a", 225); brush.circle(110, 346, 8, 0.4); brush.circle(470, 426, 8, 0.4); brush.circle(180, 522, 9, 0.4);
}
