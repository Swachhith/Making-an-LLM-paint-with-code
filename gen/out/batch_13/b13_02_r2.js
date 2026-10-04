async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede4d4");
  randomSeed(2);
  brush.noStroke();
  // low evening sky, ochre to dusty rose
  brush.fill("#dcb894", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 230);
  brush.vertex(-10, 240);
  brush.endShape(true);
  brush.fill("#b89a90", 170);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 80);
  brush.vertex(-10, 110);
  brush.endShape(true);
  // blue-grey hills and a line of poplars
  brush.fill("#7e8074", 205);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 236);
  brush.vertex(160, 212);
  brush.vertex(340, 226);
  brush.vertex(610, 206);
  brush.vertex(610, 252);
  brush.vertex(-10, 254);
  brush.endShape(true);
  for (let t = 0; t < 5; t++) {
    let x = 400 + t * 30;
    brush.fill("#4c5236", 215);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(x - 8, 246);
    brush.vertex(x, 196 - (t % 2) * 10);
    brush.vertex(x + 8, 246);
    brush.endShape(true);
  }
  // soil
  brush.fill("#9a7e5c", 195);
  brush.fillBleed(0.3);
  brush.beginShape(0);
  brush.vertex(-10, 250);
  brush.vertex(610, 250);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // a stream instead of a track, winding in from the lower right
  brush.fill("#8c9aa0", 210);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(290, 252);
  brush.vertex(300, 252);
  brush.vertex(340, 320);
  brush.vertex(300, 400);
  brush.vertex(420, 520);
  brush.vertex(520, 610);
  brush.vertex(360, 610);
  brush.vertex(270, 410);
  brush.vertex(316, 320);
  brush.endShape(true);
  // lavender rows, each as clustered dabs following the perspective line
  let vx = 296, vy = 250;
  for (let i = -5; i <= 5; i++) {
    let bx = vx + i * 130;
    for (let t = 0; t < 12; t++) {
      let f = pow(t / 11, 1.6);
      let x = lerp(vx + i * 6, bx, f);
      let y = lerp(vy + 4, 620, f);
      let r = 4 + f * 34;
      if (abs(x - lerp(300, 440, f)) < r + 30 * f && y > 300) continue;
      brush.fill(t % 2 ? "#6c4f8e" : "#8364a4", 215);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(x + random(-3, 3), y, r, 0.7);
    }
    for (let t = 3; t < 12; t += 2) {
      let f = pow(t / 11, 1.6);
      let x = lerp(vx + i * 6, bx, f);
      let y = lerp(vy + 4, 620, f);
      if (abs(x - lerp(300, 440, f)) < 30 + 30 * f && y > 300) continue;
      brush.fill("#402a5c", 190);
      brush.fillBleed(0.22);
      brush.circle(x + 4, y + 6, 3 + f * 16, 0.6);
    }
  }
}
