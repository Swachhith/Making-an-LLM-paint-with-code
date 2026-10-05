async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f7");
  brush.noStroke();
  // sky: pale blue-grey, two passes, high
  brush.fill("#a8b8d8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#b8c4d8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(200, 130); brush.vertex(-20, 115);
  brush.endShape(true);
  // soft cloud bank near the horizon
  brush.fill("#b6c2d0", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 190); brush.vertex(100, 170); brush.vertex(200, 185); brush.vertex(300, 165); brush.vertex(400, 180); brush.vertex(500, 165); brush.vertex(620, 182); brush.vertex(620, 210); brush.vertex(-20, 210);
  brush.endShape(true);
  // rolling hills, three passes each, left to right, horizon at 200
  let hills = [[20, 195, 160, 185, 300, 180, 420, 190, 520, 195, 600, 200], [120, 200, 260, 192, 400, 198, 540, 204, 600, 206], [40, 206, 200, 202, 360, 204, 520, 206, 600, 208]];
  for (let pass = 0; pass < 3; pass++) {
    for (let h of hills) {
      brush.fill(pass == 2 ? "#8fbf8e" : "#9fc08a", pass == 2 ? 200 : 180);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.45);
      brush.beginShape(0.3);
      brush.vertex(h[0], h[3]); brush.vertex(h[2], h[1]); brush.vertex(h[4], h[3]); brush.vertex(h[6], h[1]); brush.vertex(h[8], h[3]); brush.vertex(h[10], h[2]);
      brush.endShape(true);
    }
  }
  // meadow in the foreground, paper left, with a few tall grasses
  for (let i = 0; i < 35; i++) {
    let x = 10 + i * 17;
    let h = 60 + (i % 3) * 15;
    brush.fill("#8fbf8e", 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(x, 208); brush.vertex(x + 4, 200 - h); brush.vertex(x + 10, 208);
    brush.endShape(true);
  }
  // a lone tree in the right meadow
  brush.fill("#5a7a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(500, 200); brush.vertex(480, 120); brush.vertex(470, 90); brush.vertex(480, 100); brush.vertex(490, 130); brush.vertex(510, 120); brush.vertex(530, 200);
  brush.endShape(true);
  brush.fill("#5a7a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(470, 115); brush.vertex(440, 95); brush.vertex(430, 115); brush.vertex(445, 130);
  brush.endShape(true);
}
