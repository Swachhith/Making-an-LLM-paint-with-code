async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#12111a");
  randomSeed(2108);
  brush.noStroke();

  // milky way: a diagonal drift of pale cool dust from lower left to upper right
  for (let i = 0; i < 26; i++) {
    let t = i / 25;
    let x = lerp(-20, 560, t) + random(-30, 30);
    let y = lerp(470, 20, t) + random(-30, 30);
    brush.fill(random(["#6e6f9a", "#8a7fa6", "#5a6c8c"]), random(150, 200));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x, y, random(34, 60), 0.8);
  }
  for (let i = 0; i < 14; i++) {
    let t = random();
    let x = lerp(20, 520, t) + random(-15, 15);
    let y = lerp(430, 60, t) + random(-15, 15);
    brush.fill("#c9c3d8", random(150, 190));
    brush.fillBleed(0.25);
    brush.circle(x, y, random(12, 24), 0.7);
  }
  // stars
  for (let i = 0; i < 160; i++) {
    brush.fill(random() < 0.15 ? "#ffd9a0" : "#eef0ff", random(190, 255));
    brush.fillBleed(0);
    brush.fillTexture(0.2, 0.2);
    brush.circle(random(600), random(420), random(0.8, 2.4), 0.1);
  }

  // large moon, off-centre upper left, with a halo
  brush.fill("#3a3550", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(150, 150, 96, 0.3);
  brush.fill("#efe4c4", 235);
  brush.fillBleed(0.12);
  brush.fillTexture(0.4, 0.4);
  brush.circle(150, 150, 68, 0.1);
  brush.fill("#fff6dc", 220);
  brush.circle(146, 146, 60, 0.1);
  brush.fill("#cfc2a0", 170);
  brush.fillBleed(0.2);
  brush.circle(130, 138, 14, 0.5);
  brush.circle(170, 170, 11, 0.5);
  brush.circle(162, 124, 8, 0.4);

  // mountains: two ranges, catching a little moonlight
  brush.fill("#2e3654", 235);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 470); brush.vertex(60, 400); brush.vertex(140, 430); brush.vertex(260, 330); brush.vertex(330, 380); brush.vertex(420, 300); brush.vertex(520, 390); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#48507a", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(260, 330); brush.vertex(240, 400); brush.vertex(200, 460); brush.vertex(290, 420); brush.vertex(330, 380);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(420, 300); brush.vertex(390, 380); brush.vertex(360, 440); brush.vertex(450, 390); brush.vertex(520, 390);
  brush.endShape(true);
  brush.fill("#1c1f30", 240);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-20, 520); brush.vertex(120, 480); brush.vertex(250, 505); brush.vertex(400, 470); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // a few warm lights in the valley
  let lights = [[210, 520], [226, 524], [240, 516], [410, 505], [430, 512], [300, 540]];
  for (let l of lights) {
    brush.fill("#f2a24a", 150);
    brush.fillBleed(0.3);
    brush.circle(l[0], l[1], 8, 0.4);
    brush.fill("#ffd27a", 250);
    brush.fillBleed(0);
    brush.circle(l[0], l[1], 2.4, 0.1);
  }
}
