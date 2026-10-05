async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a0824");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  brush.fill("#2a1a8a", 210); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,440); brush.vertex(-60,440); brush.endShape(true);
  brush.fill("#4a24b0", 190); brush.beginShape(0.9); brush.vertex(-60,180); brush.vertex(660,140); brush.vertex(660,440); brush.vertex(-60,440); brush.endShape(true);
  brush.fill("#8a4ad0", 170); brush.beginShape(0.9); brush.vertex(-60,290); brush.vertex(660,270); brush.vertex(660,440); brush.vertex(-60,440); brush.endShape(true);
  brush.fill("#1a1060", 180); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(400,-60); brush.vertex(300,110); brush.vertex(-60,150); brush.endShape(true);
  // moon with halo
  brush.fill("#a070e0", 140); brush.circle(480,100,70,1.3);
  brush.fill("#f6f0d8", 235); brush.circle(480,100,30,1);
  for (const [x,y] of [[60,50],[150,120],[240,60],[330,30],[400,150],[570,40],[90,200],[290,140],[540,190]]) { brush.fill("#f6f0d8", 235); brush.circle(x,y,3,1); }
  // distant hills silhouette
  brush.fill("#120c40", 220); brush.beginShape(0.8); brush.vertex(-60,400); brush.vertex(100,350); brush.vertex(260,380); brush.vertex(420,340); brush.vertex(660,380); brush.vertex(660,480); brush.vertex(-60,480); brush.endShape(true);
  // river reflecting violet
  brush.fill("#1c1470", 220); brush.beginShape(0.6); brush.vertex(-60,470); brush.vertex(660,470); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#6a38b8", 170); brush.beginShape(0.6); brush.vertex(40,500); brush.vertex(560,500); brush.vertex(520,570); brush.vertex(80,570); brush.endShape(true);
  // bridge girder + piers
  brush.fill("#05031a", 245);
  brush.beginShape(0.1); brush.vertex(-60,345); brush.vertex(660,345); brush.vertex(660,382); brush.vertex(-60,382); brush.endShape(true);
  for (const x of [50,190,330,470,600]) { brush.beginShape(0.1); brush.vertex(x,380); brush.vertex(x+26,380); brush.vertex(x+26,500); brush.vertex(x,500); brush.endShape(true); }
  brush.fill("#05031a", 225); for (let x=-20;x<640;x+=70){ brush.beginShape(0.1); brush.vertex(x,300); brush.vertex(x+20,300); brush.vertex(x+55,346); brush.vertex(x+35,346); brush.endShape(true); }
  brush.beginShape(0.1); brush.vertex(-60,298); brush.vertex(660,298); brush.vertex(660,320); brush.vertex(-60,320); brush.endShape(true);
  // train
  brush.fill("#05031a", 245);
  brush.beginShape(0.2); brush.vertex(110,300); brush.vertex(520,300); brush.vertex(520,345); brush.vertex(110,345); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(440,275); brush.vertex(525,275); brush.vertex(525,345); brush.vertex(440,345); brush.endShape(true);
  for (let x=135;x<430;x+=42){ brush.fill("#ffd878", 235); brush.circle(x,320,6,1); }
  brush.fill("#ffe8a0", 240); brush.circle(516,312,8,1);
  brush.fill("#ffc050", 130); brush.beginShape(0.6); brush.vertex(510,330); brush.vertex(600,325); brush.vertex(600,345); brush.vertex(510,345); brush.endShape(true);
  brush.fill("#ffd878", 140); for (let x=135;x<430;x+=84){ brush.circle(x,525,6,1); }
}
