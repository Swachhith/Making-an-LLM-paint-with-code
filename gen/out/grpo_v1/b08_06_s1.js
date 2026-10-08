async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1e3a8a");
  brush.noStroke();
  // sea: two bold passes, deep teal then turquoise, pooling at the bottom
  brush.fill("#0e7aa8", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1fd2a8", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 520); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sea sparkle dots
  for (let i = 0; i < 22; i++) {
    brush.fill("#fff4c8", 250);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.circle(random(-20, 620), random(470, 620), random(2, 4), 0.2);
  }
  // hill, rising from the bottom, three passes: dark green then emerald then teal
  brush.fill("#0f5a2e", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 480); brush.vertex(150, 330); brush.vertex(300, 400); brush.vertex(450, 250); brush.vertex(620, 300); brush.vertex(620, 480); brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#1fb86a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 490); brush.vertex(120, 350); brush.vertex(260, 420); brush.vertex(420, 280); brush.vertex(620, 340); brush.vertex(620, 490); brush.vertex(-20, 490);
  brush.endShape(true);
  brush.fill("#1e9aa8", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 500); brush.vertex(80, 380); brush.vertex(220, 450); brush.vertex(380, 300); brush.vertex(620, 360); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);
  // village houses, small and bold, clustered on the hill
  let houses = [
    [220, 400, 40, 100, "#f44a3a"],
    [270, 415, 50, 85, "#f44a3a"],
    [330, 380, 55, 100, "#e02a8a"],
    [390, 395, 45, 90, "#f44a3a"],
    [450, 360, 50, 105, "#e02a8a"],
    [510, 385, 45, 95, "#f44a3a"],
    [150, 430, 40, 70, "#f44a3a"],
    [110, 450, 35, 55, "#e02a8a"],
  ];
  for (let h of houses) {
    let [x, y, w, ht, col] = h;
    brush.fill(col, 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x, y + ht); brush.vertex(x + w, y + ht); brush.vertex(x + w, y); brush.vertex(x, y);
    brush.endShape(true);
    brush.fill("#fff4c8", 250);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.beginShape(0.2);
    brush.vertex(x + 4, y + 8); brush.vertex(x + w - 4, y + 8); brush.vertex(x + w - 4, y + ht - 12); brush.vertex(x + 4, y + ht - 12);
    brush.endShape(true);
    // chimneys
    brush.fill("#fff4c8", 250);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.beginShape(0.2);
    brush.vertex(x + w * 0.3, y - 10); brush.vertex(x + w * 0.3 + 10, y - 10); brush.vertex(x + w * 0.3 + 10, y + 15); brush.vertex(x + w * 0.3, y + 15);
    brush.endShape(true);
    brush.beginShape(0.2);
    brush.vertex(x + w * 0.7, y - 10); brush.vertex(x + w * 0.7 + 10, y - 10); brush.vertex(x + w * 0.7 + 10, y + 15); brush.vertex(x + w * 0.7, y + 15);
    brush.endShape(true);
  }
  // a lighthouse
  brush.fill("#fff4c8", 250);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.2);
  brush.vertex(470, 250); brush.vertex(485, 250); brush.vertex(485, 130); brush.vertex(470, 130);
  brush.endShape(true);
  brush.fill("#1e9aa8", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(470, 130); brush.vertex(485, 130); brush.vertex(485, 180); brush.vertex(470, 180);
  brush.endShape(true);
  brush.fill("#fff4c8", 250);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.circle(477, 145, 10, 0.2);
  brush.fill("#f44a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(477, 145, 6, 0.3);
  // a couple of figures on the hill path
  brush.fill("#f44a3a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(230, 440); brush.vertex(238, 440); brush.vertex(238, 420); brush.vertex(230, 420);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(350, 340); brush.vertex(358, 340); brush.vertex(358, 320); brush.vertex(350, 320);
  brush.endShape(true);
  // a sailboat on the water
  brush.fill("#fff4c8", 250);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.2);
  brush.vertex(260, 520); brush.vertex(278, 520); brush.vertex(278, 500); brush.vertex(260, 500);
  brush.endShape(true);
  brush.fill("#fff4c8", 250);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.2);
  brush.vertex(270, 470); brush.vertex(280, 470); brush.vertex(280, 460); brush.vertex(270, 460);
  brush.endShape(true);
  brush.fill("#1e9aa8", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(262, 500); brush.vertex(278, 500); brush.vertex(278, 470); brush.vertex(262, 470);
  brush.endShape(true);
  // a few birds
  for (let i = 0; i < 5; i++) {
    brush.fill("#f44a3a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(random(300, 500), random(420, 460)); brush.vertex(random(310, 510), random(420, 460)); brush.vertex(random(310, 510), random(410, 450)); brush.vertex(random(300, 500), random(410, 450));
    brush.endShape(true);
  }
}
