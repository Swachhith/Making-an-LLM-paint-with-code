async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c0a18");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#4a1a8a", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#1a8a8a", 190);
  brush.beginShape(0.9);
  brush.vertex(0, 80); brush.vertex(300, 40); brush.vertex(600, 100); brush.vertex(600, 200); brush.vertex(300, 170); brush.vertex(0, 200);
  brush.endShape(true);
  brush.fill("#e8c040", 220);
  brush.beginShape(0.5);
  brush.vertex(340, 80); brush.vertex(400, 80); brush.vertex(370, 170); brush.vertex(390, 190); brush.vertex(330, 250); brush.vertex(360, 170);
  brush.endShape(true);
  const mt = function (flip) {
    const k = flip ? -1 : 1;
    brush.fill(flip ? "#20605a" : "#3a2a8a", flip ? 170 : 235);
    brush.beginShape(0.9);
    brush.vertex(0, 300); brush.vertex(100, 300 - k * 90); brush.vertex(220, 300 - k * 40); brush.vertex(340, 300 - k * 150); brush.vertex(470, 300 - k * 60); brush.vertex(600, 300 - k * 110); brush.vertex(600, 300); 
    brush.endShape(true);
  };
  mt(false);
  brush.fill("#0a0818", 240);
  brush.beginShape(0.9);
  brush.vertex(0, 300); brush.vertex(150, 260); brush.vertex(300, 290); brush.vertex(450, 255); brush.vertex(600, 290); brush.vertex(600, 305); brush.vertex(0, 305);
  brush.endShape(true);
  brush.fill("#1a2a6a", 210);
  brush.beginShape(0.5);
  brush.vertex(0, 305); brush.vertex(600, 305); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  mt(true);
  brush.fill("#3a1a7a", 190);
  brush.beginShape(0.5);
  brush.vertex(0, 420); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e8c040", 160);
  brush.beginShape(0.5);
  brush.vertex(340, 380); brush.vertex(400, 380); brush.vertex(380, 450); brush.vertex(360, 470); brush.vertex(340, 440);
  brush.endShape(true);
}
