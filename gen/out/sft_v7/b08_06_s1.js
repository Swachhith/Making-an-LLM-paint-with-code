async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf3e6");
  brush.noStroke();

  // sky, two bands: pale blue above, teal lower
  brush.fill("#a8c8e8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#3f8f9a", 200);
  brush.beginShape(0.3);
  brush.vertex(-20, 220); brush.vertex(620, 220); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);

  // sea: turquoise with a darker band of foam
  brush.fill("#2fa8c8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 400); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1f7a9a", 200);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sunlit foam
  brush.fill("#f2d04a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(30, 490); brush.vertex(150, 475); brush.vertex(170, 500); brush.vertex(30, 515);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(250, 485); brush.vertex(370, 470); brush.vertex(390, 500); brush.vertex(260, 515);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(470, 495); brush.vertex(590, 480); brush.vertex(610, 510); brush.vertex(480, 525);
  brush.endShape(true);

  // hill: layered ridges in warm tones
  let hills = [[-20, 400, 150, 300, 320, 260, 440, 200, 620, 140], [200, 320, 360, 260, 470, 220, 620, 180]];
  for (let h of hills) {
    brush.fill(h[2] % 2 ? "#e08a3a" : "#c95a2a", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    for (let v of h) brush.vertex(v[0], v[1] + 20);
    brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // village houses on the hill, low angle: big silhouettes against the hill
  let houses = [
    [320, 310, 110, 60, 20, 40],
    [410, 290, 100, 55, 22, 35],
    [230, 340, 120, 70, 15, 45],
    [470, 300, 90, 50, 24, 30],
    [150, 350, 100, 65, 18, 40],
    [520, 320, 110, 60, 20, 45],
    [20, 360, 80, 50, 22, 35],
    [560, 330, 90, 55, 20, 40]
  ];
  for (let h of houses) {
    brush.fill("#1a102a", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(h[0] - 10, h[1] + h[4]);
    brush.vertex(h[0] + h[2] / 2, h[1] + h[4] - 20);
    brush.vertex(h[0] + h[2], h[1] + h[4] - 12);
    brush.vertex(h[0] + h[2] + 4, h[1] + h[4] - 12);
    brush.vertex(h[0] + h[2] + h[3], h[1] + h[4] - 20);
    brush.vertex(h[0] + h[2] + h[3] / 2, h[1] + h[4]);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(h[0] - 10, h[1] + h[4]);
    brush.vertex(h[0] + h[2] / 2, h[1] + h[4] - 12);
    brush.vertex(h[0] + h[2], h[1] + h[4]);
    brush.endShape(true);
  }
  // chimneys
  for (let h of houses) {
    brush.fill("#1a102a", 230);
    brush.beginShape(0.1);
    brush.vertex(h[0] + h[2] / 2 - 6, h[1] + h[4] - 16);
    brush.vertex(h[0] + h[2] / 2 + 6, h[1] + h[4] - 16);
    brush.vertex(h[0] + h[2] / 2 + 4, h[1] + h[4] - 26);
    brush.vertex(h[0] + h[2] / 2 - 4, h[1] + h[4] - 26);
    brush.endShape(true);
  }
  // a church tower
  brush.fill("#1a102a", 230);
  brush.beginShape(0.1);
  brush.vertex(460, 240); brush.vertex(480, 240); brush.vertex(480, 150); brush.vertex(460, 150);
  brush.endShape(true);
  brush.fill("#ffd02a", 230);
  brush.beginShape(0.1);
  brush.vertex(462, 150); brush.vertex(478, 150); brush.vertex(478, 130); brush.vertex(462, 130);
  brush.endShape(true);
  // flags
  brush.fill("#e01a1a", 230);
  brush.beginShape(0.1);
  brush.vertex(330, 300); brush.vertex(338, 300); brush.vertex(338, 306); brush.vertex(330, 306);
  brush.endShape(true);
  brush.fill("#1a102a", 230);
  brush.beginShape(0.1);
  brush.vertex(412, 275); brush.vertex(418, 275); brush.vertex(418, 282); brush.vertex(412, 282);
  brush.endShape(true);
  // a boat on the beach
  brush.fill("#1a102a", 230);
  brush.beginShape(0.3);
  brush.vertex(200, 520); brush.vertex(230, 510); brush.vertex(260, 520); brush.vertex(260, 530); brush.vertex(230, 540); brush.vertex(200, 530);
  brush.endShape(true);
  // a lighthouse
  brush.fill("#1a102a", 230);
  brush.beginShape(0.1);
  brush.vertex(50, 500); brush.vertex(50, 440); brush.vertex(70, 440); brush.vertex(70, 500);
  brush.endShape(true);
  brush.fill("#ffd02a", 230);
  brush.beginShape(0.1);
  brush.vertex(50, 440); brush.vertex(70, 440); brush.vertex(70, 410); brush.vertex(50, 410);
  brush.endShape(true);
  brush.fill("#ffd02a", 230);
  brush.circle(50, 410, 14, 0.3);
  brush.fill("#ffd02a", 230);
  brush.circle(50, 400, 6, 0.3);
  // a figure on the hill
  brush.fill("#1a102a", 230);
  brush.beginShape(0.3);
  brush.vertex(380, 270); brush.vertex(390, 250); brush.vertex(400, 250); brush.vertex(410, 270);
  brush.endShape(true);
}
