async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  randomSeed(10);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#b8d4e8", 170);
  brush.beginShape(0.5); brush.vertex(40,60); brush.vertex(560,40); brush.vertex(580,540); brush.vertex(30,560); brush.endShape(true);
  // stem and leaves
  brush.fill("#2a5a4a", 215);
  brush.beginShape(0.4); brush.vertex(285,360); brush.vertex(320,360); brush.vertex(335,590); brush.vertex(300,590); brush.endShape(true);
  brush.fill("#3a7a60", 200);
  brush.beginShape(0.5); brush.vertex(320,480); brush.vertex(480,430); brush.vertex(500,470); brush.vertex(340,520); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(290,500); brush.vertex(130,470); brush.vertex(120,510); brush.vertex(280,540); brush.endShape(true);
  // dahlia from side: layered petal rows
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 9; i++) {
      let x = 170 + i * 32 + random(-6, 6), y = 300 - r * 40 - abs(i - 4) * 6;
      brush.fill(r == 0 ? "#5a0a1a" : r == 1 ? "#8a1228" : "#b02038", 200);
      brush.beginShape(0.6); brush.vertex(x, y + 60); brush.vertex(x - 28, y + 10); brush.vertex(x, y - 30 + r*10); brush.vertex(x + 28, y + 10); brush.endShape(true);
    }
  brush.fill("#e0a0a8", 180); brush.circle(300, 210, 22, 0.5);
}
