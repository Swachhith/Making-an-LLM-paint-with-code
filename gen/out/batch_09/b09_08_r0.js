async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff6ec");
  brush.noStroke();

  // big sky: violet top, rose middle, gold at horizon
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#ffb020", 200);
  brush.beginShape(0.3);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#f0487a", 190);
  brush.beginShape(0.4);
  brush.vertex(-20, 100); brush.vertex(620, 100); brush.vertex(620, 330); brush.vertex(-20, 310);
  brush.endShape(true);
  brush.fill("#5a2aa0", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 170); brush.vertex(-20, 150);
  brush.endShape(true);

  // streaky cloud bars
  brush.fill("#c02a6a", 170);
  brush.beginShape(0.6);
  brush.vertex(40, 220); brush.vertex(300, 205); brush.vertex(320, 225); brush.vertex(60, 240);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(330, 290); brush.vertex(580, 280); brush.vertex(560, 302); brush.vertex(340, 308);
  brush.endShape(true);

  // rising sun
  brush.fillBleed(0.25);
  brush.fill("#ffe040", 230);
  brush.circle(300, 440, 55, 0.2);
  brush.fill("#fff080", 200);
  brush.circle(300, 440, 35, 0.2);

  // far shoreline
  brush.fill("#3a1a5a", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 445); brush.vertex(120, 425); brush.vertex(220, 440); brush.vertex(400, 438);
  brush.vertex(520, 422); brush.vertex(620, 440); brush.vertex(620, 455); brush.vertex(-20, 455);
  brush.endShape(true);

  // lake with reflection
  brush.fill("#e87a3a", 190);
  brush.beginShape(0.3);
  brush.vertex(-20, 455); brush.vertex(620, 455); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4a2a8a", 180);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sun path
  brush.fill("#ffd030", 220);
  for (let i = 0; i < 5; i++) {
    let y = 465 + i * 24;
    let w = 50 - i * 6;
    brush.beginShape(0.5);
    brush.vertex(300 - w, y); brush.vertex(300 + w, y - 2); brush.vertex(300 + w - 6, y + 14); brush.vertex(300 - w + 4, y + 15);
    brush.endShape(true);
  }
  // mist band over the water
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.fill("#f8c0c8", 150);
  brush.beginShape(0.7);
  brush.vertex(-20, 450); brush.vertex(200, 440); brush.vertex(620, 455); brush.vertex(620, 480); brush.vertex(-20, 485);
  brush.endShape(true);
}
