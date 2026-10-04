async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede6d6");
  randomSeed(44);
  brush.noStroke();

  // overcast earthy sky in loose horizontal passes
  const skies = ["#c7b595", "#d6c3a0", "#b8b2a0"];
  for (let i = 0; i < 3; i++) {
    brush.fill(skies[i], 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    const y = 30 + i * 90;
    brush.beginShape(0.7);
    brush.vertex(-20, y); brush.vertex(200, y - 30); brush.vertex(620, y + 10);
    brush.vertex(620, y + 110); brush.vertex(300, y + 90); brush.vertex(-20, y + 120);
    brush.endShape(true);
  }

  // distant hills
  brush.fill("#8b8f78", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(-20, 380); brush.vertex(120, 345); brush.vertex(290, 365);
  brush.vertex(470, 340); brush.vertex(620, 360); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);

  // field bands
  const fields = [["#a78f5c", 395], ["#7f8a55", 430], ["#b59a60", 470], ["#6f6a45", 530]];
  for (const f of fields) {
    brush.fill(f[0], 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.6);
    brush.vertex(-20, f[1] + random(-8, 8)); brush.vertex(300, f[1] - 12);
    brush.vertex(620, f[1] + random(-8, 8)); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }

  // hedge line
  brush.fill("#4f5237", 200);
  for (let x = -10; x < 620; x += 28) {
    brush.circle(x, 432 + random(-3, 3), random(9, 14), 0.5);
  }

  // windmill, small, right of centre
  const mx = 420, my = 405;
  for (let pass = 0; pass < 2; pass++) {
  brush.fill(pass ? "#4a3a2a" : "#6e5840", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0);
  brush.vertex(mx - 11, my - 55); brush.vertex(mx + 11, my - 55);
  brush.vertex(mx + 18, my); brush.vertex(mx - 18, my);
  brush.endShape(true);
  }
  brush.fill("#3f3226", 220);
  brush.beginShape(0.3);
  brush.vertex(mx - 14, my - 55); brush.vertex(mx, my - 70); brush.vertex(mx + 14, my - 55);
  brush.endShape(true);
  // sails
  for (let k = 0; k < 8; k++) {
    brush.fill("#3e3226", 200);
    const a = 25 + (k % 4) * 90;
    const hx = mx, hy = my - 60;
    const ux = cos(a), uy = sin(a);
    brush.beginShape(0);
    brush.vertex(hx + ux * 6, hy + uy * 6);
    brush.vertex(hx + ux * 70, hy + uy * 70);
    brush.vertex(hx + ux * 70 - uy * 16, hy + uy * 70 + ux * 16);
    brush.vertex(hx + ux * 10 - uy * 15, hy + uy * 10 + ux * 15);
    brush.endShape(true);
  }

  // a lone tree at left
  brush.fill("#5a5c3c", 200);
  brush.circle(110, 395, 26, 0.5);
  brush.fill("#3f432b", 190);
  brush.circle(116, 400, 16, 0.5);
}
