async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c0c10");
  brush.noStroke();

  // sky painted lighter than the paper; the pines and ground stay as dark paper
  let skyline = [[-20,470],[10,470],[30,400],[50,470],[70,470],[90,360],[112,470],[140,470],[160,420],[180,470],[300,470],[320,395],[340,470],[355,470],[375,330],[398,470],[420,470],[440,400],[460,470],[520,470],[540,380],[562,470],[580,470],[595,430],[620,470]];
  let skyPass = [["#232a3c", 220], ["#2a3044", 190]];
  for (let sp of skyPass) {
    brush.fill(sp[0], sp[1]);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0);
    brush.vertex(-20, -20);
    brush.vertex(620, -20);
    for (let i = skyline.length - 1; i >= 0; i--) brush.vertex(skyline[i][0], skyline[i][1]);
    brush.endShape(true);
  }
  // warm afterglow low in the sky, also stopping at the tree line
  brush.fill("#8a5a34", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0);
  brush.vertex(-20, 400);
  brush.vertex(620, 395);
  for (let i = skyline.length - 1; i >= 0; i--) brush.vertex(skyline[i][0], skyline[i][1]);
  brush.endShape(true);

  // crescent moon as a polygon
  let mx = 440, my = 130, R = 40;
  brush.fill("#f4e4b4", 245);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  for (let k = 0; k < 2; k++) {
    brush.beginShape(0.6);
    for (let a = 40; a <= 260; a += 20) brush.vertex(mx + cos(a) * R, my + sin(a) * R);
    for (let a = 240; a >= 60; a -= 20) brush.vertex(mx + 16 + cos(a) * R * 0.85, my - 10 + sin(a) * R * 0.85);
    brush.endShape(true);
  }

  // stars
  let stars = [[60,60],[130,110],[200,40],[260,170],[90,220],[330,80],[520,60],[560,190],[480,250],[180,300],[40,330],[370,260],[300,330],[560,320],[240,230],[150,190],[410,40],[20,140]];
  for (let s of stars) {
    brush.fill("#e8dcc0", 235);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(s[0], s[1], 2.2, 0.3);
  }

  // cabin: roof in the tree gap, warm windows
  brush.fill("#050506", 250);
  brush.fillBleed(0.1);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(215, 475);
  brush.vertex(215, 445);
  brush.vertex(245, 422);
  brush.vertex(275, 445);
  brush.vertex(275, 475);
  brush.endShape(true);
  brush.fill("#f5a445", 245);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.3);
  brush.circle(232, 458, 6, 0.2);
  brush.circle(258, 458, 6, 0.2);
  brush.fill("#e07a2a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.circle(245, 510, 16, 0.5);
  brush.fill("#f0a040", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(495, 480, 3, 0.2);
}
