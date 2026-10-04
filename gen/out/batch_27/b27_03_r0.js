async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e4c8");
  randomSeed(303);
  brush.noStroke();
  // limited palette: cadmium orange, crimson-red, and a dark indigo-brown
  // orange glow over whole sky
  brush.fill("#f08a24", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 480);
  brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#f08a24", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 250);
  brush.vertex(620, 230);
  brush.vertex(620, 460);
  brush.vertex(-20, 470);
  brush.endShape(true);
  // red band under the clouds
  brush.fill("#c7322a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 150);
  brush.vertex(300, 200);
  brush.vertex(620, 160);
  brush.vertex(620, 280);
  brush.vertex(300, 300);
  brush.vertex(-20, 270);
  brush.endShape(true);
  // heavy storm clouds, dark, torn
  for (let k = 0; k < 3; k++) {
    brush.fill("#2e2330", 170 + k * 20);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-20, -20);
    brush.vertex(620, -20);
    brush.vertex(620, 90 + k * 10);
    let yBase = 150 - k * 25;
    for (let x = 600; x >= 0; x -= 60) {
      brush.vertex(x, yBase + random(-40, 40));
    }
    brush.vertex(-20, 120);
    brush.endShape(true);
  }
  // a lower streak of cloud
  brush.fill("#2e2330", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(80, 300);
  brush.vertex(300, 285);
  brush.vertex(520, 310);
  brush.vertex(380, 330);
  brush.vertex(150, 325);
  brush.endShape(true);
  // silhouetted land
  brush.fill("#2e2330", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 470);
  brush.vertex(150, 455);
  brush.vertex(350, 470);
  brush.vertex(620, 450);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // silhouette tree: trunk + crown, left of centre
  brush.fill("#2e2330", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(190, 470);
  brush.vertex(200, 370);
  brush.vertex(218, 370);
  brush.vertex(222, 470);
  brush.endShape(true);
  for (let i = 0; i < 8; i++) {
    brush.fill("#2e2330", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(205 + random(-60, 60), 350 + random(-40, 20), random(28, 45), 0.5);
  }
  // windmill-ish farmhouse silhouette on right
  brush.fill("#2e2330", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(440, 460);
  brush.vertex(440, 420);
  brush.vertex(470, 395);
  brush.vertex(500, 420);
  brush.vertex(530, 420);
  brush.vertex(530, 460);
  brush.endShape(true);
  // birds
  for (let i = 0; i < 4; i++) {
    brush.fill("#2e2330", 220);
    brush.circle(380 + i * 22 + random(-5, 5), 230 + random(-15, 15), 3, 0.3);
  }
}
