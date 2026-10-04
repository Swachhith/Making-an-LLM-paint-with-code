async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf2e0");
  randomSeed(5505);
  brush.noStroke();
  const H = 310;
  // warm sky: lemon near horizon to peach above
  brush.fill("#f9dc98", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, H); brush.vertex(-20, H);
  brush.endShape(true);
  brush.fill("#f4a878", 160);
  brush.fillBleed(0.35);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(-20, 80);
  brush.endShape(true);
  // continuous skyline of mesas with notches, sawtooth talus and one spire
  let sky = [[-20, 200], [40, 196], [52, 176], [150, 172], [158, 186], [172, 190], [190, 232], [220, 236], [236, 204], [246, 150], [258, 140], [262, 110], [272, 108], [278, 140], [300, 146], [390, 144], [398, 160], [420, 170], [440, 214], [470, 220], [486, 188], [500, 180], [580, 176], [590, 196], [620, 204]];
  function silhouette(col, a, mirror, lift) {
    brush.fill(col, a);
    brush.fillBleed(mirror ? 0.3 : 0.15);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.02);
    brush.vertex(-20, H);
    for (let q of sky) {
      let y = q[1] + lift;
      brush.vertex(q[0], mirror ? 2 * H - y : y);
    }
    brush.vertex(620, H);
    brush.endShape(true);
  }
  silhouette("#e08a52", 210, false, 0);
  silhouette("#c4592e", 200, false, 22);
  // talus slopes (serrated) at the base, deep shadow
  brush.fill("#8a3418", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.05);
  brush.vertex(-20, H);
  for (let x = -20; x <= 620; x += 20) brush.vertex(x, H - 30 - (x / 20 % 2 ? 22 : 0) - random(0, 12));
  brush.vertex(620, H);
  brush.endShape(true);
  // water: pale mirror of the sky
  brush.fill("#f7d59e", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, H); brush.vertex(620, H); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  silhouette("#e08a52", 170, true, 0);
  silhouette("#c4592e", 150, true, 22);
  // bright horizontal light breaks left as pale glaze
  for (let i = 0; i < 5; i++) {
    let y = H + 30 + i * 22 + i * i * 4;
    brush.fill("#fce6bd", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    let x0 = random(-20, 380);
    brush.vertex(x0, y); brush.vertex(x0 + random(120, 260), y); brush.vertex(x0 + 150, y + 6); brush.vertex(x0 + 10, y + 6);
    brush.endShape(true);
  }
  // foreground warm bank
  brush.fill("#b8703e", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(300, 575); brush.vertex(620, 555); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
