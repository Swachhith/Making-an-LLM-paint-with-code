async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e9cf");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // low-angle: lots of sky/forest above the cabin
  brush.fill("#d8b040", 170); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,280); brush.vertex(-60,300); brush.endShape(true);
  brush.fill("#8a6a18", 120); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,100); brush.vertex(-60,130); brush.endShape(true);
  // pines behind
  brush.fill("#0f4a30", 200); for (const [x,h] of [[40,200],[130,150],[500,190],[580,130]]) { brush.beginShape(0.2); brush.vertex(x-60,330); brush.vertex(x,330-h); brush.vertex(x+60,330); brush.endShape(true); }
  brush.fill("#0a2a1c", 190); for (const [x,h] of [[40,200],[500,190]]) { brush.beginShape(0.2); brush.vertex(x,330-h); brush.vertex(x+60,330); brush.vertex(x,330); brush.endShape(true); }
  brush.fill("#1a5a3c", 190); brush.beginShape(0.7); brush.vertex(-60,260); brush.vertex(200,230); brush.vertex(400,250); brush.vertex(660,230); brush.vertex(660,360); brush.vertex(-60,360); brush.endShape(true);
  // lake behind
  brush.fill("#2a7a58", 190); brush.beginShape(0.6); brush.vertex(-60,340); brush.vertex(660,340); brush.vertex(660,420); brush.vertex(-60,420); brush.endShape(true);
  brush.fill("#f0c850", 170); brush.beginShape(0.6); brush.vertex(60,345); brush.vertex(240,345); brush.vertex(220,410); brush.vertex(80,410); brush.endShape(true);
  // cabin walls — logs
  brush.fill("#a06a30", 225); brush.beginShape(0.1); brush.vertex(200,310); brush.vertex(470,310); brush.vertex(500,560); brush.vertex(170,560); brush.endShape(true);
  brush.fill("#6a4018", 190); for (let y=335;y<550;y+=36){ brush.beginShape(0.1); brush.vertex(190,y); brush.vertex(480,y); brush.vertex(485,y+14); brush.vertex(185,y+14); brush.endShape(true);}
  // roof
  brush.fill("#2a5a38", 235); brush.beginShape(0.1); brush.vertex(140,320); brush.vertex(335,170); brush.vertex(530,320); brush.endShape(true);
  brush.fill("#143a24", 215); brush.beginShape(0.1); brush.vertex(335,170); brush.vertex(530,320); brush.vertex(335,320); brush.endShape(true);
  // chimney
  brush.fill("#6a3a28", 220); brush.beginShape(0.1); brush.vertex(410,185); brush.vertex(445,185); brush.vertex(445,265); brush.vertex(410,265); brush.endShape(true);
  // windows and door
  brush.fill("#ffd060", 230); brush.beginShape(0.2); brush.vertex(240,390); brush.vertex(310,390); brush.vertex(310,470); brush.vertex(240,470); brush.endShape(true);
  brush.fill("#3a2410", 230); brush.beginShape(0.1); brush.vertex(272,390); brush.vertex(282,390); brush.vertex(282,470); brush.vertex(272,470); brush.endShape(true);
  brush.fill("#3a2410", 230); brush.beginShape(0.2); brush.vertex(375,420); brush.vertex(435,420); brush.vertex(440,560); brush.vertex(375,560); brush.endShape(true);
  // foreground bank — dark green, tall grasses
  brush.fill("#0c3a20", 215); brush.beginShape(0.8); brush.vertex(-60,540); brush.vertex(300,530); brush.vertex(660,545); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#062a14", 190); brush.beginShape(0.8); brush.vertex(-60,590); brush.vertex(660,580); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#1a6a38", 190); for (const x of [30,90,540,590]) { brush.beginShape(0.5); brush.vertex(x,600); brush.vertex(x+10,480); brush.vertex(x+28,600); brush.endShape(true); }
  brush.fill("#ffb030", 130); brush.circle(275,430,70,1.3);
  brush.fill("#ffd868", 235); brush.beginShape(0.2); brush.vertex(245,395); brush.vertex(305,395); brush.vertex(305,465); brush.vertex(245,465); brush.endShape(true);
  brush.fill("#0a2a18", 200); brush.beginShape(0.1); brush.vertex(335,190); brush.vertex(530,320); brush.vertex(420,320); brush.endShape(true);
  brush.fill("#7a4a1c", 210); brush.beginShape(0.1); brush.vertex(200,310); brush.vertex(240,310); brush.vertex(215,560); brush.vertex(170,560); brush.endShape(true);
  brush.fill("#f4c040", 150); brush.beginShape(0.6); brush.vertex(300,350); brush.vertex(420,350); brush.vertex(400,410); brush.vertex(320,410); brush.endShape(true);
}
