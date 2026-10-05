async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e4c6");
  brush.noStroke(); brush.fillBleed(0.28); brush.fillTexture(0.4,0.4);
  // golden haze
  brush.fill("#f0b020", 180); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#e07800", 150); brush.beginShape(0.9); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,120); brush.vertex(-60,170); brush.endShape(true);
  brush.fill("#fff0a0", 170); brush.circle(300,260,150,1.6);
  // deep forest floor shadow
  brush.fill("#24140a", 215); brush.beginShape(0.8); brush.vertex(-60,440); brush.vertex(660,420); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#0e0804", 190); brush.beginShape(0.8); brush.vertex(-60,500); brush.vertex(660,490); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  // dark trunks at the sides — high contrast
  brush.fill("#3a2210", 200); for (const x of [10,80,170,500,560]) { brush.beginShape(0.3); brush.vertex(x,-20); brush.vertex(x+26,-20); brush.vertex(x+30,460); brush.vertex(x-4,460); brush.endShape(true); }
  brush.fill("#120a04", 200); for (const x of [30,520]) { brush.beginShape(0.3); brush.vertex(x,-20); brush.vertex(x+14,-20); brush.vertex(x+18,460); brush.vertex(x,460); brush.endShape(true); }
  // side crowns
  brush.fill("#e89a10", 190); for (const [x,y,r] of [[40,60,70],[130,150,60],[540,80,70],[480,170,55]]) brush.circle(x,y,r,1.5);
  brush.fill("#b85a00", 170); brush.circle(60,110,40,1.5); brush.circle(520,120,40,1.5);
  // the small aspen, white trunk left as paper-ish
  brush.fill("#f8eecc", 235); brush.beginShape(0.3); brush.vertex(300,280); brush.vertex(325,280); brush.vertex(328,470); brush.vertex(298,470); brush.endShape(true);
  brush.fill("#2a1a0c", 215); for (const y of [320,360,400,440]) { brush.beginShape(0.3); brush.vertex(300,y); brush.vertex(322,y); brush.vertex(322,y+10); brush.vertex(300,y+10); brush.endShape(true); }
  brush.fill("#ffc820", 225); brush.circle(312,235,62,1.5); brush.circle(272,265,42,1.5); brush.circle(355,262,44,1.5);
  brush.fill("#d88000", 195); brush.circle(318,248,38,1.4); brush.circle(280,275,22,1.4);
  brush.fill("#fff070", 190); brush.circle(310,215,28,1.4);
  // fallen gold leaves on dark floor
  brush.fill("#f0b020", 210); for (const [x,y] of [[200,540],[260,560],[340,530],[420,565],[110,570],[480,540]]) brush.circle(x,y,12,1.3);
  brush.fill("#0a0502", 215); brush.beginShape(0.8); brush.vertex(-60,470); brush.vertex(660,460); brush.vertex(660,660); brush.vertex(-60,660); brush.endShape(true);
  brush.fill("#1a0e06", 215); for (const x of [-10,60,150,490,545]) { brush.beginShape(0.3); brush.vertex(x,-20); brush.vertex(x+20,-20); brush.vertex(x+22,470); brush.vertex(x,470); brush.endShape(true); }
  brush.fill("#fff6b8", 150); brush.circle(310,230,120,1.6);
  brush.fill("#ffd020", 215); brush.circle(310,235,50,1.4); brush.circle(275,262,34,1.4); brush.circle(350,258,36,1.4);
  brush.fill("#f8eecc", 235); brush.beginShape(0.3); brush.vertex(300,285); brush.vertex(325,285); brush.vertex(328,470); brush.vertex(298,470); brush.endShape(true);
  brush.fill("#2a1a0c", 215); for (const y of [320,370,420]) { brush.beginShape(0.3); brush.vertex(300,y); brush.vertex(322,y); brush.vertex(322,y+10); brush.vertex(300,y+10); brush.endShape(true); }
}
