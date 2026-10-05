async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d6");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#6a1a2a", 120);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 190); brush.vertex(0, 190);
  brush.endShape(true);
  brush.fill("#2a1018", 170);
  brush.beginShape(0.8);
  brush.vertex(0, 150); brush.vertex(150, 120); brush.vertex(300, 160); brush.vertex(450, 115); brush.vertex(600, 150); brush.vertex(600, 210); brush.vertex(0, 210);
  brush.endShape(true);
  const bands = [["#a01838", 230, 210], ["#7a1230", 220, 290], ["#b01c40", 215, 380], ["#1c0a10", 235, 470]];
  for (let b = 0; b < bands.length; b++) {
    const y = bands[b][2];
    brush.fill(bands[b][0], bands[b][1]);
    brush.beginShape(0.9);
    brush.vertex(-10, y);
    for (let x = 0; x <= 600; x += 75) brush.vertex(x, y + 18 * Math.sin(x * 0.03 + b * 2) - 10);
    brush.vertex(610, 620); brush.vertex(-10, 620);
    brush.endShape(true);
  }
  for (let i = 0; i < 40; i++) {
    const x = (i * 97) % 600, y = 230 + ((i * 53) % 330);
    brush.fill(i % 3 ? "#d02850" : "#10060a", 190);
    brush.circle(x, y, 14 + (i % 5) * 4, 0.8);
  }
  brush.fill("#10060a", 230);
  brush.beginShape(0.6);
  brush.vertex(240, 600); brush.vertex(300, 470); brush.vertex(330, 600);
  brush.endShape(true);
}
