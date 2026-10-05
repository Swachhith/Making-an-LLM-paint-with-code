async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0f1c20");
  brush.noStroke();
  brush.fill("#1d4a4a", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // lily pads
  const pads = [[90,110,70],[510,120,60],[80,500,75],[520,490,70],[300,40,45]];
  for (const p of pads) {
    brush.fill("#0e6a3a", 225); brush.fillBleed(0.25);
    brush.circle(p[0], p[1], p[2], 0.5);
    brush.fill("#2a9a58", 170);
    brush.circle(p[0]-6, p[1]-6, p[2]*0.6, 0.5);
  }
  // outer petals (lit pink on dark)
  for (let i = 0; i < 10; i++) {
    const a = i*36, b = a-16, c = a+16, R = 205;
    brush.fill("#ff9cc4", 225); brush.fillBleed(0.3);
    brush.beginShape(0.6);
    brush.vertex(300+cos(a)*40, 300+sin(a)*40);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6);
    brush.vertex(300+cos(a)*40, 300+sin(a)*40);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6);
    brush.vertex(300+cos(a)*40, 300+sin(a)*40);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true);
  }
  for (let i = 0; i < 8; i++) {
    const a = i*45+20, b = a-17, c = a+17, R = 140;
    brush.fill("#f0509a", 215);
    brush.beginShape(0.6);
    brush.vertex(300+cos(a)*30, 300+sin(a)*30);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6);
    brush.vertex(300+cos(a)*30, 300+sin(a)*30);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true); brush.fillBleed(0.2); brush.beginShape(0.6);
    brush.vertex(300+cos(a)*30, 300+sin(a)*30);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true); brush.fillBleed(0.25); brush.beginShape(0.6);
    brush.vertex(300+cos(a)*30, 300+sin(a)*30);
    brush.vertex(300+cos(b)*R*0.75, 300+sin(b)*R*0.75);
    brush.vertex(300+cos(a)*R, 300+sin(a)*R);
    brush.vertex(300+cos(c)*R*0.75, 300+sin(c)*R*0.75);
    brush.endShape(true);
  }
  brush.fill("#fff0b0", 235); brush.circle(300,300,38,0.4);
  brush.fill("#d89a20", 235); brush.circle(300,300,18,0.4);
}
