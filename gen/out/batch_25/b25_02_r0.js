async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4ee");
  randomSeed(9025);
  brush.noStroke();

  // splashes of loose colour thrown across the page
  let splash = ["#e0406a", "#f08a5c", "#c22a3a", "#7fb069"];
  for (let i = 0; i < 14; i++) {
    brush.fill(random(splash), random(140, 190));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(40, 560), random(40, 560), random(8, 40), 0.9);
  }

  // big wet bloom of the rose -- a loose pool
  brush.fill("#d0203c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.circle(250, 230, 130, 0.8);
  brush.fill("#a8102c", 210);
  brush.fillBleed(0.3);
  brush.circle(265, 215, 90, 0.9);

  // drips running down from the bloom
  for (let d = 0; d < 5; d++) {
    let x = 170 + d * 38 + random(-10, 10);
    let len = random(80, 220);
    brush.fill("#b8122e", 170);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x - 9, 300); brush.vertex(x + 9, 300);
    brush.vertex(x + 8, 300 + len); brush.vertex(x, 318 + len); brush.vertex(x - 8, 300 + len);
    brush.endShape(true);
    brush.fill("#8c0a24", 200);
    brush.circle(x, 312 + len, 11, 0.3);
  }

  // curling petal strokes, loose crescents
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + random(-15, 15);
    brush.fill("#6e0a1e", 215);
    brush.fillBleed(0.28);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(1);
    brush.vertex(265 + cos(a) * 30, 215 + sin(a) * 30);
    brush.vertex(265 + cos(a + 40) * 75, 215 + sin(a + 40) * 75);
    brush.vertex(265 + cos(a + 70) * 45, 215 + sin(a + 70) * 45);
    brush.endShape(true);
  }
  brush.fill("#4d0616", 225);
  brush.fillBleed(0.2);
  brush.circle(268, 212, 24, 0.6);

  // stem sweeping off to lower right
  brush.fill("#3f8a3a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 320); brush.vertex(322, 315); brush.vertex(390, 440);
  brush.vertex(470, 580); brush.vertex(445, 585); brush.vertex(368, 450);
  brush.endShape(true);

  // two leaves splashed on
  brush.fill("#2e7d32", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(370, 430); brush.vertex(460, 360); brush.vertex(520, 390); brush.vertex(440, 445);
  brush.endShape(true);
  brush.fill("#5aa04a", 190);
  brush.beginShape(1);
  brush.vertex(410, 500); brush.vertex(300, 470); brush.vertex(250, 520); brush.vertex(350, 530);
  brush.endShape(true);
  brush.fill("#1f5e27", 210);
  brush.fillBleed(0.22);
  brush.beginShape(1);
  brush.vertex(390, 425); brush.vertex(460, 380); brush.vertex(495, 395);
  brush.endShape(true);
}
