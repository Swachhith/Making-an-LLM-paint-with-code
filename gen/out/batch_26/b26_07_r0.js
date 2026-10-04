async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfbf6");
  randomSeed(2607);
  brush.noStroke();

  // splashy wet sky, blue blooms
  brush.fill("#7fb2d8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(400, 240);
  brush.vertex(120, 200); brush.vertex(-20, 250);
  brush.endShape(true);
  for (let k = 0; k < 5; k++) {
    brush.fill("#5e96c8", 170);
    brush.circle(random(0, 600), random(20, 180), random(30, 70), true);
  }

  // field washed in loose greens, with drips running down
  brush.fill("#a8c46a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 340); brush.vertex(200, 325); brush.vertex(420, 345); brush.vertex(620, 330);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6e9a3c", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(300, 450); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let k = 0; k < 7; k++) {
    let x = random(20, 580), y = random(460, 520), l = random(50, 100);
    brush.fill("#5c8a30", 200);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 5, y + l); brush.vertex(x - 4, y + l);
    brush.endShape(true);
    brush.circle(x, y + l, 9, true);
  }

  // cherry tree, small and far: trunk then bursts of pink
  brush.fill("#5a3a38", 220);
  brush.beginShape(0.4);
  brush.vertex(296, 345); brush.vertex(316, 345); brush.vertex(312, 280); brush.vertex(300, 280);
  brush.endShape(true);
  for (let k = 0; k < 14; k++) {
    let a = random(360), r = random(0, 70);
    brush.fill(random() < 0.5 ? "#f090b4" : "#e8608e", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.circle(306 + cos(a) * r * 1.3, 245 + sin(a) * r * 0.8, random(25, 45), true);
  }
  // pink drips falling from the crown
  for (let k = 0; k < 5; k++) {
    let x = 250 + random(0, 110), y = 290;
    brush.fill("#e8608e", 200);
    brush.beginShape(0.5);
    brush.vertex(x - 7, y); brush.vertex(x + 7, y); brush.vertex(x + 4, y + random(40, 80)); brush.vertex(x - 3, y + 60);
    brush.endShape(true);
  }
  // splatter across the page
  for (let k = 0; k < 30; k++) {
    brush.fill(random() < 0.6 ? "#e8608e" : "#5e96c8", 210);
    brush.circle(random(0, 600), random(0, 600), random(2, 6), true);
  }
}
