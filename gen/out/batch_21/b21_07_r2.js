async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1efea");
  brush.noStroke();

  // snow-heavy sky
  brush.fill("#a9a2a6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#8f8894", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 160);
  brush.endShape(true);

  // pines from below: stacked tiers narrowing upward, converging toward the top
  let pines = [[40, 470, 70, -30], [150, 450, 50, -12], [460, 450, 56, 14], [570, 472, 74, 34]];
  for (let p of pines) {
    let [x, base, w, lean] = p;
    for (let k = 0; k < 6; k++) {
      let y0 = base - k * 78;
      let cx = x + lean * k / 5;
      let ww = w * (1 - k * 0.13);
      brush.fill(k % 2 ? "#445040" : "#56604c", 205);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.3);
      brush.vertex(cx - ww, y0); brush.vertex(cx - ww * 0.3, y0 - 70); brush.vertex(cx, y0 - 110); brush.vertex(cx + ww * 0.3, y0 - 70); brush.vertex(cx + ww, y0);
      brush.endShape(true);
    }
    brush.fill("#2e362c", 180);
    brush.beginShape(0.4);
    brush.vertex(x, base); brush.vertex(x + lean + 6, 30); brush.vertex(x + w * 0.7, base - 40); brush.vertex(x + w, base);
    brush.endShape(true);
  }

  // cabin
  brush.fill("#7a5238", 222);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(190, 470); brush.vertex(410, 470); brush.vertex(404, 330); brush.vertex(196, 330);
  brush.endShape(true);
  for (let y = 344; y < 465; y += 24) {
    brush.fill("#553626", 190);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(196, y); brush.vertex(404, y - 2); brush.vertex(404, y + 8); brush.vertex(196, y + 9);
    brush.endShape(true);
  }
  // log ends at the corner
  for (let y = 346; y < 465; y += 24) {
    brush.fill("#b0845a", 220);
    brush.circle(192, y + 6, 7, 0.3);
    brush.circle(408, y + 6, 7, 0.3);
  }
  // roof underside and eave shadow; snow on the roof is paper
  brush.fill("#3a2a24", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(150, 338); brush.vertex(300, 234); brush.vertex(450, 338); brush.vertex(430, 344); brush.vertex(300, 256); brush.vertex(170, 344);
  brush.endShape(true);
  brush.fill("#9aa4b8", 175);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(300, 208); brush.vertex(462, 326); brush.vertex(452, 338); brush.vertex(300, 234);
  brush.endShape(true);
  // chimney with a wisp of smoke
  brush.fill("#6a4a3a", 225);
  brush.beginShape(0);
  brush.vertex(360, 250); brush.vertex(384, 250); brush.vertex(384, 200); brush.vertex(360, 200);
  brush.endShape(true);
  brush.fill("#bdb6ba", 170);
  brush.fillBleed(0.3);
  brush.circle(376, 180, 16, 0.7);
  brush.circle(390, 150, 20, 0.7);
  brush.circle(412, 120, 24, 0.7);

  // glowing windows and door
  brush.fill("#e89a3a", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0);
  brush.vertex(214, 372); brush.vertex(258, 372); brush.vertex(258, 414); brush.vertex(214, 414);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(342, 372); brush.vertex(386, 372); brush.vertex(386, 414); brush.vertex(342, 414);
  brush.endShape(true);
  brush.fill("#f4c874", 220);
  brush.circle(236, 393, 10, 0.3);
  brush.circle(364, 393, 10, 0.3);
  brush.fill("#e89a3a", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(270, 472); brush.vertex(330, 472); brush.vertex(350, 520); brush.vertex(250, 520);
  brush.endShape(true);
  brush.fill("#3a2a24", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0);
  brush.vertex(282, 386); brush.vertex(318, 386); brush.vertex(318, 470); brush.vertex(282, 470);
  brush.endShape(true);

  // snow in front: paper, with blue-grey shadow shapes and a trodden path
  brush.fill("#a8b1c2", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(180, 466); brush.vertex(300, 480); brush.vertex(420, 466); brush.vertex(620, 474); brush.vertex(620, 500); brush.vertex(300, 506); brush.vertex(-20, 498);
  brush.endShape(true);
  brush.fill("#8e97aa", 175);
  brush.beginShape(0.7);
  brush.vertex(282, 480); brush.vertex(318, 480); brush.vertex(360, 620); brush.vertex(240, 620);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(180, 540); brush.vertex(220, 580); brush.vertex(-20, 610);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(420, 590); brush.vertex(540, 548); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(430, 620);
  brush.endShape(true);
}
