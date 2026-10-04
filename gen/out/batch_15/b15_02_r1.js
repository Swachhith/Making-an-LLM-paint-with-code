async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede2cf");
  brush.noStroke();

  // dusty sky, warmer toward horizon
  brush.fill("#b8aa98", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 150);
  brush.vertex(0, 170);
  brush.endShape(true);
  brush.fill("#e0b888", 170);
  brush.beginShape(0.8);
  brush.vertex(0, 130);
  brush.vertex(600, 120);
  brush.vertex(600, 230);
  brush.vertex(0, 240);
  brush.endShape(true);

  // far dunes, low and pale
  brush.fill("#c09068", 200);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 235);
  brush.vertex(140, 200);
  brush.vertex(250, 228);
  brush.vertex(380, 190);
  brush.vertex(600, 222);
  brush.vertex(600, 270);
  brush.vertex(0, 270);
  brush.endShape(true);

  // mid dunes with a sharp lit side and a violet-umber shadow side
  let crests = [
    { l: [0, 330], c: [170, 250], r: [360, 320], lit: "#c8844a", sh: "#6e4838" },
    { l: [240, 320], c: [450, 245], r: [620, 300], lit: "#b87440", sh: "#5e3e34" },
  ];
  for (let d of crests) {
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(d.lit, 200 - pass * 30);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.3);
      brush.vertex(d.l[0], d.l[1]);
      brush.vertex(d.c[0], d.c[1]);
      brush.vertex(d.c[0] + 30, d.c[1] + 60);
      brush.vertex(d.l[0] + 40, 430);
      brush.vertex(d.l[0], 430);
      brush.endShape(true);
      brush.fill(d.sh, 190 - pass * 20);
      brush.fillBleed(0.2);
      brush.beginShape(0.3);
      brush.vertex(d.c[0], d.c[1]);
      brush.vertex(d.r[0], d.r[1]);
      brush.vertex(d.r[0], 430);
      brush.vertex(d.c[0] + 30, d.c[1] + 60);
      brush.endShape(true);
    }
  }

  // foreground sand
  brush.fill("#d4a064", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 400);
  brush.vertex(250, 380);
  brush.vertex(600, 410);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#8a5a3e", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(0, 450);
  brush.vertex(160, 420);
  brush.vertex(120, 540);
  brush.vertex(0, 580);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(600, 440);
  brush.vertex(520, 470);
  brush.vertex(560, 600);
  brush.vertex(600, 600);
  brush.endShape(true);

  // camel track: winding line of dark footprint pairs shrinking to the horizon
  let path = [[380, 600], [330, 540], [360, 480], [300, 430], [340, 380], [300, 330], [330, 290], [310, 250]];
  for (let i = 0; i < path.length - 1; i++) {
    let a = path[i], b = path[i + 1];
    for (let t = 0; t < 1; t += 0.2) {
      let x = lerp(a[0], b[0], t);
      let y = lerp(a[1], b[1], t);
      let s = map(y, 250, 600, 1.2, 6);
      brush.fill("#5a3a2a", 210);
      brush.fillBleed(0.1);
      brush.circle(x - s * 1.4, y, s, 0.3);
      brush.circle(x + s * 1.4, y + s, s, 0.3);
    }
  }
  // small caravan silhouettes on the far crest
  brush.fill("#3e2a24", 230);
  brush.fillBleed(0.12);
  for (let i = 0; i < 3; i++) {
    let x = 300 + i * 22, y = 238 + i * 2;
    brush.circle(x, y, 6, 0.3);
    brush.circle(x + 7, y - 6, 3, 0.2);
  }
}
