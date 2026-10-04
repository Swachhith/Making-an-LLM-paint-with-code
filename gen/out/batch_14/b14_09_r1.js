async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf8f0");
  randomSeed(919);
  brush.noStroke();

  // sky: long ragged sweeps of wet colour, overlapping so they bloom
  const sky = ["#5f9ed8", "#8a96da", "#7fc0e2", "#a98ed0", "#f0b27a"];
  for (let i = 0; i < 9; i++) {
    const y = i * 42 - 10;
    brush.fill(sky[i % 5], random(150, 195));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.55);
    brush.beginShape(1);
    brush.vertex(-40, y + random(-20, 20));
    brush.vertex(random(100, 250), y - random(20, 50));
    brush.vertex(random(300, 450), y + random(-10, 30));
    brush.vertex(640, y - random(0, 30));
    brush.vertex(640, y + random(50, 90));
    brush.vertex(random(250, 400), y + random(60, 100));
    brush.vertex(-40, y + random(50, 90));
    brush.endShape(true);
  }

  // horizon trees, two passes
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#2e4a24" : "#4d6b3a", 210);
    for (let x = -10; x < 620; x += 22) brush.circle(x, 436 + random(-4, 4) + k * 3, random(7, 16) - k * 3, 0.6);
  }

  // fields
  for (let k = 0; k < 2; k++) {
    brush.fill(k ? "#6e9a2a" : "#a8c451", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(-20, 442 + k * 40); brush.vertex(290, 442); brush.vertex(110, 620); brush.vertex(-20, 620);
    brush.endShape(true);
    brush.fill(k ? "#b87a22" : "#e0aa44", 210);
    brush.beginShape(0.4);
    brush.vertex(310, 442); brush.vertex(620, 442 + k * 40); brush.vertex(620, 620); brush.vertex(530, 620);
    brush.endShape(true);
  }
  // road
  brush.fill("#c9b79a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(290, 442); brush.vertex(310, 442); brush.vertex(530, 620); brush.vertex(110, 620);
  brush.endShape(true);
  brush.fill("#8e7a60", 160);
  brush.beginShape(0.3);
  brush.vertex(300, 446); brush.vertex(304, 446); brush.vertex(350, 620); brush.vertex(280, 620);
  brush.endShape(true);
  // fence posts along the left edge of the road
  brush.fill("#5a4030", 210);
  for (let i = 0; i < 6; i++) {
    const t = i / 5, x = 285 - t * 190, y = 450 + t * 150, h = 10 + t * 40;
    brush.beginShape(0);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 8, y - h); brush.vertex(x - 8, y - h);
    brush.endShape(true);
  }

  // drips below the sky and big splatters
  for (let i = 0; i < 9; i++) {
    const x = random(20, 580), y = random(360, 400), len = random(30, 70);
    brush.fill(random(sky), 180);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 3, y + len); brush.vertex(x - 3, y + len);
    brush.endShape(true);
    brush.circle(x, y + len + 4, 5, 0.3);
  }
  for (let i = 0; i < 45; i++) {
    brush.fill(random(["#2e4a24", "#b87a22", "#5f9ed8", "#a98ed0"]), random(180, 235));
    brush.fillBleed(0.1);
    brush.circle(random(600), random(600), random(2, 7), 0.4);
  }
}
