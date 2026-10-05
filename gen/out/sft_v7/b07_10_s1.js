async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(200);
  brush.noStroke();

  // deep green stem and leaves
  brush.fill("#2f6a3a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(310, 520); brush.vertex(320, 520); brush.vertex(320, 260); brush.vertex(310, 260);
  brush.endShape(true);
  brush.fill("#1f522a", 220);
  brush.beginShape(0.3);
  brush.vertex(310, 260); brush.vertex(300, 200); brush.vertex(270, 180); brush.vertex(290, 200);
  brush.endShape(true);
  brush.fill("#1f522a", 220);
  brush.beginShape(0.5);
  brush.vertex(220, 500); brush.vertex(300, 470); brush.vertex(310, 420); brush.vertex(250, 430);
  brush.endShape(true);
  brush.fill("#2f6a3a", 230);
  brush.beginShape(0.6);
  brush.vertex(470, 500); brush.vertex(420, 470); brush.vertex(450, 430); brush.vertex(490, 450);
  brush.endShape(true);

  // layered pink rings, each smaller and more opaque
  let rings = [[120, 300, 250], [100, 260, 210], [80, 220, 170], [60, 180, 140], [42, 140, 110], [26, 105, 85]];
  for (let i = 0; i < rings.length; i++) {
    let [r, c, o] = rings[i];
    brush.fill("#f08fa8", o);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(r, c, 18, 0.3);
    brush.fill("#e06a8a", o - 10);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(r, c, 10, 0.3);
    brush.fill("#c8305a", o - 15);
    brush.fillBleed(0.15);
    brush.fillTexture(0.5, 0.5);
    brush.circle(r, c, 5, 0.3);
  }
  // darker shadow on the side
  brush.fill("#b0204a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(115, 255, 45, 0.5);
  // a few stray petals
  brush.fill("#f08fa8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(40, 40, 20, 0.5);
  brush.circle(520, 30, 18, 0.5);
  brush.circle(540, 520, 20, 0.5);
}
