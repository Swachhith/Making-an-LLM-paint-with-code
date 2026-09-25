async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();

  // cool light: pale blue-grey sky wash, lighter in the middle
  brush.fill("#b9cad6", 110);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.7, 0.3);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#eef3f4", 180);
  brush.fillBleed(0.6, "out");
  brush.circle(300, 230, 140, true);

  // single stem and one long leaf from side
  brush.fill("#5f8a78", 235);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(292, 330); brush.vertex(288, 600); brush.vertex(304, 600); brush.vertex(308, 330);
  brush.endShape(true);
  brush.fill("#6f9a8a", 180);
  brush.fillBleed(0.35, "out");
  brush.beginShape(0.85);
  brush.vertex(296, 600); brush.vertex(230, 470); brush.vertex(215, 360); brush.vertex(262, 470); brush.vertex(300, 560);
  brush.endShape(true);

  // side view cup: back petal, then two side petals, front petal
  let layers = [
    [[300, 330], [230, 290], [225, 170], [300, 140], [375, 170], [370, 290]],
    [[300, 335], [215, 300], [205, 190], [245, 130], [285, 200], [290, 320]],
    [[300, 335], [385, 300], [395, 190], [355, 130], [315, 200], [310, 320]],
    [[300, 340], [245, 310], [250, 190], [300, 150], [350, 190], [355, 310]],
  ];
  for (let i = 0; i < layers.length; i++) {
    let L = layers[i];
    // red body
    brush.fill(i == 3 ? "#c6283a" : "#a81e33", i == 0 ? 140 : 190);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.9);
    for (let v of L) brush.vertex(v[0], v[1]);
    brush.endShape(true);
    // yellow flame edge at the top of each petal
    brush.fill("#f2c230", 235);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.9);
    let tipIdx = i == 1 ? 3 : i == 2 ? 3 : 3;
    let t = L[tipIdx];
    brush.vertex(t[0] - 30, t[1] + 40); brush.vertex(t[0], t[1] + 2); brush.vertex(t[0] + 30, t[1] + 40); brush.vertex(t[0], t[1] + 24);
    brush.endShape(true);
  }
  // shadow pooling at base of cup
  brush.fill("#6b1426", 220);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.9);
  brush.vertex(255, 300); brush.vertex(300, 340); brush.vertex(345, 300); brush.vertex(300, 318);
  brush.endShape(true);
}
