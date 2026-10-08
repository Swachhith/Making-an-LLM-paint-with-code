async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e3d4");
  brush.noStroke();

  // sky: slate-grey with a warm glow near the horizon
  brush.fill("#9aa4b2", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 230); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#d9b08a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 200); brush.vertex(620, 200); brush.vertex(620, 350); brush.vertex(300, 330); brush.vertex(-20, 360);
  brush.endShape(true);

  // ground: meadow in front, darker further back
  brush.fill("#8c8064", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 400); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a5f4a", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 480); brush.vertex(620, 480); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // distant treeline
  brush.fill("#4a4636", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 360); brush.vertex(120, 340); brush.vertex(200, 365); brush.vertex(280, 345); brush.vertex(360, 370); brush.vertex(450, 350); brush.vertex(520, 380); brush.vertex(620, 360); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);

  // the windmill, placed left of centre, seen from a distance
  let wx = 210, wy = 280;
  // tower
  brush.fill("#7a6f5c", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(wx - 12, wy - 120); brush.vertex(wx + 12, wy - 120); brush.vertex(wx + 12, wy + 200); brush.vertex(wx - 12, wy + 200);
  brush.endShape(true);
  brush.fill("#5a5042", 200);
  brush.beginShape(0.1);
  brush.vertex(wx - 12, wy - 120); brush.vertex(wx + 12, wy - 120); brush.vertex(wx + 12, wy + 160); brush.vertex(wx - 12, wy + 160);
  brush.endShape(true);
  // cap
  brush.fill("#6f6a58", 210);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(wx - 18, wy - 120); brush.vertex(wx + 18, wy - 120); brush.vertex(wx + 16, wy - 142); brush.vertex(wx - 16, wy - 142);
  brush.endShape(true);
  // blades
  brush.fill("#3a3428", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(wx, wy - 120); brush.vertex(wx + 28, wy - 150); brush.vertex(wx + 60, wy - 120); brush.vertex(wx + 28, wy - 90);
  brush.vertex(wx, wy - 150); brush.vertex(wx - 28, wy - 90); brush.vertex(wx - 60, wy - 120); brush.vertex(wx - 28, wy - 150);
  brush.endShape(true);
  brush.fill("#5a4e3a", 180);
  brush.beginShape(0.3);
  brush.vertex(wx, wy - 120); brush.vertex(wx + 20, wy - 140); brush.vertex(wx + 50, wy - 110); brush.vertex(wx + 20, wy - 80);
  brush.vertex(wx, wy - 110); brush.vertex(wx - 20, wy - 80); brush.vertex(wx - 50, wy - 110); brush.vertex(wx - 20, wy - 140);
  brush.endShape(true);
  // base
  brush.fill("#4e483a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(wx - 18, wy + 200); brush.vertex(wx + 18, wy + 200); brush.vertex(wx + 18, wy + 250); brush.vertex(wx - 18, wy + 250);
  brush.endShape(true);
  // a few tall grasses in front
  for (let i = 0; i < 9; i++) {
    let x = 200 + i * 50 + (i % 3) * 12;
    let h = 60 + (i % 4) * 20;
    brush.fill("#5a523e", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x, 620); brush.vertex(x - 4, 620 - h); brush.vertex(x + 4, 620 - h * 0.75); brush.vertex(x + 6, 620);
    brush.endShape(true);
  }
}
