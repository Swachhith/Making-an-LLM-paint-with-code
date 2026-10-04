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

  // cool sky
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#8fb8d8", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 350);
  brush.endShape(true);

  // meadow, blue-green, two passes
  brush.fill("#6fae9a", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, 320); brush.vertex(200, 300); brush.vertex(420, 330); brush.vertex(620, 310);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3f8a80", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(300, 430); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // small distant child running, left
  brush.fillBleed(0.2);
  brush.fill("#d8889a", 200);
  brush.beginShape(0.3);
  brush.vertex(70, 330); brush.vertex(100, 330); brush.vertex(104, 380); brush.vertex(66, 380);
  brush.endShape(true);
  brush.fill("#e8b8a0", 210);
  brush.circle(85, 318, 13, 0.2);
  brush.fill("#4a3a3a", 200);
  brush.circle(84, 311, 11, 0.4);

  // meadow flowers, cool whites and lilacs
  let fl = [[40, 520], [140, 470], [520, 500], [560, 420], [470, 560], [90, 580], [200, 540]];
  for (let f of fl) {
    brush.fill("#9a84c8", 190);
    brush.circle(f[0], f[1], 9, 0.5);
  }

  // large child, waist up, arms lifted
  // shirt loose pass
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#4a78b8", 200);
  brush.beginShape(0.4);
  brush.vertex(230, 360); brush.vertex(300, 345); brush.vertex(390, 360); brush.vertex(420, 470);
  brush.vertex(430, 620); brush.vertex(200, 620); brush.vertex(205, 470);
  brush.endShape(true);
  // raised arms (sleeves)
  brush.beginShape(0.4);
  brush.vertex(240, 370); brush.vertex(200, 290); brush.vertex(170, 200); brush.vertex(200, 190); brush.vertex(230, 280); brush.vertex(270, 360);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(360, 360); brush.vertex(400, 280); brush.vertex(420, 190); brush.vertex(450, 200); brush.vertex(430, 290); brush.vertex(385, 375);
  brush.endShape(true);
  // shirt shadow pass
  brush.fill("#284e8a", 170);
  brush.beginShape(0.4);
  brush.vertex(350, 370); brush.vertex(395, 370); brush.vertex(420, 470); brush.vertex(430, 620); brush.vertex(360, 620);
  brush.endShape(true);
  // hands
  brush.fill("#e0a890", 220);
  brush.circle(185, 188, 18, 0.3);
  brush.circle(435, 188, 18, 0.3);
  // neck and face
  brush.fill("#e8b8a0", 220);
  brush.beginShape(0.3);
  brush.vertex(290, 330); brush.vertex(320, 330); brush.vertex(322, 360); brush.vertex(288, 360);
  brush.endShape(true);
  brush.circle(305, 280, 55, 0.15);
  brush.fill("#c8887a", 150);
  brush.circle(322, 290, 32, 0.3);
  // hair
  brush.fill("#5a3a2a", 220);
  brush.beginShape(0.5);
  brush.vertex(250, 280); brush.vertex(255, 235); brush.vertex(300, 215); brush.vertex(350, 230);
  brush.vertex(362, 275); brush.vertex(340, 250); brush.vertex(300, 245); brush.vertex(265, 260);
  brush.endShape(true);
  brush.fill("#3a2418", 180);
  brush.circle(300, 230, 25, 0.5);
  // cheek and mouth
  brush.fill("#e07a80", 170);
  brush.circle(280, 295, 9, 0.3);
  brush.circle(332, 295, 9, 0.3);
  brush.fill("#2a2030", 200);
  brush.circle(288, 275, 4, 0.1);
  brush.circle(322, 275, 4, 0.1);
  brush.fill("#b04a5a", 200);
  brush.circle(305, 305, 6, 0.3);
}
