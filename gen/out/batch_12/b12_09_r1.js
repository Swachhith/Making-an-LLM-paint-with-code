async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6eae8");
  randomSeed(909);
  brush.noStroke();
  const H = 300;
  // misty overall wash, faint lilac-grey
  brush.fill("#bcc3cc", 170);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.6);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  // one soft central mountain + shoulders, mirrored
  let far = [[-30, 230], [70, 190], [170, 150], [270, 70], [330, 90], [420, 160], [520, 185], [630, 215]];
  let mid = [[-30, 270], [100, 245], [200, 262], [340, 238], [470, 262], [630, 250]];
  function ridge(pts, col, a, mirror) {
    brush.fill(col, a);
    brush.fillBleed(mirror ? 0.35 : 0.3);
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.6);
    brush.vertex(-30, H);
    for (let q of pts) brush.vertex(q[0], mirror ? 2 * H - q[1] : q[1]);
    brush.vertex(630, H);
    brush.endShape(true);
  }
  ridge(far, "#9aa6b4", 180, false);
  ridge(far, "#9aa6b4", 130, true);
  // mist band erasing mid-slope: leave it by painting mid ridge only at base
  ridge(mid, "#7d918e", 190, false);
  ridge(mid, "#7d918e", 140, true);
  // pine island on the left with reflection
  for (let m of [false, true]) {
    for (let i = 0; i < 7; i++) {
      let x = 70 + i * 16 + random(-4, 4), h = random(30, 55);
      brush.fill("#566e68", m ? 130 : 200);
      brush.fillBleed(0.3);
      brush.beginShape(0.3);
      let yb = H, yt = m ? H + h : H - h;
      brush.vertex(x - 12, yb); brush.vertex(x, yt); brush.vertex(x + 12, yb);
      brush.endShape(true);
    }
  }
  // quiet ripple lines, low contrast
  for (let i = 0; i < 5; i++) {
    let y = H + 60 + i * 50 + random(-8, 8);
    brush.fill("#dfe4e4", 200);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    let x0 = random(-20, 250);
    brush.vertex(x0, y); brush.vertex(x0 + random(200, 360), y); brush.vertex(x0 + 200, y + 10); brush.vertex(x0, y + 10);
    brush.endShape(true);
  }
}
