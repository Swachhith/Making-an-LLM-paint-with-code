async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf3e6");
  randomSeed(1212);
  brush.noStroke();

  // warm glowing sky, peach into apricot
  brush.fill("#f6c79a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#f2a987", 150);
  brush.beginShape(0.7);
  brush.vertex(-20, 180); brush.vertex(300, 230); brush.vertex(620, 190); brush.vertex(620, 360); brush.vertex(-20, 360);
  brush.endShape(true);

  // distant peaks, lilac-rose, sunlit edges left pale
  brush.fill("#c99aa8", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 360); brush.vertex(70, 270); brush.vertex(150, 310); brush.vertex(250, 230);
  brush.vertex(360, 300); brush.vertex(470, 250); brush.vertex(620, 320); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#a8768a", 170);
  brush.beginShape(0.3);
  brush.vertex(250, 232); brush.vertex(290, 330); brush.vertex(360, 302); brush.vertex(380, 420); brush.vertex(200, 420);
  brush.endShape(true);

  // summit rock the hiker stands on, warm ochre
  brush.fill("#c58a4a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.4);
  brush.vertex(-20, 520); brush.vertex(120, 470); brush.vertex(260, 500); brush.vertex(420, 480);
  brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // hiker, large, seen from behind and slightly side, waist up
  // backpack
  brush.fill("#b9472a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(230, 300); brush.vertex(345, 290); brush.vertex(360, 470); brush.vertex(225, 480);
  brush.endShape(true);
  brush.fill("#8a2e1a", 200);
  brush.beginShape(0.5);
  brush.vertex(240, 380); brush.vertex(345, 375); brush.vertex(350, 440); brush.vertex(238, 445);
  brush.endShape(true);
  // bedroll on top
  brush.fill("#6a7a4a", 220);
  brush.beginShape(0.6);
  brush.vertex(222, 282); brush.vertex(355, 276); brush.vertex(358, 302); brush.vertex(222, 308);
  brush.endShape(true);
  // shoulders / jacket beside the pack
  brush.fill("#d8a33a", 220);
  brush.beginShape(0.6);
  brush.vertex(180, 620); brush.vertex(175, 400); brush.vertex(205, 330); brush.vertex(235, 320);
  brush.vertex(230, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(350, 320); brush.vertex(390, 340); brush.vertex(410, 420); brush.vertex(405, 620); brush.vertex(355, 620);
  brush.endShape(true);
  brush.fill("#b27a1e", 180);
  brush.beginShape(0.6);
  brush.vertex(355, 480); brush.vertex(405, 470); brush.vertex(405, 620); brush.vertex(355, 620);
  brush.endShape(true);
  // raised arm pointing to the peaks
  brush.fill("#d8a33a", 210);
  brush.beginShape(0.6);
  brush.vertex(385, 345); brush.vertex(470, 270); brush.vertex(490, 290); brush.vertex(405, 375);
  brush.endShape(true);
  brush.fill("#e2a07a", 210);
  brush.circle(490, 272, 13, 0.3);
  // head and cap
  brush.fill("#d99a74", 220);
  brush.circle(292, 250, 34, 0.25);
  brush.fill("#4a3326", 210);
  brush.beginShape(0.5);
  brush.vertex(262, 245); brush.vertex(268, 218); brush.vertex(300, 210); brush.vertex(325, 225); brush.vertex(322, 250); brush.vertex(292, 262);
  brush.endShape(true);
  brush.fill("#2f5a7a", 220);
  brush.beginShape(0.5);
  brush.vertex(260, 228); brush.vertex(275, 205); brush.vertex(312, 200); brush.vertex(328, 222); brush.vertex(345, 230); brush.vertex(262, 236);
  brush.endShape(true);
}
