async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f7f8");
  brush.noStroke();

  // narrow cool sky, high horizon
  brush.fill("#8fb7d6", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 150); brush.vertex(-40, 160);
  brush.endShape(true);
  // clouds as grey undersides
  brush.fill("#aab3c2", 190);
  brush.fillBleed(0.3);
  brush.circle(120, 80, 45, 0.7);
  brush.circle(180, 95, 38, 0.7);
  brush.circle(420, 60, 55, 0.7);
  brush.circle(500, 85, 40, 0.7);
  brush.fill("#8a95a8", 150);
  brush.circle(430, 90, 30, 0.6);
  brush.circle(150, 110, 25, 0.6);

  // successive hills from far to near
  const hills = [
    ["#9cc7b4", 150, 170],
    ["#7fbb9a", 200, 190],
    ["#5ea884", 270, 200],
    ["#4a9272", 360, 210],
    ["#357d62", 470, 220],
  ];
  for (let i = 0; i < hills.length; i++) {
    const [c, y, a] = hills[i];
    brush.fill(c, a);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    const off = i % 2 === 0 ? 0 : 120;
    brush.vertex(-40, y + 30);
    brush.vertex(150 + off, y - 20);
    brush.vertex(330 + off / 2, y + 25);
    brush.vertex(480 - off / 3, y - 10);
    brush.vertex(640, y + 20);
    brush.vertex(640, 640); brush.vertex(-40, 640);
    brush.endShape(true);
  }

  brush.fill("#1f6a52", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-40, 560); brush.vertex(200, 520); brush.vertex(450, 550); brush.vertex(640, 530);
  brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // hedgerow dots along a crest
  for (let x = 20; x < 600; x += 26) {
    brush.fill("#24594a", 200);
    brush.circle(x, 265 + 20 * sin(x * 0.9), 8, 0.5);
  }
  // cloud shadow sweeping over the near hill
  brush.fill("#2d5d6e", 120);
  brush.fillBleed(0.35);
  brush.beginShape(0.9);
  brush.vertex(250, 500); brush.vertex(640, 470); brush.vertex(640, 560); brush.vertex(300, 580);
  brush.endShape(true);
}
