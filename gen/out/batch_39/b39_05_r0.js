async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1e8");
  brush.noStroke();
  brush.fill("#bfe0cc", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  const cols = ["#8fcfa8", "#a8d8a0", "#7fc4b0", "#c4e08a", "#95c9a0"];
  for (let i = 0; i < 26; i++) {
    const x = 40 + (i*173)%520, y = 40 + (i*89)%420, r = 60 + (i*37)%70;
    brush.fill(cols[i%5], 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, r, 0.7);
  }
  // trunks pastel
  brush.fill("#c89a9a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(270,600); brush.vertex(285,380); brush.vertex(325,380); brush.vertex(345,600); brush.endShape(true);
  brush.fill("#d8a8c8", 190);
  brush.beginShape(0.5); brush.vertex(80,600); brush.vertex(100,430); brush.vertex(135,430); brush.vertex(150,600); brush.endShape(true);
  for (let i = 0; i < 14; i++) {
    brush.fill(["#f0a8b8","#f8d890","#9ad0e0"][i%3], 200); brush.fillBleed(0.3);
    brush.circle(60 + (i*211)%480, 100 + (i*127)%380, 28 + (i%3)*10, 0.6);
  }
}
