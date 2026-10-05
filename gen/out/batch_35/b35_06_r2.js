async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eaf0f6");
  randomSeed(26);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // very big sky, horizon at ~470
  brush.fill("#0a5ad0", 235);
  brush.beginShape(0.4); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,330); brush.vertex(-60,330); brush.endShape(true);
  brush.fill("#2a9ae8", 215);
  brush.beginShape(0.5); brush.vertex(-60,200); brush.vertex(660,210); brush.vertex(660,480); brush.vertex(-60,480); brush.endShape(true);
  brush.fill("#ffa860", 210);
  brush.beginShape(0.5); brush.vertex(-60,380); brush.vertex(660,370); brush.vertex(660,480); brush.vertex(-60,480); brush.endShape(true);
  // cloud, left as paper
  brush.fill("#f4f6fa", 235);
  brush.beginShape(0.7); brush.vertex(380,90); brush.vertex(560,80); brush.vertex(600,140); brush.vertex(420,160); brush.endShape(true);
  // dark cliff steps, low
  for (let k = 0; k < 4; k++) {
    brush.fill("#1a1a4a", 230);
    brush.beginShape(0.3); brush.vertex(-60,660); brush.vertex(-60,390); brush.vertex(190,385); brush.vertex(215,470); brush.vertex(205,660); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(660,660); brush.vertex(660,380); brush.vertex(400,390); brush.vertex(385,480); brush.vertex(400,660); brush.endShape(true);
  }
  // frozen fall
  brush.fill("#18b8d8", 225);
  brush.beginShape(0.5); brush.vertex(205,400); brush.vertex(390,400); brush.vertex(385,590); brush.vertex(210,590); brush.endShape(true);
  for (let i = 0; i < 5; i++) { brush.fill(i%2 ? "#ccf8ff" : "#7ae0f0", 220); let x = 215 + i * 34; brush.beginShape(0.4); brush.vertex(x,405); brush.vertex(x+24,405); brush.vertex(x+20,560); brush.vertex(x+3,560); brush.endShape(true); }
  brush.fill("#0a50b8", 200);
  brush.beginShape(0.5); brush.vertex(180,570); brush.vertex(420,570); brush.vertex(520,660); brush.vertex(100,660); brush.endShape(true);
}
