async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1e4");
  brush.noStroke();

  // loose splashy sunset sky: rose, orange, teal blooms bleeding
  brush.fill("#f08a5d", 200);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e0457b", 180);
  brush.circle(140, 120, 140, 0.9);
  brush.fill("#3aa6a0", 170);
  brush.circle(500, 80, 110, 0.9);
  brush.fill("#f7c548", 190);
  brush.circle(330, 420, 170, 0.9);
  brush.fill("#8a3a9a", 190);
  brush.circle(520, 520, 80, 0.9);
  brush.circle(80, 470, 90, 0.9);

  // drips
  brush.fill("#e0457b", 170);
  brush.fillBleed(0.2);
  for (const x of [60, 190, 450, 560]) {
    brush.beginShape(0.5);
    brush.vertex(x - 6, 220); brush.vertex(x + 6, 220); brush.vertex(x + 2, 320 + (x % 60)); brush.vertex(x - 2, 320 + (x % 60));
    brush.endShape(true);
    brush.circle(x, 322 + (x % 60), 6, 0.3);
  }

  // dancer silhouette, deep indigo, mid-leap with dress swirling
  const ink = "#2a1540";
  for (let p = 0; p < 2; p++) {
    brush.fill(ink, p ? 230 : 200);
    brush.fillBleed(p ? 0.15 : 0.3);
    brush.fillTexture(0.4, 0.4);
    // flowing dress: big swirling skirt sweeping to the left
    brush.beginShape(0.7);
    brush.vertex(300, 280); brush.vertex(330, 285); brush.vertex(360, 360); brush.vertex(410, 440); brush.vertex(380, 470);
    brush.vertex(300, 480); brush.vertex(220, 470); brush.vertex(150, 430); brush.vertex(190, 410); brush.vertex(260, 370);
    brush.endShape(true);
    // torso
    brush.beginShape(0.4);
    brush.vertex(296, 285); brush.vertex(300, 215); brush.vertex(322, 212); brush.vertex(334, 288);
    brush.endShape(true);
  }
  brush.fill(ink, 230);
  brush.fillBleed(0.15);
  // head
  brush.circle(318, 192, 18, 0.2);
  // raised arms as soft wide shapes
  brush.beginShape(0.6);
  brush.vertex(304, 222); brush.vertex(260, 170); brush.vertex(230, 110); brush.vertex(246, 106); brush.vertex(276, 160); brush.vertex(314, 214);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(320, 222); brush.vertex(370, 190); brush.vertex(420, 170); brush.vertex(424, 186); brush.vertex(376, 206); brush.vertex(326, 236);
  brush.endShape(true);
  // trailing scarf from the raised hand, swept by the wind
  brush.fill("#c2185b", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(240, 110); brush.vertex(180, 80); brush.vertex(110, 110); brush.vertex(50, 90); brush.vertex(60, 115); brush.vertex(120, 138); brush.vertex(185, 108); brush.vertex(238, 130);
  brush.endShape(true);
  brush.fill(ink, 230);
  // legs below dress
  brush.beginShape(0.5);
  brush.vertex(290, 470); brush.vertex(280, 560); brush.vertex(296, 562); brush.vertex(310, 470);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(330, 468); brush.vertex(380, 530); brush.vertex(392, 520); brush.vertex(348, 462);
  brush.endShape(true);
  // ground wash
  brush.fill("#5a2a5a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // splatter
  brush.fill(ink, 200);
  for (const s of [[120, 300], [470, 350], [520, 480], [200, 540], [430, 250]]) brush.circle(s[0], s[1], 5, 0.5);
}
