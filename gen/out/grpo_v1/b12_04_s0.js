async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe2");
  brush.noStroke();

  // limited palette: two violets + one green
  const v1 = "#5a3a8a";
  const v2 = "#3a1e6a";
  const g = "#2f6a3a";

  // stems and leaves
  brush.fill(g, 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 520); brush.vertex(325, 520); brush.vertex(320, 440); brush.vertex(300, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 520); brush.vertex(275, 520); brush.vertex(280, 440); brush.vertex(300, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 520); brush.vertex(230, 520); brush.vertex(230, 440); brush.vertex(300, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 520); brush.vertex(370, 520); brush.vertex(370, 440); brush.vertex(300, 440);
  brush.endShape(true);

  // three blooms, each two passes
  function bloom(x, y, tilt, open) {
    const r = 85 * open;
    for (let p = 0; p < 2; p++) {
      brush.fill(v1, 200 - p * 20);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.4);
      brush.vertex(x, y);
      brush.vertex(x + 10 * cos(tilt - 70), y + 10 * sin(tilt - 70));
      brush.vertex(x + 35 * cos(tilt - 45), y + 35 * sin(tilt - 45));
      brush.vertex(x + 65 * cos(tilt - 15), y + 65 * sin(tilt - 15));
      brush.vertex(x + 80 * cos(tilt - 2), y + 80 * sin(tilt - 2));
      brush.vertex(x + 65 * cos(tilt + 2), y + 65 * sin(tilt + 2));
      brush.vertex(x + 80 * cos(tilt + 15), y + 65 * sin(tilt + 15));
      brush.vertex(x + 65 * cos(tilt + 45), y + 35 * sin(tilt + 45));
      brush.vertex(x + 35 * cos(tilt + 70), y + 10 * sin(tilt + 70));
      brush.endShape(true);
      // second pass, deeper
      brush.fill(v2, 210);
      brush.fillBleed(0.2);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.4);
      brush.vertex(x, y);
      brush.vertex(x + 40 * cos(tilt - 12), y + 40 * sin(tilt - 12));
      brush.vertex(x + 65 * cos(tilt - 2), y + 65 * sin(tilt - 2));
      brush.vertex(x + 65 * cos(tilt + 2), y + 65 * sin(tilt + 2));
      brush.vertex(x + 40 * cos(tilt + 12), y + 40 * sin(tilt + 12));
      brush.endShape(true);
    }
    // falls
    for (let f = 0; f < 2; f++) {
      brush.fill(v1, 190 - f * 10);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.4);
      brush.vertex(x, y);
      brush.vertex(x + 20 * cos(tilt - 40), y + 20 * sin(tilt - 40));
      brush.vertex(x + 40 * cos(tilt - 20), y + 40 * sin(tilt - 20));
      brush.vertex(x + 35 * cos(tilt + 20), y + 35 * sin(tilt + 20));
      brush.vertex(x + 20 * cos(tilt + 40), y + 20 * sin(tilt + 40));
      brush.endShape(true);
    }
    // centre
    brush.fill(v2, 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 16, 0.3);
    brush.fill("#d8a03a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, 9, 0.3);
  }

  bloom(300, 230, -10, 0.9);
  bloom(240, 300, 12, 0.75);
  bloom(360, 300, -12, 0.75);
}
