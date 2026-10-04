async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e3");
  brush.noStroke();
  // palette: ochre #d89a2b, teal #2f8c8a, neutral sepia #6b4f3a

  brush.fill("#6b4f3a", 70);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(-20, 260);
  brush.endShape(true);
  // meadow wash across the lower two thirds
  brush.fill("#2f8c8a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 250); brush.vertex(200, 225); brush.vertex(420, 240); brush.vertex(620, 220);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // ochre flowers dabbed in the grass
  let s = 7;
  for (let i = 0; i < 40; i++) {
    s = (s * 9301 + 49297) % 233280;
    const x = (s / 233280) * 600;
    s = (s * 9301 + 49297) % 233280;
    const y = 250 + (s / 233280) * 330;
    brush.fill("#d89a2b", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 4 + (y - 250) / 40, true);
  }

  // a second child far off, small, running
  brush.fill("#6b4f3a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(95, 205, 9, true);
  brush.fill("#d89a2b", 210);
  brush.beginShape(0.4);
  brush.vertex(85, 215); brush.vertex(107, 215); brush.vertex(112, 250); brush.vertex(82, 250);
  brush.endShape(true);

  // main child, waist up, arms flung up; ochre shirt
  for (let p = 0; p < 2; p++) {
    brush.fill("#d89a2b", p === 0 ? 190 : 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(230 + p * 8, 620); brush.vertex(235 + p * 6, 430); brush.vertex(260, 385);
    brush.vertex(300, 375); brush.vertex(340, 385); brush.vertex(365 - p * 6, 430); brush.vertex(372 - p * 8, 620);
    brush.endShape(true);
  }
  // arms raised
  const arm = (x0, y0, x1, y1) => {
    const dx = x1 - x0, dy = y1 - y0, l = Math.hypot(dx, dy);
    const nx = -dy / l * 20, ny = dx / l * 20;
    brush.fill("#d89a2b", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(x0 + nx, y0 + ny); brush.vertex(x1 + nx * 0.7, y1 + ny * 0.7);
    brush.vertex(x1 - nx * 0.7, y1 - ny * 0.7); brush.vertex(x0 - nx, y0 - ny);
    brush.endShape(true);
    brush.fill("#e9c7a0", 0);
    brush.fill("#6b4f3a", 120);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x1 + (x1 - x0) * 0.12, y1 + (y1 - y0) * 0.12, 20, true);
  };
  arm(255, 400, 150, 250);
  arm(345, 400, 450, 240);

  // neck and face: sepia thin wash, hair darker
  brush.fill("#6b4f3a", 110);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(285, 390); brush.vertex(285, 350); brush.vertex(315, 350); brush.vertex(315, 390);
  brush.endShape(true);
  brush.fill("#6b4f3a", 130);
  brush.circle(300, 300, 62, true);
  // hair
  brush.fill("#6b4f3a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(235, 300); brush.vertex(245, 250); brush.vertex(300, 228); brush.vertex(355, 250);
  brush.vertex(368, 300); brush.vertex(345, 272); brush.vertex(300, 262); brush.vertex(258, 275);
  brush.endShape(true);
  // teal ribbon in hair, cheeks
  brush.fill("#2f8c8a", 220);
  brush.circle(352, 262, 14, true);
  brush.fill("#d89a2b", 150);
  brush.circle(275, 318, 10, true);
  brush.circle(325, 318, 10, true);
  // eyes and smile
  brush.fill("#6b4f3a", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(282, 300, 5, true);
  brush.circle(318, 300, 5, true);
  brush.beginShape(0.6);
  brush.vertex(285, 330); brush.vertex(300, 342); brush.vertex(315, 330); brush.vertex(300, 336);
  brush.endShape(true);
  // teal collar and stripe across shirt
  brush.fill("#2f8c8a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(240, 470); brush.vertex(362, 470); brush.vertex(366, 500); brush.vertex(236, 500);
  brush.endShape(true);
  // shadow under chin
  brush.fill("#6b4f3a", 170);
  brush.circle(300, 368, 14, true);
}
