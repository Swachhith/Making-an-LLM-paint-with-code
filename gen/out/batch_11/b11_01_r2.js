async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d6");
  brush.noStroke();

  // pale hazy sky
  brush.fill("#c9c3a8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 190); brush.vertex(-20, 210);
  brush.endShape(true);

  // far bluish mountain ridge
  brush.fill("#7d8a92", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 130); brush.vertex(90, 70); brush.vertex(200, 105); brush.vertex(330, 55); brush.vertex(470, 100); brush.vertex(620, 70); brush.vertex(620, 180); brush.vertex(-20, 180);
  brush.endShape(true);

  // terrace bands, far to near, each a curving strip
  const bands = [
    { y: 150, h: 45, c: "#8f9c94", o: 170 },
    { y: 190, h: 50, c: "#7f9272", o: 185 },
    { y: 235, h: 60, c: "#7a8f55", o: 185 },
    { y: 290, h: 70, c: "#6b8445", o: 200 },
    { y: 355, h: 85, c: "#5e7a3a", o: 210 },
    { y: 435, h: 100, c: "#4f6b2e", o: 220 },
    { y: 525, h: 110, c: "#33491c", o: 240 }
  ];
  for (let i = 0; i < bands.length; i++) {
    const b = bands[i];
    const amp = 18 + i * 6;
    brush.fill(b.c, b.o);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.35);
    brush.beginShape(0.6);
    for (let x = -30; x <= 630; x += 60) {
      brush.vertex(x, b.y + amp * Math.sin((x / 600) * Math.PI * 1.6 + i * 0.9));
    }
    for (let x = 630; x >= -30; x -= 60) {
      brush.vertex(x, b.y + b.h + amp * Math.sin((x / 600) * Math.PI * 1.6 + i * 0.9 + 0.2));
    }
    brush.endShape(true);

    // second smaller pass in the upper half of each terrace: water glint + green depth
    if (i > 1) {
      brush.fill(i % 2 ? "#6f8f3c" : "#557030", 200);
      brush.fillBleed(0.22);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.6);
      for (let x = -30; x <= 630; x += 60) brush.vertex(x, b.y + b.h * 0.45 + amp * Math.sin((x / 600) * Math.PI * 1.6 + i * 0.9 + 0.1));
      for (let x = 630; x >= -30; x -= 60) brush.vertex(x, b.y + b.h - 4 + amp * Math.sin((x / 600) * Math.PI * 1.6 + i * 0.9 + 0.2));
      brush.endShape(true);
    }
    // earthy dike edge along the lower rim of each terrace
    brush.fill("#7a5a35", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    for (let x = -30; x <= 630; x += 60) {
      brush.vertex(x, b.y + b.h - 6 + amp * Math.sin((x / 600) * Math.PI * 1.6 + i * 0.9 + 0.2));
    }
    for (let x = 630; x >= -30; x -= 60) {
      brush.vertex(x, b.y + b.h + 12 + amp * Math.sin((x / 600) * Math.PI * 1.6 + i * 0.9 + 0.2));
    }
    brush.endShape(true);
  }

  // distant misty hill behind the terraces
  brush.fill("#8e948f", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 170); brush.vertex(120, 110); brush.vertex(260, 140); brush.vertex(400, 95); brush.vertex(620, 150); brush.vertex(620, 180); brush.vertex(-20, 190);
  brush.endShape(true);

  // tiny farmer's hut on a mid terrace
  brush.fill("#6a4426", 220);
  brush.beginShape(0.1);
  brush.vertex(150, 305); brush.vertex(150, 285); brush.vertex(168, 272); brush.vertex(186, 285); brush.vertex(186, 305);
  brush.endShape(true);
  // a few palms/trees on the right edge
  brush.fill("#3a4a22", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(520, 330, 30, 0.6);
  brush.circle(555, 345, 24, 0.6);
  brush.fill("#2e3c1c", 210);
  brush.circle(530, 340, 18, 0.5);
}
