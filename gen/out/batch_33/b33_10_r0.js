async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f0dc");
  randomSeed(101);
  brush.noStroke();
  // faint warm wash behind
  brush.fill("#f6d890", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9); brush.vertex(0, 300); brush.vertex(300, 270); brush.vertex(600, 320); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  // floor shadow
  brush.fill("#6a3a22", 150);
  brush.beginShape(0.9); brush.vertex(380, 520); brush.vertex(520, 515); brush.vertex(540, 545); brush.vertex(360, 548); brush.endShape(true);
  // pot
  brush.fill("#d8602a", 215); brush.fillBleed(0.25);
  brush.beginShape(0.3); brush.vertex(400, 470); brush.vertex(500, 470); brush.vertex(485, 535); brush.vertex(415, 535); brush.endShape(true);
  brush.fill("#a83a18", 200);
  brush.beginShape(0.3); brush.vertex(455, 470); brush.vertex(500, 470); brush.vertex(485, 535); brush.vertex(455, 535); brush.endShape(true);
  brush.fill("#e87a3a", 220);
  brush.beginShape(0.3); brush.vertex(395, 455); brush.vertex(505, 455); brush.vertex(505, 478); brush.vertex(395, 478); brush.endShape(true);
  // trunk
  brush.fill("#3a2214", 220);
  brush.beginShape(0.3); brush.vertex(442, 460); brush.vertex(458, 460); brush.vertex(462, 390); brush.vertex(448, 385); brush.endShape(true);
  // crown
  brush.fill("#3a2a14", 170); brush.fillBleed(0.3);
  brush.circle(450, 360, 46, 0.7);
  brush.fill("#5a4a1a", 190);
  brush.circle(430, 372, 30, 0.7); brush.circle(472, 365, 30, 0.7); brush.circle(450, 340, 28, 0.7);
  // lemons
  brush.fill("#f0b818", 235); brush.fillBleed(0.2);
  [[425,360],[470,372],[452,335],[438,388],[480,345]].forEach(function (l) { brush.circle(l[0], l[1], 8, 0.3); });
  // dark ground line
  brush.fill("#2a1a12", 200);
  brush.beginShape(0.5); brush.vertex(40, 552); brush.vertex(300, 548); brush.vertex(560, 553); brush.vertex(560, 566); brush.vertex(40, 568); brush.endShape(true);
}
