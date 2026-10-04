async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7eee6");
  brush.noStroke();
  const warmA = "#f08a3c";
  const warmB = "#d9577a";
  const dark = "#2a2440";
  // sky: rose above, orange at horizon
  brush.fill(warmB, 180);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 180);
  brush.endShape(true);
  brush.fill(warmA, 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 150); brush.vertex(620, 170); brush.vertex(620, 285); brush.vertex(-20, 285);
  brush.endShape(true);
  // sun left as pale, ring of orange around it
  brush.fill(warmA, 220);
  brush.fillBleed(0.25);
  brush.circle(300, 250, 60, 0.4);
  // distant shore band in dark
  brush.fill(dark, 200);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 280); brush.vertex(80, 262); brush.vertex(170, 275); brush.vertex(260, 268);
  brush.vertex(400, 276); brush.vertex(520, 258); brush.vertex(620, 272); brush.vertex(620, 302); brush.vertex(-20, 302);
  brush.endShape(true);
  // mist over the shore
  brush.fill(warmB, 120);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 285); brush.vertex(620, 280); brush.vertex(620, 305); brush.vertex(-20, 310);
  brush.endShape(true);
  // water: mirrored
  brush.fill(warmA, 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 302); brush.vertex(620, 302); brush.vertex(620, 430); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill(warmB, 190);
  brush.fillBleed(0.28);
  brush.beginShape(0.5);
  brush.vertex(-20, 410); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // reflected sun streak
  brush.fill(warmA, 210);
  brush.fillBleed(0.2);
  for (let i = 0; i < 6; i++) {
    const w = 60 - i * 7;
    const y = 320 + i * 26;
    brush.beginShape(0.5);
    brush.vertex(300 - w, y); brush.vertex(300 + w, y + 2); brush.vertex(300 + w - 6, y + 16); brush.vertex(300 - w + 6, y + 15);
    brush.endShape(true);
  }
  // reflected shore
  brush.fill(dark, 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 302); brush.vertex(620, 302); brush.vertex(620, 322); brush.vertex(400, 318); brush.vertex(170, 326); brush.vertex(-20, 318);
  brush.endShape(true);
  // dark ripples lower down
  for (let i = 0; i < 5; i++) {
    const y = 470 + i * 28;
    brush.fill(dark, 150 + i * 15);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(-20, y); brush.vertex(180 + i * 20, y - 4); brush.vertex(240 + i * 25, y + 12); brush.vertex(-20, y + 18);
    brush.endShape(true);
  }
  // near reeds, left foreground
  brush.fill(dark, 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(-20, 620); brush.vertex(-20, 520); brush.vertex(20, 470); brush.vertex(45, 540); brush.vertex(70, 480); brush.vertex(90, 560); brush.vertex(130, 620);
  brush.endShape(true);
}
