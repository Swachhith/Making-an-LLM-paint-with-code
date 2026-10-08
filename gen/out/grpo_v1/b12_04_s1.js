async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f0e6");
  brush.noStroke();

  // limited palette: cobalt, magenta, sage
  const cobalt = "#0e4a8a";
  const magenta = "#9a2f8e";
  const sage = "#5f8a5a";

  // ground
  brush.fill(sage, 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stems
  brush.fill(cobalt, 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(260, 470); brush.vertex(270, 520); brush.vertex(262, 620); brush.vertex(250, 620); brush.vertex(260, 520);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(350, 470); brush.vertex(360, 520); brush.vertex(352, 620); brush.vertex(340, 620); brush.vertex(350, 520);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(440, 470); brush.vertex(450, 520); brush.vertex(442, 620); brush.vertex(430, 620); brush.vertex(440, 520);
  brush.endShape(true);

  // iris: three blooms, side by side
  function bloom(x, y, tilt) {
    // falls: three long soft petals curving down
    let fx = ["#5a1a7a", "#7a127a", "#7a127a"];
    let fy = [-15, 25, -15];
    brush.fill(magenta, 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + 12, y + 20); brush.vertex(x + 40, y + 150 + fy[0]); brush.vertex(x + 22, y + 170 + fy[0]); brush.vertex(x - 22, y + 170 + fy[0]); brush.vertex(x - 40, y + 150 + fy[0]); brush.vertex(x - 12, y + 20);
    brush.endShape(true);
    brush.fill(magenta, 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + 18, y + 30); brush.vertex(x + 46, y + 120 + fy[1]); brush.vertex(x + 28, y + 140 + fy[1]); brush.vertex(x - 28, y + 140 + fy[1]); brush.vertex(x - 46, y + 120 + fy[1]); brush.vertex(x - 18, y + 30);
    brush.endShape(true);
    brush.fill(magenta, 150);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + 20, y + 40); brush.vertex(x + 50, y + 110 + fy[2]); brush.vertex(x + 30, y + 130 + fy[2]); brush.vertex(x - 30, y + 130 + fy[2]); brush.vertex(x - 50, y + 110 + fy[2]); brush.vertex(x - 20, y + 40);
    brush.endShape(true);
    // upright standards: two shorter petals
    brush.fill(magenta, 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x + 12, y - 30); brush.vertex(x + 30, y - 110); brush.vertex(x + 18, y - 130); brush.vertex(x - 18, y - 130); brush.vertex(x - 30, y - 110); brush.vertex(x - 12, y - 30);
    brush.endShape(true);
    brush.fill(magenta, 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x - 12, y - 30); brush.vertex(x - 30, y - 110); brush.vertex(x - 42, y - 130); brush.vertex(x - 42, y - 130); brush.vertex(x - 30, y - 110); brush.vertex(x - 12, y - 30);
    brush.endShape(true);
    // yellow throat
    brush.fill("#f4d03a", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(x - 8, y + 10); brush.vertex(x + 16, y + 10); brush.vertex(x + 22, y + 60); brush.vertex(x - 22, y + 60);
    brush.endShape(true);
  }

  bloom(270, 370, -5);
  bloom(350, 365, 5);
  bloom(440, 375, -8);
}
