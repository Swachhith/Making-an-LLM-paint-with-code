async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf2f6");
  randomSeed(77);
  brush.noStroke();
  // cool sky: pale cerulean fading to paper near horizon
  brush.fill("#7fb0d8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 240); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#b8cfe4", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 220); brush.vertex(620, 200); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // plume: rising column then leaning right
  let px = 305, py = 395;
  for (let i = 0; i < 14; i++) {
    let t = i / 13;
    let x = px + t * t * 290 + random(-12, 12);
    let y = py - 30 - t * 300 + random(-8, 8);
    brush.fill(i % 3 == 0 ? "#6e7890" : "#a6afbe", 180 + random(40));
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.circle(x, y, 18 + t * 75, 0.9);
  }
  brush.fill("#555e72", 190);
  brush.fillBleed(0.25);
  brush.circle(px + 5, py - 55, 26, 0.8);
  brush.circle(px + 30, py - 110, 34, 0.8);
  // distant range
  brush.fill("#7f9ab8", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(50, 440); brush.vertex(130, 455); brush.vertex(520, 450);
  brush.vertex(580, 432); brush.vertex(620, 445); brush.vertex(620, 485); brush.vertex(-20, 485);
  brush.endShape(true);
  // cone with snow cap left as paper: paint lower flanks and streaks between snow
  brush.fill("#4f6a8c", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(60, 485); brush.vertex(210, 415); brush.vertex(240, 425); brush.vertex(270, 410); brush.vertex(300, 428);
  brush.vertex(335, 412); brush.vertex(370, 430); brush.vertex(520, 485);
  brush.endShape(true);
  for (let s of [[268, 395, 290, 378], [310, 400, 318, 380], [240, 405, 262, 385]]) {
    brush.fill("#6f86a4", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.3);
    brush.vertex(s[0] - 7, s[1] + 20); brush.vertex(s[2] - 4, s[3]); brush.vertex(s[2] + 4, s[3]); brush.vertex(s[0] + 7, s[1] + 20);
    brush.endShape(true);
  }
  // shadow flank on right
  brush.fill("#324a6a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(335, 420); brush.vertex(370, 432); brush.vertex(520, 486); brush.vertex(400, 486);
  brush.endShape(true);
  // crater edge
  brush.fill("#3a4458", 210);
  brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(278, 372); brush.vertex(332, 372); brush.vertex(328, 380); brush.vertex(282, 380);
  brush.endShape(true);
  // lake foreground reflecting sky
  brush.fill("#9ec0d8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 485); brush.vertex(620, 485); brush.vertex(620, 560); brush.vertex(-20, 560);
  brush.endShape(true);
  brush.fill("#5a7494", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(120, 490); brush.vertex(470, 490); brush.vertex(360, 525); brush.vertex(250, 528);
  brush.endShape(true);
  // near shore
  brush.fill("#56707a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 555); brush.vertex(300, 548); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
