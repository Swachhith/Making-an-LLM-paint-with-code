async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf8f0");
  randomSeed(909);
  brush.noStroke();

  // splashy sky: overlapping blooms of blue and violet, paper left between
  const sky = ["#6fa8dc", "#9aa6e0", "#8fc7e6", "#b59bd4"];
  for (let i = 0; i < 14; i++) {
    brush.fill(random(sky), random(150, 200));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.55);
    brush.circle(random(-20, 620), random(-20, 330), random(50, 110), 0.9);
  }
  // warm bloom near the horizon
  brush.fill("#f3c27a", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, 380); brush.vertex(200, 350); brush.vertex(450, 360); brush.vertex(620, 380); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);

  // horizon trees
  brush.fill("#4d6b3a", 200);
  for (let x = -10; x < 620; x += 24) brush.circle(x, 432 + random(-4, 4), random(8, 18), 0.6);

  // fields either side of the road
  brush.fill("#a8c451", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 440); brush.vertex(292, 440); brush.vertex(120, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d9a441", 210);
  brush.beginShape(0.4);
  brush.vertex(308, 440); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(520, 620);
  brush.endShape(true);
  // furrows
  brush.fill("#b2792a", 160);
  for (let i = 0; i < 5; i++) {
    const y = 470 + i * 30;
    brush.beginShape(0.3);
    brush.vertex(320 + i * 30, y); brush.vertex(620, y - 6); brush.vertex(620, y + 8); brush.vertex(330 + i * 34, y + 10);
    brush.endShape(true);
  }

  // the road, pale ochre-grey
  brush.fill("#c9b79a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(292, 440); brush.vertex(308, 440); brush.vertex(520, 620); brush.vertex(120, 620);
  brush.endShape(true);
  brush.fill("#9c8a70", 150);
  brush.beginShape(0.3);
  brush.vertex(299, 445); brush.vertex(303, 445); brush.vertex(340, 620); brush.vertex(290, 620);
  brush.endShape(true);

  // drips from the horizon and flicked splatters
  for (let i = 0; i < 7; i++) {
    const x = random(20, 580), y = random(340, 380), len = random(25, 55);
    brush.fill(random(sky), 170);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 3, y + len); brush.vertex(x - 3, y + len);
    brush.endShape(true);
  }
  for (let i = 0; i < 35; i++) {
    brush.fill(random(["#4d6b3a", "#d9a441", "#6fa8dc"]), random(170, 230));
    brush.fillBleed(0.1);
    brush.circle(random(600), random(420, 600), random(2, 6), 0.4);
  }
}
