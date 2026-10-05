async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ead8");
  brush.noStroke();
  brush.fill("#3a2018", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // layered petal rings
  for (let ring = 0; ring < 4; ring++) {
    const n = 14 - ring*2, R = 270 - ring*55, w = 0.5 - ring*0.05;
    const cols = ["#e8760a","#f08a10","#f5a020","#d85c08"];
    for (let i = 0; i < n; i++) {
      const a = i*360/n + ring*11, b = a - 360*w/n*0.5*2, c = a + 360*w/n*0.5*2;
      const cx = 300, cy = 300;
      brush.fill(cols[(i+ring)%4], 190 + ring*10); brush.fillBleed(0.25);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a)*30, cy + sin(a)*30);
      brush.vertex(cx + cos(b)*R*0.7, cy + sin(b)*R*0.7);
      brush.vertex(cx + cos(a)*R, cy + sin(a)*R);
      brush.vertex(cx + cos(c)*R*0.7, cy + sin(c)*R*0.7);
      brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6);
      brush.vertex(cx + cos(a)*30, cy + sin(a)*30);
      brush.vertex(cx + cos(b)*R*0.7, cy + sin(b)*R*0.7);
      brush.vertex(cx + cos(a)*R, cy + sin(a)*R);
      brush.vertex(cx + cos(c)*R*0.7, cy + sin(c)*R*0.7);
      brush.endShape(true);
    }
  }
  brush.fill("#7a2a06", 225); brush.circle(300,300,45,0.5);
  brush.fill("#3a1204", 235); brush.circle(300,300,22,0.4);
}
