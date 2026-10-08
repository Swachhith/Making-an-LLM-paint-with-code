async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f6");
  brush.noStroke();

  // soft blue sky with a pale wash, two passes
  brush.fill("#9fb3d6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(400, 210); brush.vertex(200, 190); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#a8b8e0", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 220); brush.vertex(150, 200); brush.vertex(300, 225); brush.vertex(620, 210); brush.vertex(620, 420); brush.vertex(-20, 430);
  brush.endShape(true);
  // clouds
  brush.fill("#b7c9e4", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(50, 170); brush.vertex(140, 160); brush.vertex(230, 175); brush.vertex(230, 200); brush.vertex(140, 210); brush.vertex(50, 195);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(320, 185); brush.vertex(420, 175); brush.vertex(510, 190); brush.vertex(510, 215); brush.vertex(420, 225); brush.vertex(330, 215);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(450, 200); brush.vertex(560, 190); brush.vertex(630, 205); brush.vertex(630, 230); brush.vertex(560, 240); brush.vertex(450, 230);
  brush.endShape(true);

  // rolling hills, three bands, cool light
  let hills = [[30, 380, 300, 330, 600, 350, 600, 400], [200, 340, 460, 300, 600, 330, 600, 370], [500, 300, 600, 270, 600, 310, 600, 340]];
  for (let pass = 0; pass < 2; pass++) {
    for (let h of hills) {
      brush.fill(pass ? "#7fb2a8" : "#8fb8b0", pass ? 190 : 160);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.8);
      for (let p = 0; p < h.length; p += 2) {
        brush.vertex(h[p], h[p + 1]);
      }
      brush.endShape(true);
    }
  }
  // meadow
  brush.fill("#9fd0b0", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, 380); brush.vertex(620, 370); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few clover dots
  for (let i = 0; i < 40; i++) {
    brush.fill("#4a8a70", 180);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(random(-10, 610), random(380, 620), random(2, 4), 0.2);
  }
}
