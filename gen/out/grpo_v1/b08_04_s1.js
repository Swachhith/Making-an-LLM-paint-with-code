async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7efe1");
  randomSeed(3003);
  brush.noStroke();
  // sky: big splashy blobs of blue and violet, drips running down
  brush.fill("#6a8fe0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(470, 320); brush.vertex(330, 230); brush.vertex(200, 300); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#8a5fd8", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 200); brush.vertex(150, 120); brush.vertex(300, 180); brush.vertex(620, 150); brush.vertex(620, 350); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#1a4fa8", 160);
  brush.beginShape(0.5);
  brush.vertex(-20, 350); brush.vertex(120, 280); brush.vertex(280, 330); brush.vertex(420, 260); brush.vertex(620, 320); brush.vertex(620, 550); brush.vertex(-20, 550);
  brush.endShape(true);
  // sea: turquoise, big blooms near the horizon
  brush.fill("#1fa8c8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0f8fb8", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 480); brush.vertex(200, 470); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // wet sand: warm ochre with drips
  brush.fill("#e09a5a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 530); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b87a3a", 170);
  brush.beginShape(0.5);
  brush.vertex(100, 560); brush.vertex(200, 540); brush.vertex(260, 560); brush.vertex(180, 580);
  brush.endShape(true);
  // figure: a silhouette of a person walking left to right, off-centre
  brush.fill("#2a1a3a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(420, 470); brush.vertex(442, 470); brush.vertex(446, 510); brush.vertex(426, 512);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(420, 470); brush.vertex(412, 470); brush.vertex(412, 512); brush.vertex(426, 512);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(426, 510); brush.vertex(442, 510); brush.vertex(442, 540); brush.vertex(426, 540);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(420, 510); brush.vertex(436, 510); brush.vertex(436, 540); brush.vertex(426, 540);
  brush.endShape(true);
  // splash of colour behind the figure
  brush.fill("#f08a4a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(380, 420); brush.vertex(460, 420); brush.vertex(440, 470); brush.vertex(360, 470);
  brush.endShape(true);
  // drips and blooms: loose splashes of colour
  brush.fill("#d0206a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(50, 200, 22, 0.6);
  brush.circle(120, 320, 16, 0.6);
  brush.circle(220, 180, 18, 0.6);
  brush.circle(480, 560, 20, 0.6);
  brush.fill("#f08a4a", 160);
  brush.circle(560, 260, 16, 0.6);
  brush.circle(300, 570, 14, 0.6);
  brush.fill("#2a1a3a", 170);
  brush.circle(520, 400, 12, 0.6);
  brush.circle(200, 450, 10, 0.6);
}
