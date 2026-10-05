async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e8c8");
  randomSeed(2002);
  brush.noStroke();

  // sky: big sky, saturated bands
  let sky = [["#f0a840", 0], ["#ff6a1c", 100], ["#e01a6f", 220], ["#7a00b8", 340], ["#3a0066", 460]];
  for (let s of sky) {
    brush.fill(s[0], 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-20, s[1]); brush.vertex(620, s[1]); brush.vertex(620, s[1] + 10); brush.vertex(-20, s[1] + 10);
    brush.endShape(true);
  }
  // sun, low and big
  brush.fill("#ffd23a", 250);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.circle(320, 340, 70, 0.2);
  brush.fill("#ff8a1a", 200);
  brush.circle(320, 340, 42, 0.3);

  // palm fronds, three palms, silhouettes against sky
  let palms = [[130, 450, 110], [230, 470, 130], [470, 430, 100]];
  for (let p of palms) {
    let x = p[0], y = p[1], len = p[2];
    brush.fill("#1a1208", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.9);
    brush.vertex(x, y);
    for (let i = 0; i < len; i++) {
      let a = random(-40, 40);
      brush.vertex(x + cos(a) * (i * 4 + 20), y + sin(a) * (i * 4 + 20));
    }
    brush.endShape(true);
    brush.beginShape(0.9);
    brush.vertex(x + 8, y);
    for (let i = 0; i < len; i++) {
      let a = random(-40, 40);
      brush.vertex(x + cos(a) * (i * 4 + 20), y + sin(a) * (i * 4 + 20));
    }
    brush.endShape(true);
  }
  // trunks
  brush.fill("#1a1208", 240);
  brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(132, 450); brush.vertex(138, 620); brush.vertex(146, 620); brush.vertex(140, 450);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(232, 470); brush.vertex(238, 620); brush.vertex(246, 620); brush.vertex(240, 470);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(472, 430); brush.vertex(478, 620); brush.vertex(486, 620); brush.vertex(478, 430);
  brush.endShape(true);

  // sea
  brush.fill("#1e6aa0", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 620); brush.vertex(200, 610); brush.vertex(420, 622); brush.vertex(620, 612); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f0a840", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 618); brush.vertex(620, 618); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
