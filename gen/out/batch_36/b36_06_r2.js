async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeede");
  brush.noStroke();
  // big sky in stacked bands
  const bands = [["#6a1b9a", 190, 0, 150], ["#d81b60", 200, 90, 300], ["#ff6d00", 215, 220, 440], ["#ffc107", 210, 330, 470]];
  for (const b of bands) {
    brush.fill(b[0], b[1]); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    [[0,b[2]],[600,b[2]-15],[600,b[3]],[0,b[3]+15]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
  // sun
  brush.fill("#fff6cc", 230); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(180, 430, 55, 0.3);
  // clouds streaks
  brush.fill("#8e1b5e", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  for (let i = 0; i < 4; i++) {
    const y = 130 + i * 60, x = 280 + (i % 2) * 120;
    brush.beginShape(0.9);
    [[x,y],[x+100,y-14],[x+220,y+4],[x+150,y+26],[x+30,y+24]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
  // distant hills
  brush.fill("#7a1f3a", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[0,480],[120,462],[300,478],[450,458],[600,474],[600,520],[0,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // ground
  brush.fill("#2a0f1f", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[0,510],[300,500],[600,508],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // acacia, off to right
  brush.fill("#1a0a14", 240); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[440,520],[452,440],[456,380],[470,380],[472,440],[486,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.5);
  [[458,400],[400,370],[350,360],[355,345],[410,350],[462,382]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#240f1d", 230);
  brush.beginShape(0.9);
  [[340,350],[380,320],[460,305],[540,320],[580,350],[540,365],[460,350],[380,368]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#3a1428", 200);
  brush.beginShape(0.9);
  [[380,330],[460,315],[540,330],[460,340]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // small grazing figures
  brush.fill("#1a0a14", 230);
  brush.circle(90, 515, 8, 0.3); brush.circle(110, 518, 6, 0.3);
  // glaze: deeper crimson cloud bars, sun reflection, bolder silhouette
  brush.fill("#c2185b", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  [[0,300],[120,285],[240,310],[160,335],[40,330]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffe08a", 200); brush.fillBleed(0.3);
  brush.circle(180, 430, 70, 0.5);
  brush.fill("#fff6cc", 235);
  brush.circle(180, 432, 34, 0.3);
  brush.fill("#12060d", 245); brush.fillBleed(0.15);
  brush.beginShape(0.5);
  [[442,520],[454,440],[460,390],[468,390],[470,440],[484,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#12060d", 230);
  brush.beginShape(0.9);
  [[360,345],[460,318],[560,345],[460,356]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // darker foreground, shadow of tree on ground
  brush.fill("#1a0a14", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[0,540],[200,525],[420,540],[600,525],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#4a1830", 190);
  brush.beginShape(0.8);
  [[300,525],[440,520],[470,545],[300,555]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ff5722", 170); brush.fillBleed(0.3);
  brush.beginShape(0.9);
  [[200,520],[260,512],[280,525],[210,532]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
}
