async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1c1a22");
  randomSeed(1);
  brush.noStroke();
  // glowing sky at the top
  brush.fill("#e8a050", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(40,40); brush.vertex(560,30); brush.vertex(580,260); brush.vertex(300,330); brush.vertex(20,250); brush.endShape(true);
  brush.fill("#f3d27a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(150,70); brush.vertex(450,60); brush.vertex(470,200); brush.vertex(300,250); brush.vertex(130,190); brush.endShape(true);
  brush.fill("#c8553a", 170);
  brush.beginShape(0.5); brush.vertex(10,10); brush.vertex(200,20); brush.vertex(100,200); brush.vertex(10,180); brush.endShape(true);
  // ground
  brush.fill("#2e3a3a", 220);
  brush.beginShape(0.4); brush.vertex(0,480); brush.vertex(600,470); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // trunk
  brush.fill("#0e0c10", 230);
  brush.beginShape(0.4); brush.vertex(280,520); brush.vertex(312,520); brush.vertex(306,330); brush.vertex(286,330); brush.endShape(true);
  // holly foliage layers
  for (let k = 0; k < 3; k++) {
    for (let i = 0; i < 9; i++) {
      let y = 120 + i * 42 + random(-8, 8);
      let w = 40 + i * 12 + k * 6;
      let x = 298 + random(-12, 12);
      brush.fill(k == 0 ? "#0f3a2a" : k == 1 ? "#1c5a3c" : "#2f7a4c", k == 0 ? 220 : 170);
      brush.fillBleed(0.25);
      brush.beginShape(0.6);
      brush.vertex(x, y - 45); brush.vertex(x + w, y + 20); brush.vertex(x + w * 0.4, y + 40);
      brush.vertex(x - w * 0.4, y + 40); brush.vertex(x - w, y + 20);
      brush.endShape(true);
    }
  }
  // red berries
  for (let i = 0; i < 40; i++) {
    let y = 130 + random(0, 340);
    let sp = 30 + (y - 100) * 0.22;
    brush.fill("#c81e22", 230); brush.fillBleed(0.2);
    brush.circle(298 + random(-sp, sp), y, random(4, 7), 0.5);
  }
}
