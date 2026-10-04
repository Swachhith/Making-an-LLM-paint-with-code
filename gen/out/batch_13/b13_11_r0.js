async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1f4");
  brush.noStroke();
  // soft lilac-grey ground wash so white petals read
  brush.fill("#cdc3d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, 120);
  brush.vertex(620, 40);
  brush.vertex(620, 520);
  brush.vertex(-20, 600);
  brush.endShape(true);
  // arcing branch from bottom right up and over to the left
  brush.fill("#6b5048", 215);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(600, 560);
  brush.vertex(470, 380);
  brush.vertex(310, 260);
  brush.vertex(140, 220);
  brush.vertex(60, 240);
  brush.vertex(62, 256);
  brush.vertex(140, 240);
  brush.vertex(300, 282);
  brush.vertex(454, 400);
  brush.vertex(590, 590);
  brush.endShape(true);
  // blossoms along the arc: pink bases, white paper tips
  let bl = [[80, 225, 50], [240, 245, 40], [380, 310, 55], [520, 470, 36]];
  for (let b of bl) {
    let x = b[0], y = b[1], s = b[2];
    for (let k = 0; k < 5; k++) {
      let a = -90 + (k - 2) * 28;
      // shadow around petal so white shows
      brush.fill("#b9a6c6", 180);
      brush.fillBleed(0.3);
      brush.beginShape(1);
      brush.vertex(x, y);
      brush.vertex(x + cos(a - 18) * s * 1.3, y + sin(a - 18) * s * 1.3);
      brush.vertex(x + cos(a + 18) * s * 1.3, y + sin(a + 18) * s * 1.3);
      brush.endShape(true);
      brush.fill("#e7a3bd", 210);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(1);
      brush.vertex(x - 8, y);
      brush.vertex(x + cos(a - 12) * s * 0.9, y + sin(a - 12) * s * 0.9);
      brush.vertex(x + cos(a + 12) * s * 0.9, y + sin(a + 12) * s * 0.9);
      brush.vertex(x + 8, y);
      brush.endShape(true);
    }
    brush.fill("#c2587e", 200);
    brush.fillBleed(0.2);
    brush.circle(x, y, s * 0.28, 0.4);
  }
}
