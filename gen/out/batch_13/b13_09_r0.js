async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f5");
  brush.noStroke();
  // cool pale wash behind, bleeding off the left edge
  brush.fill("#a9c3d6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, 80);
  brush.vertex(260, 40);
  brush.vertex(300, 300);
  brush.vertex(220, 560);
  brush.vertex(-20, 600);
  brush.endShape(true);
  // floor shadow
  brush.fill("#9aaebd", 170);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(80, 520);
  brush.vertex(260, 505);
  brush.vertex(300, 530);
  brush.vertex(100, 540);
  brush.endShape(true);
  // dancer, left third. torso and head
  let dx = 180, dy = 180;
  brush.fill("#7f97ad", 210);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(dx - 12, dy);
  brush.vertex(dx + 12, dy);
  brush.vertex(dx + 16, dy + 70);
  brush.vertex(dx - 10, dy + 72);
  brush.endShape(true);
  brush.fill("#c9a996", 200);
  brush.circle(dx + 2, dy - 20, 14, 0.2);
  brush.fill("#4a5a6a", 200);
  brush.circle(dx - 4, dy - 26, 10, 0.4);
  // raised arms as soft wide strokes
  brush.fill("#a9bccb", 190);
  brush.beginShape(1);
  brush.vertex(dx - 8, dy + 6);
  brush.vertex(dx - 60, dy - 50);
  brush.vertex(dx - 50, dy - 60);
  brush.vertex(dx + 4, dy - 4);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(dx + 8, dy + 8);
  brush.vertex(dx + 80, dy + 10);
  brush.vertex(dx + 82, dy + 24);
  brush.vertex(dx + 8, dy + 24);
  brush.endShape(true);
  // the flowing skirt: sweeping layers swirling to the right
  let sk = [["#6f8fb8", 200, 0], ["#4f6fa0", 190, 16], ["#3a5688", 170, 34]];
  for (let s of sk) {
    brush.fill(s[0], s[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(dx - 12, dy + 64);
    brush.vertex(dx + 20, dy + 66);
    brush.vertex(dx + 150 - s[2], dy + 190);
    brush.vertex(dx + 200 - s[2] * 2, dy + 270);
    brush.vertex(dx + 80, dy + 320 - s[2]);
    brush.vertex(dx - 40 + s[2], dy + 330);
    brush.vertex(dx - 70 + s[2], dy + 260);
    brush.endShape(true);
  }
  // legs peeking below
  brush.fill("#c9a996", 190);
  brush.beginShape(1);
  brush.vertex(dx + 10, dy + 320);
  brush.vertex(dx + 26, dy + 320);
  brush.vertex(dx + 30, dy + 345);
  brush.vertex(dx + 12, dy + 345);
  brush.endShape(true);
}
