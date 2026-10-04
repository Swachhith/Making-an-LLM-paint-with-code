async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfbf6");
  randomSeed(505);
  brush.noStroke();

  // splashy blooms behind the figure
  const bg = ["#f2a25c", "#7cc0d8", "#e76f8f", "#f5cf5a"];
  for (let i = 0; i < 9; i++) {
    brush.fill(random(bg), random(140, 190));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(600), random(0, 330), random(45, 110), 0.8);
  }

  // shoulders and dress
  brush.fill("#2f7fb6", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(120, 610); brush.vertex(150, 470); brush.vertex(230, 420);
  brush.vertex(300, 440); brush.vertex(370, 420); brush.vertex(450, 470);
  brush.vertex(480, 610);
  brush.endShape(true);
  brush.fill("#1d5f94", 170);
  brush.beginShape(0.6);
  brush.vertex(170, 610); brush.vertex(200, 500); brush.vertex(300, 470);
  brush.vertex(400, 500); brush.vertex(420, 610);
  brush.endShape(true);

  // neck and face
  brush.fill("#e9a47c", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(275, 380); brush.vertex(325, 380); brush.vertex(330, 445); brush.vertex(270, 445);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(250, 280); brush.vertex(350, 280); brush.vertex(345, 360);
  brush.vertex(300, 400); brush.vertex(255, 360);
  brush.endShape(true);
  brush.fill("#d9785a", 150);
  brush.circle(270, 345, 12, 0.5);
  brush.circle(330, 345, 12, 0.5);
  // hair falling
  brush.fill("#6b3a1f", 200);
  brush.beginShape(0.7);
  brush.vertex(235, 270); brush.vertex(255, 300); brush.vertex(250, 420); brush.vertex(215, 440); brush.vertex(222, 320);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(365, 270); brush.vertex(345, 300); brush.vertex(352, 420); brush.vertex(388, 440); brush.vertex(378, 320);
  brush.endShape(true);
  // shadow of the brim on the face
  brush.fill("#b26a4f", 160);
  brush.beginShape(0.6);
  brush.vertex(248, 280); brush.vertex(352, 280); brush.vertex(345, 310); brush.vertex(255, 310);
  brush.endShape(true);

  // wide straw hat
  brush.fill("#e2b04a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.8);
  brush.vertex(80, 290); brush.vertex(160, 235); brush.vertex(300, 220);
  brush.vertex(440, 235); brush.vertex(525, 285); brush.vertex(430, 300);
  brush.vertex(300, 292); brush.vertex(170, 300);
  brush.endShape(true);
  brush.fill("#c88a26", 200);
  brush.beginShape(0.7);
  brush.vertex(225, 250); brush.vertex(240, 180); brush.vertex(300, 165);
  brush.vertex(360, 180); brush.vertex(375, 250);
  brush.endShape(true);
  brush.fill("#d23a4a", 210);
  brush.beginShape(0.4);
  brush.vertex(226, 235); brush.vertex(374, 235); brush.vertex(376, 255); brush.vertex(224, 255);
  brush.endShape(true);

  // drips running down from the dress and splatter dots
  for (let i = 0; i < 6; i++) {
    const x = random(150, 450), y = random(540, 580), len = random(30, 60);
    brush.fill("#1d5f94", 170);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 4, y + len); brush.vertex(x - 4, y + len);
    brush.endShape(true);
  }
  for (let i = 0; i < 30; i++) {
    brush.fill(random(["#2f7fb6", "#d23a4a", "#e2b04a"]), random(170, 230));
    brush.fillBleed(0.1);
    brush.circle(random(40, 560), random(40, 560), random(2, 6), 0.4);
  }
}
