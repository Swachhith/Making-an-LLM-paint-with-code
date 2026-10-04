async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8dc");
  brush.noStroke();
  // dusk sky, loose and wet
  brush.fill("#6d5fa8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250);
  brush.vertex(400, 290); brush.vertex(150, 270); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#e98a4f", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 240); brush.vertex(200, 200); brush.vertex(460, 230);
  brush.vertex(620, 210); brush.vertex(620, 380); brush.vertex(-20, 380);
  brush.endShape(true);
  brush.fill("#f2c46a", 170);
  brush.fillBleed(0.28);
  brush.beginShape(0.8);
  brush.vertex(60, 300); brush.vertex(300, 270); brush.vertex(560, 300);
  brush.vertex(520, 360); brush.vertex(100, 360);
  brush.endShape(true);
  // blooms in the sky
  for (let i = 0; i < 9; i++) {
    brush.fill(i % 2 ? "#8b5ea0" : "#d0647a", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.4);
    brush.circle(40 + i * 68 + Math.sin(i * 3.1) * 20, 60 + Math.cos(i * 1.7) * 50, 28 + (i % 3) * 10, 0.8);
  }
  // distant hills
  brush.fill("#4a4f7a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 380); brush.vertex(90, 340); brush.vertex(210, 362); brush.vertex(330, 330);
  brush.vertex(470, 356); brush.vertex(620, 336); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  // wide field
  brush.fill("#3f5d4a", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 400); brush.vertex(250, 392); brush.vertex(620, 404);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#253a33", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 480); brush.vertex(200, 460); brush.vertex(420, 500);
  brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // drips of darker green into the field
  for (let i = 0; i < 7; i++) {
    brush.fill("#1c2b2a", 170);
    brush.fillBleed(0.3);
    brush.circle(30 + i * 90, 540 + (i % 3) * 18, 22, 0.9);
  }
  // window glow first, then house painted around it
  brush.fill("#ffc94a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(386, 396, 16, 0.6);
  brush.fill("#2b2236", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.4);
  // wall left of window
  brush.beginShape(0);
  brush.vertex(350, 380); brush.vertex(378, 380); brush.vertex(378, 418); brush.vertex(350, 418);
  brush.endShape(true);
  // wall right of window
  brush.beginShape(0);
  brush.vertex(394, 380); brush.vertex(420, 380); brush.vertex(420, 418); brush.vertex(394, 418);
  brush.endShape(true);
  // below window
  brush.beginShape(0);
  brush.vertex(350, 404); brush.vertex(420, 404); brush.vertex(420, 420); brush.vertex(350, 420);
  brush.endShape(true);
  // roof
  brush.beginShape(0);
  brush.vertex(342, 384); brush.vertex(385, 350); brush.vertex(428, 384);
  brush.endShape(true);
  // tree beside house
  brush.fill("#1f2c2a", 210);
  brush.fillBleed(0.3);
  brush.circle(450, 378, 24, 0.7);
  brush.circle(462, 392, 18, 0.7);
}
