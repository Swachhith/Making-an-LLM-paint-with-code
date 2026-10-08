async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe2");
  brush.noStroke();
  // sky: cobalt
  brush.fill("#1a3f8a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(470, 250); brush.vertex(340, 240); brush.vertex(200, 260); brush.vertex(-20, 230);
  brush.endShape(true);
  // sea, lower half
  brush.fill("#0e6a9a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 260); brush.vertex(620, 260); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // white foam line
  brush.fill("#f0f4f8", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 290); brush.vertex(620, 330); brush.vertex(400, 340); brush.vertex(200, 330); brush.vertex(-20, 315);
  brush.endShape(true);
  // hill rising from the sea
  brush.fill("#2e8a4a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 340); brush.vertex(620, 340); brush.vertex(620, 420); brush.vertex(540, 460); brush.vertex(420, 490); brush.vertex(300, 470); brush.vertex(180, 500); brush.vertex(60, 460); brush.vertex(-20, 430);
  brush.endShape(true);
  // houses on the hill, lit windows
  let houses = [
    [130, 470, 40, 55, "#f0b030", "#fff2a8"],
    [180, 450, 45, 70, "#f27a2a", "#fff2a8"],
    [240, 430, 50, 85, "#e05a2a", "#fff2a8"],
    [310, 420, 45, 90, "#f27a2a", "#fff2a8"],
    [370, 400, 50, 100, "#e05a2a", "#fff2a8"],
    [440, 390, 45, 110, "#f27a2a", "#fff2a8"],
    [510, 380, 50, 115, "#e05a2a", "#fff2a8"],
    [570, 370, 45, 120, "#f27a2a", "#fff2a8"],
  ];
  for (let h of houses) {
    let [x, y, w, h, wall, win] = h;
    brush.fill(wall, 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x, y); brush.vertex(x + w, y); brush.vertex(x + w, y + h); brush.vertex(x, y + h);
    brush.endShape(true);
    brush.fill("#f4d0a0", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x + 6, y + 6); brush.vertex(x + w - 6, y + 6); brush.vertex(x + w - 6, y + h - 12); brush.vertex(x + 6, y + h - 12);
    brush.endShape(true);
    brush.fill("#fff4c0", 250);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x + 12, y + 14); brush.vertex(x + 30, y + 14); brush.vertex(x + 30, y + h - 10); brush.vertex(x + 12, y + h - 10);
    brush.endShape(true);
    brush.fill("#f2a030", 245);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x + 22, y + h - 18, 5, 0.3);
  }
  // tall church spire
  brush.fill("#b02a1a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(320, 340); brush.vertex(330, 340); brush.vertex(342, 140); brush.vertex(330, 140);
  brush.endShape(true);
  brush.fill("#fff4c0", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(330, 140); brush.vertex(336, 140); brush.vertex(336, 70); brush.vertex(330, 70);
  brush.endShape(true);
  // a couple of figures
  brush.fill("#2a1a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(470, 430); brush.vertex(474, 430); brush.vertex(474, 450); brush.vertex(470, 450);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(482, 432); brush.vertex(486, 432); brush.vertex(486, 450); brush.vertex(482, 450);
  brush.endShape(true);
  // a sailboat on the sea
  brush.fill("#fff4c0", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(380, 320, 14, 0.3);
  brush.fill("#2a1a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(366, 310); brush.vertex(380, 300); brush.vertex(394, 310); brush.vertex(380, 322); brush.vertex(366, 310);
  brush.endShape(true);
  // sun over the hill
  brush.fill("#ffd040", 240);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(520, 220, 45, 0.5);
  brush.fill("#ffe060", 210);
  brush.fillBleed(0.25);
  brush.circle(520, 220, 30, 0.5);
}
