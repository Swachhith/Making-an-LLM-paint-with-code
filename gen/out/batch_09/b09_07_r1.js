async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f8");
  brush.noStroke();

  // big deep sky
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#1f6ad0", 200);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#5aa0e8", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, 160); brush.vertex(620, 180); brush.vertex(620, 430); brush.vertex(-20, 430);
  brush.endShape(true);
  // clouds as paper with grey undersides
  brush.fill("#9aa8c8", 150);
  brush.circle(160, 180, 40, 0.8);
  brush.circle(440, 130, 50, 0.8);

  // mountains low on the canvas
  brush.fill("#4a2a8a", 230);
  brush.beginShape(0.2);
  brush.vertex(-20, 440); brush.vertex(60, 360); brush.vertex(140, 390); brush.vertex(240, 330);
  brush.vertex(330, 400); brush.vertex(420, 350); brush.vertex(520, 380); brush.vertex(620, 340);
  brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#1e0e4a", 210);
  brush.beginShape(0.3);
  brush.vertex(240, 330); brush.vertex(330, 400); brush.vertex(290, 440); brush.vertex(250, 440);
  brush.endShape(true);

  // snow-dusted peak tops left as paper; second mountain pass lower down
  brush.fill("#3a2a7a", 190);
  brush.beginShape(0.4);
  brush.vertex(-20, 420); brush.vertex(100, 400); brush.vertex(300, 415); brush.vertex(520, 395); brush.vertex(620, 400); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);

  // valley slopes in autumn colour
  brush.fill("#e0701a", 220);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(120, 430); brush.vertex(280, 480); brush.vertex(-20, 520);
  brush.endShape(true);
  brush.fill("#c8201a", 210);
  brush.beginShape(0.5);
  brush.vertex(620, 410); brush.vertex(470, 440); brush.vertex(320, 485); brush.vertex(620, 520);
  brush.endShape(true);
  brush.fill("#f0b41a", 210);
  brush.beginShape(0.5);
  brush.vertex(-20, 490); brush.vertex(300, 470); brush.vertex(620, 495); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // clusters of trees: dabs
  let trees = [[60, 470, "#b01818"], [110, 500, "#e05a10"], [500, 470, "#8a1a3a"], [560, 490, "#f09010"],
               [230, 520, "#c82810"], [380, 530, "#6a8a1a"], [440, 560, "#d04010"], [150, 570, "#9a2a10"]];
  for (let t of trees) {
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.fill(t[2], 220);
    brush.circle(t[0], t[1], 22, 0.7);
    brush.circle(t[0] + 18, t[1] + 6, 16, 0.7);
  }
  // river through the valley
  brush.fill("#1a5ab8", 225);
  brush.beginShape(0.7);
  brush.vertex(290, 480); brush.vertex(310, 480); brush.vertex(340, 540); brush.vertex(320, 620); brush.vertex(260, 620); brush.vertex(300, 540);
  brush.endShape(true);
}
