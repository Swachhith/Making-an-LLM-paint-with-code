async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcecd4");
  brush.noStroke();

  let ORANGE = "#f08a24";
  let CRIMSON = "#c8283c";
  let DARK = "#241428";

  // sky: crimson top melting into orange
  brush.fill(CRIMSON, 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 170);
  brush.vertex(0, 200);
  brush.endShape(true);
  brush.fill(ORANGE, 210);
  brush.beginShape(0.7);
  brush.vertex(0, 150);
  brush.vertex(600, 130);
  brush.vertex(600, 360);
  brush.vertex(0, 360);
  brush.endShape(true);
  brush.fill(CRIMSON, 140);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(60, 110);
  brush.vertex(380, 90);
  brush.vertex(360, 130);
  brush.vertex(90, 150);
  brush.endShape(true);

  // sun left as paper, with ring of orange around it
  brush.fill(ORANGE, 120);
  brush.fillBleed(0.3);
  brush.circle(300, 350, 80, 0.4);

  // sea
  brush.fill(DARK, 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.2);
  brush.vertex(0, 360);
  brush.vertex(600, 360);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  // reflection
  for (let i = 0; i < 8; i++) {
    let y = 372 + i * 26;
    let w = 30 + i * 12;
    brush.fill(ORANGE, 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(300 - w, y);
    brush.vertex(300 + w, y + 3);
    brush.vertex(300 + w * 0.8, y + 12);
    brush.vertex(300 - w * 0.8, y + 11);
    brush.endShape(true);
  }

  // headland with lighthouse at left
  brush.fill(DARK, 245);
  brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(0, 290);
  brush.vertex(60, 280);
  brush.vertex(140, 320);
  brush.vertex(200, 365);
  brush.vertex(0, 380);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(62, 285);
  brush.vertex(68, 220);
  brush.vertex(86, 220);
  brush.vertex(92, 290);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(64, 222);
  brush.vertex(77, 205);
  brush.vertex(90, 222);
  brush.endShape(true);

  // sailboat silhouette right
  brush.beginShape(0);
  brush.vertex(430, 395);
  brush.vertex(520, 395);
  brush.vertex(505, 412);
  brush.vertex(445, 412);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(472, 390);
  brush.vertex(478, 260);
  brush.vertex(520, 385);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(468, 390);
  brush.vertex(470, 290);
  brush.vertex(438, 388);
  brush.endShape(true);

  // two gulls
  brush.fill(DARK, 230);
  brush.beginShape(0.5);
  brush.vertex(380, 200);
  brush.vertex(398, 190);
  brush.vertex(408, 202);
  brush.vertex(418, 190);
  brush.vertex(436, 200);
  brush.vertex(408, 210);
  brush.endShape(true);
}
