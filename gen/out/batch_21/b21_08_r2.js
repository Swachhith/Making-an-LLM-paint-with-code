async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#100f18");
  randomSeed(88);
  brush.noStroke();

  // milky way: a long soft diagonal band built from overlapping ragged strips
  for (let k = 0; k < 5; k++) {
    let off = (k - 2) * 22;
    brush.fill(["#3c3f66", "#56577e", "#6c6690", "#56577e", "#3c3f66"][k], 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.7);
    brush.vertex(-20, 470 + off - 40); brush.vertex(150, 330 + off - 30); brush.vertex(320, 200 + off - 20); brush.vertex(480, 80 + off - 30); brush.vertex(620, -10 + off - 30);
    brush.vertex(620, 40 + off + 30); brush.vertex(490, 130 + off + 30); brush.vertex(330, 250 + off + 20); brush.vertex(160, 380 + off + 30); brush.vertex(-20, 520 + off + 40);
    brush.endShape(true);
  }
  for (let i = 0; i < 30; i++) {
    let t = random();
    let x = lerp(-20, 600, t) + random(-60, 60);
    let y = lerp(500, 0, t) + random(-60, 60);
    brush.fill(random(["#4a4c78", "#6a6490", "#7a7aa0"]), random(150, 190));
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.circle(x, y, random(20, 40), 0.9);
  }
  // bright core and dark rift
  brush.fill("#b8aecb", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(120, 390); brush.vertex(260, 270); brush.vertex(400, 170); brush.vertex(520, 90); brush.vertex(530, 110); brush.vertex(410, 200); brush.vertex(270, 300); brush.vertex(140, 410);
  brush.endShape(true);
  brush.fill("#1a1826", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(200, 350); brush.vertex(300, 270); brush.vertex(380, 222); brush.vertex(390, 234); brush.vertex(310, 290); brush.vertex(214, 362);
  brush.endShape(true);
  // stars, denser along the band
  for (let i = 0; i < 140; i++) {
    let t = random();
    let x = lerp(-20, 600, t) + random(-70, 70);
    let y = lerp(500, 0, t) + random(-70, 70);
    brush.fill(random() < 0.12 ? "#ffd49a" : "#eef0ff", random(200, 255));
    brush.fillBleed(0);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(0.8, 2), 0.1);
  }
  for (let i = 0; i < 70; i++) {
    brush.fill("#e8ecff", random(190, 255));
    brush.fillBleed(0);
    brush.circle(random(600), random(420), random(0.8, 2.6), 0.1);
  }

  // large moon off-centre, upper left, with a halo
  brush.fill("#2e2c44", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(130, 130, 100, 0.3);
  brush.fill("#efe4c4", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.4, 0.4);
  brush.circle(130, 130, 70, 0.1);
  brush.fill("#fff6dc", 225);
  brush.circle(126, 126, 62, 0.1);
  brush.fill("#cbbd9c", 175);
  brush.fillBleed(0.2);
  brush.circle(110, 116, 15, 0.5);
  brush.circle(152, 150, 12, 0.5);
  brush.circle(142, 102, 8, 0.4);

  // mountains lit by the moon: slate-blue faces, darker shadow faces
  brush.fill("#4a5680", 230);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.15);
  brush.vertex(-20, 460); brush.vertex(70, 390); brush.vertex(150, 420); brush.vertex(270, 310); brush.vertex(340, 370); brush.vertex(430, 280); brush.vertex(530, 380); brush.vertex(620, 340); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a76a0", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.15);
  brush.vertex(270, 310); brush.vertex(250, 380); brush.vertex(210, 440); brush.vertex(150, 420);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(430, 280); brush.vertex(400, 360); brush.vertex(350, 420); brush.vertex(340, 370);
  brush.endShape(true);
  brush.fill("#262c48", 220);
  brush.beginShape(0.15);
  brush.vertex(270, 310); brush.vertex(340, 370); brush.vertex(320, 470); brush.vertex(260, 460);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(430, 280); brush.vertex(530, 380); brush.vertex(500, 470); brush.vertex(420, 440);
  brush.endShape(true);
  // valley floor
  brush.fill("#1a1d2e", 245);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-20, 510); brush.vertex(120, 480); brush.vertex(260, 500); brush.vertex(400, 470); brush.vertex(620, 495); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // warm cabin lights in the valley
  let lights = [[200, 520], [216, 526], [232, 516], [420, 500], [438, 508], [310, 546], [520, 530]];
  for (let l of lights) {
    brush.fill("#f09a3a", 170);
    brush.fillBleed(0.3);
    brush.circle(l[0], l[1], 13, 0.4);
    brush.fill("#f6b64a", 220);
    brush.circle(l[0], l[1], 5, 0.2);
    brush.fill("#ffd98a", 255);
    brush.fillBleed(0);
    brush.circle(l[0], l[1], 2.6, 0.1);
  }
}
