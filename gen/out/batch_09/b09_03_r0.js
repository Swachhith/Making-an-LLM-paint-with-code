async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfbf6");
  brush.noStroke();

  // four facades, each its own colour, splashed loose
  let houses = [
    { x: -10, w: 160, top: 70, peak: 20, c: "#e0405a", d: "#9a1c3a" },
    { x: 150, w: 150, top: 110, peak: 0, c: "#f2b21c", d: "#c0700a" },
    { x: 300, w: 155, top: 50, peak: 10, c: "#2a8fb8", d: "#135a86" },
    { x: 455, w: 160, top: 95, peak: 25, c: "#5bb04a", d: "#2c7a34" }
  ];
  for (let h of houses) {
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.fill(h.c, 200);
    brush.beginShape(0.15);
    brush.vertex(h.x, h.top + h.peak); brush.vertex(h.x + h.w / 2, h.top - h.peak);
    brush.vertex(h.x + h.w, h.top + h.peak); brush.vertex(h.x + h.w, 540); brush.vertex(h.x, 540);
    brush.endShape(true);
    // shadow side second pass
    brush.fill(h.d, 150);
    brush.beginShape(0.3);
    brush.vertex(h.x + h.w * 0.7, h.top + h.peak); brush.vertex(h.x + h.w, h.top + h.peak);
    brush.vertex(h.x + h.w, 540); brush.vertex(h.x + h.w * 0.75, 540);
    brush.endShape(true);
    // drips running from the base
    brush.fillBleed(0.25);
    brush.fill(h.c, 190);
    for (let k = 0; k < 3; k++) {
      let dx = h.x + 25 + k * (h.w / 3);
      let len = 30 + ((k * 37 + h.w) % 50);
      brush.beginShape(0.6);
      brush.vertex(dx - 9, 530); brush.vertex(dx + 9, 530); brush.vertex(dx + 6, 540 + len); brush.vertex(dx - 5, 540 + len);
      brush.endShape(true);
      brush.circle(dx, 545 + len, 9, 0.3);
    }
    // windows: dark panes in two rows
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 2; col++) {
        let wx = h.x + 28 + col * (h.w * 0.45);
        let wy = h.top + h.peak + 45 + row * 120;
        if (row == 2 && col == 0) continue;
        brush.fill("#1d2a4a", 200);
        brush.beginShape(0.1);
        brush.vertex(wx, wy); brush.vertex(wx + 42, wy); brush.vertex(wx + 42, wy + 70); brush.vertex(wx, wy + 70);
        brush.endShape(true);
      }
    }
    // door
    brush.fill(h.d, 220);
    brush.beginShape(0.2);
    brush.vertex(h.x + 30, 450); brush.vertex(h.x + 75, 450); brush.vertex(h.x + 75, 540); brush.vertex(h.x + 30, 540);
    brush.endShape(true);
  }

  // colour blooms where facades meet
  let blooms = [[150, 300, "#f08a2a"], [300, 200, "#6a4ab0"], [455, 380, "#1f9a8a"], [80, 160, "#ff6a8a"]];
  for (let b of blooms) {
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.fill(b[2], 160);
    brush.circle(b[0], b[1], 34, 0.9);
  }
}
