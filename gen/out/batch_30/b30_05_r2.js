async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8da");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.45,0.4);
  // grey-black wash sky, lots of empty space
  brush.fill("#4a3e44", 150); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,320); brush.vertex(-60,290); brush.endShape(true);
  brush.fill("#2a2026", 140); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(400,-60); brush.vertex(300,180); brush.vertex(-60,220); brush.endShape(true);
  brush.fill("#a01830", 110); brush.circle(110,120,95,1.5);
  // water
  brush.fill("#1c1418", 210); brush.beginShape(0.8); brush.vertex(-60,430); brush.vertex(660,430); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#2e2226", 170); brush.beginShape(0.8); brush.vertex(-60,480); brush.vertex(660,470); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // reflection of coat
  brush.fill("#b01830", 170); brush.beginShape(0.6); brush.vertex(380,440); brush.vertex(440,440); brush.vertex(455,590); brush.vertex(365,590); brush.endShape(true);
  // bridge deck
  brush.fill("#14090c", 235); brush.beginShape(0.1); brush.vertex(-60,365); brush.vertex(660,340); brush.vertex(660,430); brush.vertex(-60,440); brush.endShape(true);
  // railing posts
  brush.fill("#2a1e22", 230); brush.beginShape(0.1); brush.vertex(-60,300); brush.vertex(660,280); brush.vertex(660,308); brush.vertex(-60,328); brush.endShape(true);
  for (const x of [20,130,240,340,450,560]) { brush.beginShape(0.1); brush.vertex(x,310); brush.vertex(x+18,310); brush.vertex(x+18,370); brush.vertex(x,370); brush.endShape(true); }
  // figure — coat layered
  brush.fill("#d01c40", 225); brush.beginShape(0.4); brush.vertex(398,205); brush.vertex(442,205); brush.vertex(478,360); brush.vertex(362,365); brush.endShape(true);
  brush.fill("#8a0c26", 220); brush.beginShape(0.4); brush.vertex(424,210); brush.vertex(442,210); brush.vertex(478,360); brush.vertex(420,364); brush.endShape(true);
  brush.fill("#e83050", 160); brush.beginShape(0.4); brush.vertex(402,215); brush.vertex(420,215); brush.vertex(405,350); brush.vertex(380,350); brush.endShape(true);
  brush.fill("#0e0608", 235); brush.circle(420,178,22,1.2);
  brush.beginShape(0.3); brush.vertex(385,355); brush.vertex(415,355); brush.vertex(412,425); brush.vertex(382,425); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(428,355); brush.vertex(458,355); brush.vertex(464,425); brush.vertex(434,425); brush.endShape(true);
  // the cream highlight: scarf left as warm cream
  brush.fill("#f6e8c4", 235); brush.circle(418,205,9,1); brush.circle(432,208,8,1);
  brush.fill("#0a0406", 215); for (const x of [30,200,380,560]) { brush.beginShape(0.6); brush.vertex(x-40,440); brush.vertex(x+40,440); brush.vertex(x+30,520); brush.vertex(x-30,520); brush.endShape(true); }
  brush.fill("#fff4d8", 130); brush.circle(60,285,26,1.2);
  brush.fill("#f6e8c4", 210); brush.circle(60,285,12,1); brush.circle(560,262,12,1);
  brush.fill("#a8102c", 200); brush.beginShape(0.4); brush.vertex(410,260); brush.vertex(440,260); brush.vertex(470,355); brush.vertex(410,360); brush.endShape(true);
  brush.fill("#2a2026", 130); brush.beginShape(0.9); brush.vertex(500,-60); brush.vertex(660,-60); brush.vertex(660,260); brush.vertex(520,200); brush.endShape(true);
}
