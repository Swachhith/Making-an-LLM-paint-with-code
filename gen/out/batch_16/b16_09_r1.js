async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf3e2");
  brush.noStroke();

  // warm pale sky, with rosy clouds
  brush.fill("#f4d7b0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 170);
  brush.vertex(-20, 170);
  brush.endShape(true);
  brush.fill("#e2a98c", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(40, 70);
  brush.vertex(260, 55);
  brush.vertex(300, 80);
  brush.vertex(60, 92);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(330, 115);
  brush.vertex(580, 100);
  brush.vertex(600, 128);
  brush.vertex(360, 135);
  brush.endShape(true);
  // a lone farmhouse and tree on the horizon
  brush.fill("#7a6a58", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(420, 146, 20, 0.5);
  brush.beginShape(0);
  brush.vertex(445, 165);
  brush.vertex(445, 148);
  brush.vertex(462, 136);
  brush.vertex(480, 148);
  brush.vertex(480, 165);
  brush.endShape(true);

  // distant blue-grey hedge at horizon
  brush.fill("#a8a08c", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 160);
  brush.vertex(140, 150);
  brush.vertex(300, 158);
  brush.vertex(460, 148);
  brush.vertex(620, 156);
  brush.vertex(620, 180);
  brush.vertex(-20, 180);
  brush.endShape(true);

  // wheat field, golden, several bands for distance
  brush.fill("#eac470", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 172);
  brush.vertex(620, 172);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#dca650", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 280);
  brush.vertex(200, 260);
  brush.vertex(420, 290);
  brush.vertex(620, 270);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c8883a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 430);
  brush.vertex(250, 410);
  brush.vertex(620, 440);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);


  // foreground wheat heads as tilted soft ovals
  for (let i = 0; i < 44; i++) {
    let x = 5 + i * 14 + (i % 3) * 5;
    let y = 500 + (i % 6) * 18;
    brush.fill(i % 2 ? "#b8732e" : "#a8622a", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(x, y - 34);
    brush.vertex(x + 9, y - 14);
    brush.vertex(x + 4, y + 8);
    brush.vertex(x - 6, y - 8);
    brush.endShape(true);
  }
}
