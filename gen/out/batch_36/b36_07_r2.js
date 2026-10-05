async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b0c24");
  brush.noStroke();
  // night sky washes
  brush.fill("#2a2f8f", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,0],[600,0],[600,520],[0,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#4a3fb0", 190); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  [[330,0],[430,0],[400,200],[310,360],[230,520],[150,520],[250,330],[300,150]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // milky way core, pale
  brush.fill("#b8b8ff", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  [[350,20],[400,30],[370,200],[290,360],[220,470],[190,455],[260,320],[320,160]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#e8e4ff", 160);
  brush.beginShape(0.8);
  [[360,60],[385,70],[345,210],[280,350],[250,350],[310,210]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // stars
  brush.fill("#ffffff", 230); brush.fillBleed(0.1);
  for (let i = 0; i < 45; i++) brush.circle((i * 131) % 590 + 5, (i * 89) % 480 + 5, 1.5 + (i % 3) * 0.8, 0.2);
  // dark ridge ground
  brush.fill("#06061a", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[0,520],[120,490],[260,520],[420,500],[600,480],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // glow around tent
  brush.fill("#ff9a1f", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(300, 530, 70, 0.6);
  // tent, glowing
  brush.fill("#ff7b00", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  [[235,570],[300,480],[365,570]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffd166", 220); brush.fillBleed(0.2);
  brush.beginShape(0.1);
  [[275,570],[300,520],[325,570]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // broader milky-way haze, magenta accent clouds, tent glow reinforced
  brush.fill("#8a6cf0", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  [[300,100],[420,60],[470,200],[330,380],[240,470],[190,430],[280,280]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#d4d0ff", 180); brush.fillBleed(0.3);
  brush.beginShape(0.9);
  [[345,70],[385,80],[340,230],[265,380],[235,375],[300,220]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ffffff", 240);
  for (let i = 0; i < 30; i++) brush.circle(220 + (i * 47) % 200, 30 + (i * 71) % 380, 1.5 + (i % 2), 0.2);
  brush.fill("#ff7b00", 200); brush.fillBleed(0.3);
  brush.circle(300, 548, 40, 0.5);
  brush.fill("#ffd166", 240);
  brush.beginShape(0.1);
  [[280,572],[300,525],[320,572]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // pine silhouettes either side of tent, bright accent
  brush.fill("#04040f", 245); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  [[120,540,70],[180,550,55],[430,545,75],[500,535,65]].forEach(t => {
    brush.beginShape(0.1);
    [[t[0]-26,t[1]+60],[t[0],t[1]-t[2]],[t[0]+26,t[1]+60]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  });
  brush.fill("#ffb02e", 235); brush.fillBleed(0.2);
  brush.beginShape(0.1);
  [[240,572],[300,486],[360,572]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#fff0b3", 235);
  brush.beginShape(0.1);
  [[278,572],[300,525],[322,572]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
}
