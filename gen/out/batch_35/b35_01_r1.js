async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1620");
  randomSeed(21);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // glowing sky pooled up from a low horizon
  const sky = [["#c0501c",230,-80,-60,680,420],["#f0902a",230,-40,60,640,380],["#ffd060",235,60,180,540,420],["#fff0a8",230,150,260,450,430]];
  for (const s of sky) {
    brush.fill(s[0], s[1]);
    brush.beginShape(0.5); brush.vertex(s[2],s[3]); brush.vertex(s[4],s[3]+10); brush.vertex(s[4]-30,s[5]); brush.vertex(s[2]+30,s[5]); brush.endShape(true);
  }
  brush.fill("#6a1c3a", 200);
  brush.beginShape(0.5); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,90); brush.vertex(300,130); brush.vertex(-60,80); brush.endShape(true);
  // dark ground
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#0a1410" : "#1c2c28", 235);
    brush.beginShape(0.4); brush.vertex(-50,470+k*30); brush.vertex(300,450+k*20); brush.vertex(650,470+k*30); brush.vertex(650,660); brush.vertex(-50,660); brush.endShape(true);
  }
  // trunk, two passes
  for (let k = 0; k < 2; k++) {
    brush.fill("#0a0608", 240);
    brush.beginShape(0.4); brush.vertex(278,500); brush.vertex(322,500); brush.vertex(312,300); brush.vertex(288,300); brush.endShape(true);
  }
  // tall narrow pyramid of glossy leaf clusters
  for (let i = 0; i < 70; i++) {
    let t = random(); let y = 90 + t * 390; let spread = 22 + t * 120;
    let x = 300 + random(-1, 1) * spread * (1 - abs(random(-1,1)) * 0.3);
    brush.fill(i % 3 == 0 ? "#0b3a28" : i % 3 == 1 ? "#14502f" : "#062418", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.6); brush.vertex(x-16,y+12); brush.vertex(x-6,y-14); brush.vertex(x+10,y-10); brush.vertex(x+18,y+10); brush.vertex(x,y+18); brush.endShape(true);
  }
  // sky-lit highlights on the leaves
  for (let i = 0; i < 22; i++) { let t = random(0.1, 0.6); brush.fill("#5a9a50", 170); brush.circle(300 + random(-1,1)*(20+t*120), 90 + t*390, random(5,9), 0.6); }
  // berries
  for (let i = 0; i < 45; i++) { let t = random(0.1, 1); brush.fill("#d01c20", 240); brush.fillBleed(0.15); brush.circle(300 + random(-1,1)*(20+t*115), 90 + t*390, random(3.5,6), 0.4); }
}
