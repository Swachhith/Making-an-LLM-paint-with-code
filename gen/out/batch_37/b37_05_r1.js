async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe9d2");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#d8b848", 130);
  brush.beginShape(0.8);
  brush.vertex(-40, 60); brush.vertex(640, 20); brush.vertex(640, 400); brush.vertex(-40, 440);
  brush.endShape(true);
  brush.fill("#0a3a1e", 230);
  brush.beginShape(0.5);
  brush.vertex(285, 330); brush.vertex(325, 330); brush.vertex(340, 650); brush.vertex(280, 650);
  brush.endShape(true);
  brush.fill("#0e5a30", 230);
  brush.beginShape(0.7);
  brush.vertex(300, 470); brush.vertex(190, 380); brush.vertex(70, 400); brush.vertex(60, 470); brush.vertex(190, 520);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(315, 530); brush.vertex(430, 440); brush.vertex(550, 460); brush.vertex(560, 530); brush.vertex(430, 580);
  brush.endShape(true);
  for (let i = 0; i < 10; i++) {
    const a = i * 36 + 18;
    const x = 300 + 150 * Math.cos(a * Math.PI / 180), y = 250 + 150 * Math.sin(a * Math.PI / 180);
    const xm = 300 + 85 * Math.cos(a * Math.PI / 180), ym = 250 + 85 * Math.sin(a * Math.PI / 180);
    brush.fill(i % 2 ? "#e0c870" : "#c09420", 175);
    brush.beginShape(0.6);
    brush.vertex(300, 250); brush.vertex(xm - 28, ym - 28); brush.vertex(x, y); brush.vertex(xm + 28, ym + 28);
    brush.endShape(true);
  }
  for (let r = 0; r < 20; r++) {
    const a = r * 18;
    brush.fill(r % 2 ? "#3a1a6a" : "#7a4aa8", 190);
    brush.circle(300 + 78 * Math.cos(a * Math.PI / 180), 250 + 78 * Math.sin(a * Math.PI / 180), 7, 0.5);
  }
  brush.fill("#6a3a98", 220);
  brush.circle(300, 250, 62, 0.6);
  brush.fill("#0e2e1a", 235);
  brush.circle(300, 250, 32, 0.6);
  for (let j = 0; j < 5; j++) {
    brush.fill("#c89010", 240);
    brush.circle(300 + 42 * Math.cos(j * 72 * Math.PI / 180), 250 + 42 * Math.sin(j * 72 * Math.PI / 180), 11, 0.5);
  }
}
