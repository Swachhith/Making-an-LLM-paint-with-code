async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede7dc");
  brush.noStroke();

  // thin band of dawn sky, blush to straw
  brush.fill("#dfb49e", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#efd3a4", 190);
  brush.fillBleed(0.3);
  brush.circle(440, 140, 44, 0.2);

  // meadow as one continuous wash, darkening downward in overlapping layers
  brush.fill("#b9ae88", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.3);
  brush.vertex(-20, 150); brush.vertex(620, 150); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9a9164", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(200, 290); brush.vertex(430, 310); brush.vertex(620, 288); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7a7448", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 440); brush.vertex(260, 420); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // distant treeline, lost in mist
  brush.fill("#8b837c", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 160); brush.vertex(40, 136); brush.vertex(100, 150); brush.vertex(170, 128); brush.vertex(240, 150); brush.vertex(330, 142); brush.vertex(400, 158); brush.vertex(620, 152); brush.vertex(620, 180); brush.vertex(-20, 182);
  brush.endShape(true);

  // two mid-distance trees
  brush.fill("#6f6a5e", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(150, 240, 40, 0.6);
  brush.fill("#57524a", 200);
  brush.circle(158, 248, 26, 0.5);
  brush.beginShape(0.2);
  brush.vertex(150, 262); brush.vertex(166, 262); brush.vertex(168, 300); brush.vertex(148, 300);
  brush.endShape(true);
  brush.fill("#7d776a", 170);
  brush.circle(205, 262, 24, 0.6);

  // a path winding up toward the light, pale ochre
  brush.fill("#d6c49a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(330, 620); brush.vertex(290, 500); brush.vertex(360, 380); brush.vertex(410, 260); brush.vertex(424, 262); brush.vertex(390, 390); brush.vertex(350, 500); brush.vertex(430, 620);
  brush.endShape(true);

  // soft mist drifts, painted as pale warm veils over the meadow
  let veils = [[230, 60], [340, 50], [470, 70]];
  for (let v of veils) {
    brush.fill("#e8dfcf", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(0.8);
    brush.vertex(-20, v[0]); brush.vertex(200, v[0] - 14); brush.vertex(420, v[0] + 6); brush.vertex(620, v[0] - 10); brush.vertex(620, v[0] + v[1] * 0.5); brush.vertex(300, v[0] + v[1] * 0.4); brush.vertex(-20, v[0] + v[1] * 0.6);
    brush.endShape(true);
  }

  // foreground grasses in rust and umber
  for (let i = 0; i < 10; i++) {
    let x = 20 + i * 62 + (i % 3) * 9;
    brush.fill(i % 2 ? "#7b573a" : "#55523a", 210);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 22, 612); brush.vertex(x - 8, 530 - (i % 4) * 12); brush.vertex(x + 2, 556); brush.vertex(x + 14, 520 - (i % 3) * 14); brush.vertex(x + 26, 612);
    brush.endShape(true);
  }
}
