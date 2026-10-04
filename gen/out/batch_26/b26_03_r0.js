async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ead8");
  randomSeed(2603);
  brush.noStroke();

  // muted grey-ochre sky
  brush.fill("#b8b49a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 270);
  brush.endShape(true);
  brush.fill("#d4c49a", 140);
  brush.beginShape(0.6);
  brush.vertex(-20, 160); brush.vertex(300, 190); brush.vertex(620, 150); brush.vertex(620, 270); brush.vertex(-20, 280);
  brush.endShape(true);

  // distant hedgerow
  brush.fill("#6e7152", 180);
  brush.beginShape(0.7);
  brush.vertex(-20, 268); brush.vertex(80, 250); brush.vertex(170, 262); brush.vertex(260, 246);
  brush.vertex(420, 258); brush.vertex(520, 244); brush.vertex(620, 256); brush.vertex(620, 285); brush.vertex(-20, 290);
  brush.endShape(true);

  // wide field in bands
  let bands = ["#a39a62", "#8e8a52", "#b09a5e", "#7e7844"];
  for (let i = 0; i < 4; i++) {
    let y0 = 275 + i * 80;
    brush.fill(bands[i], 160 + i * 15);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(-20, y0); brush.vertex(200, y0 + random(-10, 15)); brush.vertex(420, y0 + random(-10, 15));
    brush.vertex(620, y0 + 5); brush.vertex(620, y0 + 110); brush.vertex(-20, y0 + 110);
    brush.endShape(true);
  }

  // small pond, grey sky reflected
  brush.fill("#8d9a98", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(300, 300); brush.vertex(380, 292); brush.vertex(470, 302); brush.vertex(440, 318); brush.vertex(330, 320);
  brush.endShape(true);

  // willow: trunk then drooping curtain
  brush.fill("#4a3c28", 210);
  brush.beginShape(0.3);
  brush.vertex(372, 300); brush.vertex(388, 300); brush.vertex(386, 240); brush.vertex(374, 240);
  brush.endShape(true);
  brush.fill("#8a9150", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(330, 300); brush.vertex(328, 230); brush.vertex(355, 195); brush.vertex(400, 190);
  brush.vertex(432, 222); brush.vertex(436, 302);
  brush.endShape(true);
  for (let k = 0; k < 7; k++) {
    let x = 332 + k * 15;
    brush.fill(k % 2 ? "#5d6a34" : "#6f7a3c", 200);
    brush.beginShape(0.6);
    brush.vertex(x, 205 + random(0, 15)); brush.vertex(x + 16, 205 + random(0, 15));
    brush.vertex(x + 14, 298 + random(-6, 4)); brush.vertex(x + 1, 300 + random(-6, 4));
    brush.endShape(true);
  }
  // reflection of the willow in the pond
  brush.fill("#56603a", 160);
  brush.beginShape(0.7);
  brush.vertex(345, 304); brush.vertex(425, 304); brush.vertex(412, 318); brush.vertex(352, 318);
  brush.endShape(true);

  // foreground grass tufts
  brush.fill("#5c5a30", 200);
  for (let k = 0; k < 10; k++) {
    let x = random(0, 600), y = random(530, 590);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x + 20, y - 35); brush.vertex(x + 34, y + 2);
    brush.endShape(true);
  }
}
