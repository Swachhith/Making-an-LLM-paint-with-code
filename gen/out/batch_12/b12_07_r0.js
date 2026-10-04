async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8da");
  randomSeed(77);
  brush.noStroke();
  // ochre-grey sky, lighter low
  brush.fill("#c9b48c", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#a89a80", 150);
  brush.fillBleed(0.3);
  brush.circle(120, 90, 120, 0.8);
  brush.circle(480, 60, 100, 0.8);
  // hill: big curve
  brush.fill("#7a6a44", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 470); brush.vertex(150, 420); brush.vertex(330, 405); brush.vertex(500, 440); brush.vertex(620, 480); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4f4430", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(-20, 530); brush.vertex(300, 500); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // child silhouette on hilltop
  let fx = 320, fy = 405;
  const S = "#2b221a";
  brush.fill(S, 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(fx, fy - 62, 9, 0.2);
  // body
  brush.beginShape(0.3);
  brush.vertex(fx - 9, fy - 52); brush.vertex(fx + 9, fy - 52); brush.vertex(fx + 11, fy - 22); brush.vertex(fx - 11, fy - 22);
  brush.endShape(true);
  // legs
  brush.beginShape(0.2);
  brush.vertex(fx - 10, fy - 24); brush.vertex(fx + 2, fy - 24); brush.vertex(fx - 6, fy + 2); brush.vertex(fx - 16, fy + 2);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(fx - 2, fy - 24); brush.vertex(fx + 10, fy - 24); brush.vertex(fx + 16, fy + 2); brush.vertex(fx + 6, fy + 2);
  brush.endShape(true);
  // raised arm toward kite
  brush.beginShape(0.2);
  brush.vertex(fx + 4, fy - 50); brush.vertex(fx + 12, fy - 54); brush.vertex(fx + 30, fy - 84); brush.vertex(fx + 20, fy - 88);
  brush.endShape(true);
  // kite
  let kx = 470, ky = 140;
  brush.fill("#9a3b2a", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.05);
  brush.vertex(kx, ky - 35); brush.vertex(kx + 24, ky); brush.vertex(kx, ky + 45); brush.vertex(kx - 24, ky);
  brush.endShape(true);
  // string as a chain of tiny dots
  for (let t = 0; t <= 1; t += 0.02) {
    let x = lerp(fx + 26, kx, t);
    let y = lerp(fy - 88, ky + 45, t) + sin(t * 180) * 30;
    brush.fill("#3a3026", 200);
    brush.fillBleed(0.02);
    brush.circle(x, y, 1.2, 0.1);
  }
  // tail bows
  for (let i = 1; i <= 5; i++) {
    brush.fill("#b8862e", 220);
    brush.fillBleed(0.1);
    brush.circle(kx - 6 * i + sin(i * 70) * 10, ky + 45 + i * 18, 5, 0.4);
  }
}
