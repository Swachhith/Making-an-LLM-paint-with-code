async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe6");
  brush.noStroke();

  // warm sky: pale lilac fading to peach
  brush.fill("#e8cfd8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 260); brush.vertex(200, 230); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#f4d6b8", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 230); brush.vertex(620, 230); brush.vertex(620, 420); brush.vertex(300, 430); brush.vertex(-20, 420);
  brush.endShape(true);

  // rolling hills in the distance
  brush.fill("#d69a5a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 420); brush.vertex(150, 380); brush.vertex(320, 420); brush.vertex(500, 370); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b07a44", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(420, 480); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // meadow: clover and tall grass
  brush.fill("#8fb65a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5f9a3a", 190);
  brush.beginShape(0.9);
  brush.vertex(-20, 440); brush.vertex(300, 430); brush.vertex(620, 445); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // scattered clover
  for (let i = 0; i < 40; i++) {
    const x = random(0, 600), y = random(420, 620);
    brush.fill("#4a8a30", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, random(6, 9), 0.3);
  }
  // tall grass tufts
  for (let i = 0; i < 80; i++) {
    const x = random(0, 600), y = random(430, 620);
    brush.fill("#5f8a30", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(x, y); brush.vertex(x + 10, y - 14); brush.vertex(x + 20, y - 30); brush.vertex(x + 6, y - 32); brush.vertex(x - 6, y - 30); brush.vertex(x - 20, y - 14);
    brush.endShape(true);
  }

  // cottage: small, tucked in the hill
  const cx = 320, cy = 460;
  brush.fill("#8a6a4a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(cx - 120, cy - 30); brush.vertex(cx - 100, cy - 30); brush.vertex(cx - 100, cy + 40); brush.vertex(cx - 60, cy + 40); brush.vertex(cx - 60, cy + 100); brush.vertex(cx, cy + 100); brush.vertex(cx + 60, cy + 100); brush.vertex(cx + 60, cy + 40); brush.vertex(cx + 100, cy + 40); brush.vertex(cx + 100, cy - 30); brush.vertex(cx + 120, cy - 30);
  brush.endShape(true);
  // chimney
  brush.fill("#5a4434", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(cx + 82, cy - 30); brush.vertex(cx + 100, cy - 30); brush.vertex(cx + 100, cy + 10); brush.vertex(cx + 82, cy + 10);
  brush.endShape(true);
  // red roof
  brush.fill("#c8204a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(cx - 120, cy - 30); brush.vertex(cx - 70, cy - 90); brush.vertex(cx, cy - 100); brush.vertex(cx + 70, cy - 90); brush.vertex(cx + 120, cy - 30);
  brush.endShape(true);
  // front door
  brush.fill("#3a1a14", 240);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(cx - 22, cy + 40); brush.vertex(cx + 22, cy + 40); brush.vertex(cx + 22, cy + 100); brush.vertex(cx - 22, cy + 100);
  brush.endShape(true);
  brush.fill("#f0e0a0", 240);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(cx - 22, cy + 40); brush.vertex(cx + 22, cy + 40); brush.vertex(cx + 22, cy + 60); brush.vertex(cx - 22, cy + 60);
  brush.endShape(true);
  // chimney smoke
  brush.fill("#b0a080", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx + 90, cy - 60, 12, 0.5);
  brush.circle(cx + 92, cy - 80, 8, 0.5);
  brush.circle(cx + 94, cy - 100, 6, 0.5);
  // windows
  for (const w of [[cx - 40, cy + 12], [cx + 40, cy + 12]]) {
    brush.fill("#f4d6b8", 240);
    brush.fillBleed(0.15);
    brush.beginShape(0.1);
    brush.vertex(w[0], w[1]); brush.vertex(w[0] + 28, w[1]); brush.vertex(w[0] + 28, w[1] + 26); brush.vertex(w[0], w[1] + 26);
    brush.endShape(true);
  }
  // path to the door
  brush.fill("#c9a868", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(cx - 10, 490); brush.vertex(cx + 10, 490); brush.vertex(cx + 14, 460); brush.vertex(cx - 14, 460);
  brush.endShape(true);
  // sun low behind the hill
  brush.fill("#ffd08a", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(520, 220, 40, 0.5);
  brush.fill("#ffe0a0", 210);
  brush.circle(535, 210, 20, 0.5);
}
