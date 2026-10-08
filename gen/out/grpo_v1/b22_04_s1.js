async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f2ec");
  brush.noStroke();
  // soft blue-grey sky, a wide band
  brush.fill("#9fb7d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 140); brush.vertex(300, 150); brush.vertex(-20, 140);
  brush.endShape(true);
  // misty hills in the distance, lavender
  brush.fill("#a8a3c8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 140); brush.vertex(200, 130); brush.vertex(420, 145); brush.vertex(620, 135); brush.vertex(620, 200); brush.vertex(-20, 210);
  brush.endShape(true);
  // meadow ground: warm lilac
  brush.fill("#c9b8d0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 210); brush.vertex(620, 210); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few clover patches
  brush.fill("#9a8aa8", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(150, 300, 22, 0.4);
  brush.circle(470, 330, 18, 0.4);
  brush.circle(200, 420, 26, 0.4);
  brush.circle(500, 460, 20, 0.4);
  // poppies: many small cups, two passes each, soft crimson
  const px = [40, 90, 130, 170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570];
  const py = [320, 315, 330, 310, 335, 320, 330, 315, 325, 330, 320, 325, 330, 320];
  for (let i = 0; i < px.length; i++) {
    let x = px[i] + ((i * 7) % 15) - 7;
    let y = py[i] + ((i * 11) % 12) - 6;
    // first loose pass
    brush.fill("#d83a4e", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x - 14, y - 14); brush.vertex(x - 6, y - 10); brush.vertex(x + 6, y - 10); brush.vertex(x + 14, y - 14); brush.vertex(x + 14, y + 8); brush.vertex(x + 6, y + 12); brush.vertex(x - 6, y + 12); brush.vertex(x - 14, y + 8);
    brush.endShape(true);
    // second pass, darker
    brush.fill("#a81a32", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 10, y - 10); brush.vertex(x, y - 6); brush.vertex(x + 10, y - 10); brush.vertex(x + 10, y + 4); brush.vertex(x, y + 8); brush.vertex(x - 10, y + 4);
    brush.endShape(true);
  }
  // stems: thin soft green ribbons
  for (let i = 0; i < px.length; i++) {
    let x = px[i] + ((i * 7) % 15) - 7;
    let y = py[i] + ((i * 11) % 12) - 6;
    brush.fill("#5f8a5a", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, y + 6); brush.vertex(x + 4, y + 30); brush.vertex(x - 4, y + 30); brush.vertex(x - 4, y + 70); brush.vertex(x + 4, y + 70);
    brush.endShape(true);
  }
}
