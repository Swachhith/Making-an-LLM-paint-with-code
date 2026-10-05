async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8d8");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#8a2038", 150);
  brush.beginShape(0.3);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 200); brush.vertex(-40, 200);
  brush.endShape(true);
  brush.fill("#e8d8b8", 255);
  brush.circle(430, 80, 40, 0.5);
  brush.fill("#3a0e1c", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, 175); brush.vertex(100, 140); brush.vertex(260, 168); brush.vertex(420, 130); brush.vertex(640, 165); brush.vertex(640, 230); brush.vertex(-40, 230);
  brush.endShape(true);
  const yy = [200, 260, 330, 410, 500];
  const cc = ["#b02244", "#8a1636", "#c82a50", "#5a0e26", "#1c060e"];
  for (let b = 0; b < 5; b++) {
    for (let p = 0; p < 2; p++) {
      brush.fill(cc[b], 150 + p * 70);
      brush.beginShape(0.9);
      brush.vertex(-40, yy[b] + p * 8);
      for (let x = -40; x <= 640; x += 60) brush.vertex(x, yy[b] + p * 8 + 16 * Math.sin(x * 0.02 + b * 1.7 + p));
      brush.vertex(640, 660); brush.vertex(-40, 660);
      brush.endShape(true);
    }
  }
  for (let i = 0; i < 70; i++) {
    const t = i / 70;
    const y = 240 + t * 340;
    const x = (i * 131) % 620;
    brush.fill(i % 3 === 0 ? "#e04068" : "#14060c", 170);
    brush.circle(x, y, 8 + t * 20, 0.8);
  }
  brush.fill("#0e0408", 240);
  brush.beginShape(0.5);
  brush.vertex(230, 650); brush.vertex(285, 470); brush.vertex(310, 470); brush.vertex(380, 650);
  brush.endShape(true);
  brush.fill("#e8d8b8", 255);
  brush.beginShape(0.4);
  brush.vertex(300, 480); brush.vertex(325, 480); brush.vertex(350, 560); brush.vertex(320, 560);
  brush.endShape(true);
}
