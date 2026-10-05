async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f8");
  randomSeed(1301);
  brush.noStroke();

  // misty sky, two bands, low contrast
  brush.fill("#c9d4e0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#a8b6d8", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, 190); brush.vertex(620, 180); brush.vertex(620, 360); brush.vertex(-20, 370);
  brush.endShape(true);

  // far hills, violet-grey, left as paper
  brush.fill("#9aa3b8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 370); brush.vertex(150, 355); brush.vertex(300, 370); brush.vertex(450, 350); brush.vertex(620, 365); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#7c87a2", 150);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(200, 400); brush.vertex(400, 415); brush.vertex(620, 400); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);

  // grass, muted green, uneven
  brush.fill("#9aae8a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 440); brush.vertex(100, 430); brush.vertex(220, 445); brush.vertex(340, 432); brush.vertex(460, 448); brush.vertex(620, 436); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // poppies: two passes each, loose and overlapping
  const cx = 120, cy = 520;
  const pops = [
    [190, 530, 110], [250, 522, 120], [310, 534, 100], [370, 520, 125],
    [440, 530, 115], [500, 526, 105], [560, 534, 120], [150, 540, 90],
    [220, 544, 100], [340, 542, 110], [420, 546, 95], [520, 538, 105]
  ];
  for (const p of pops) {
    const [x, y, r] = p;
    brush.fill("#d83030", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, r, 0.5);
    brush.fill("#8a101a", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, r * 0.65, 0.5);
    brush.fill("#4a0a12", 160);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, r * 0.4, 0.5);
  }
}
