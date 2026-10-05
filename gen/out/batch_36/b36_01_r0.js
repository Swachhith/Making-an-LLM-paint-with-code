async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#15101f");
  brush.noStroke();
  // stage glow
  const glow = [["#c2185b", 190, 300, 250, 250], ["#ff6f00", 150, 300, 260, 170], ["#7b1fa2", 170, 300, 300, 290]];
  for (const g of glow) {
    brush.fill(g[0], g[1]); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(g[2], g[3], g[4], 0.5);
  }
  // arms raised in a rounded arc
  brush.fill("#e8a07a", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  [[215,360],[190,290],[200,210],[250,120],[300,95],[310,120],[262,170],[238,240],[245,330]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.8);
  [[385,360],[410,290],[400,210],[350,120],[300,95],[290,120],[338,170],[362,240],[355,330]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // torso / bodice
  brush.fill("#d81b60", 230); brush.fillBleed(0.2); brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.6);
  [[225,600],[232,430],[240,350],[270,320],[330,320],[360,350],[368,430],[375,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ff80ab", 190); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[250,590],[255,440],[275,370],[320,370],[345,440],[350,590]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // tutu hint at bottom
  brush.fill("#ffd54f", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  [[90,600],[140,540],[220,520],[300,540],[380,520],[460,540],[510,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // neck, head, bun
  brush.fill("#e8a07a", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  [[280,300],[283,250],[318,250],[322,300],[345,335],[255,335]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(300, 225, 38, 0.3);
  brush.fill("#2b1b3d", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.circle(300, 190, 40, 0.3);
  brush.circle(300, 155, 24, 0.3);
  brush.fill("#e8a07a", 230); brush.circle(300, 232, 30, 0.2);
  // sparkle lights
  brush.fill("#ffe082", 230); brush.fillBleed(0.1); brush.fillTexture(0.3, 0.3);
  for (let i = 0; i < 14; i++) brush.circle(40 + (i * 97) % 520, 40 + (i * 61) % 200, 3 + (i % 3), 0.2);
}
