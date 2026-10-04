async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f1");
  brush.noStroke();

  // strong blue sky
  brush.fill("#2f78c8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 260);
  brush.endShape(true);
  // cumulus: grey undersides; tops left as paper by leaving gaps
  let clouds = [[140, 110, 60], [220, 90, 50], [420, 130, 70], [500, 100, 45]];
  for (let c of clouds) {
    brush.fill("#7a86a0", 190);
    brush.fillBleed(0.35);
    brush.fillTexture(0.4, 0.4);
    brush.circle(c[0], c[1] + c[2] * 0.4, c[2] * 0.8, 0.6);
  }

  // layered planes, far to near, each two passes
  let planes = [
    ["#6f9ab0", [[-20,250],[120,215],[260,240],[400,205],[620,245]], 260],
    ["#4f9a5a", [[-20,300],[150,265],[330,295],[480,260],[620,290]], 300],
    ["#2e8a3c", [[-20,380],[180,330],[360,370],[520,325],[620,350]], 380],
    ["#1d6e2a", [[-20,470],[120,430],[300,460],[470,415],[620,450]], 470],
  ];
  for (let p of planes) {
    brush.fill(p[0], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    for (let v of p[1]) brush.vertex(v[0], v[1]);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // yellow-green sunlit crest in the middle plane
  brush.fill("#9cc43a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(100, 345);
  brush.vertex(180, 332);
  brush.vertex(300, 360);
  brush.vertex(260, 400);
  brush.vertex(120, 395);
  brush.endShape(true);

  // hedgerow along the near plane
  for (let i = 0; i < 12; i++) {
    brush.fill("#0f4a1c", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.4);
    brush.circle(20 + i * 52, 440 - sin(i * 30) * 18, 18 + (i % 3) * 4, 0.5);
  }
  // foreground deep green with a red poppy dab row
  brush.fill("#0e5a22", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 540);
  brush.vertex(300, 520);
  brush.vertex(620, 545);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    brush.fill("#d8281e", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(40 + i * 65, 560 + (i % 3) * 12, 7, 0.5);
  }
}
