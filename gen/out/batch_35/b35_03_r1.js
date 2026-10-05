async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a2228");
  randomSeed(23);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // tall sky in bands of teal
  const b = [["#0e5a62",230,-60,0,500],["#1a8088",215,-60,60,430],["#2a9a98",200,40,150,360]];
  for (const s of b) { brush.fill(s[0], s[1]); brush.beginShape(0.5); brush.vertex(s[2],s[3]); brush.vertex(660-s[2]*0.5,s[3]+5); brush.vertex(640,s[4]); brush.vertex(-40,s[4]); brush.endShape(true); }
  // moon halo: layered orange, moon left as pale paper tint
  brush.fill("#e87a20", 190); brush.circle(300, 130, 105, 0.3);
  brush.fill("#f4a850", 200); brush.circle(300, 130, 78, 0.25);
  brush.fill("#fff2d0", 245); brush.fillBleed(0.1); brush.circle(300, 130, 58, 0.15);
  brush.fillBleed(0.25);
  // snowy field: pale teal-grey with warm lit patches
  brush.fill("#7ab8b4", 225);
  brush.beginShape(0.4); brush.vertex(-50,420); brush.vertex(200,395); brush.vertex(420,410); brush.vertex(650,390); brush.vertex(650,660); brush.vertex(-50,660); brush.endShape(true);
  brush.fill("#cde8e0", 215);
  brush.beginShape(0.5); brush.vertex(-50,500); brush.vertex(300,450); brush.vertex(650,490); brush.vertex(650,660); brush.vertex(-50,660); brush.endShape(true);
  brush.fill("#f0a860", 170);
  brush.beginShape(0.5); brush.vertex(265,420); brush.vertex(335,420); brush.vertex(380,600); brush.vertex(220,600); brush.endShape(true);
  // deep blue shadows
  brush.fill("#0a3a4a", 205);
  brush.beginShape(0.5); brush.vertex(-50,560); brush.vertex(150,520); brush.vertex(230,600); brush.vertex(-50,620); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(650,540); brush.vertex(480,530); brush.vertex(430,610); brush.vertex(650,620); brush.endShape(true);
  // black tree line
  for (let k = 0; k < 2; k++) for (let i = 0; i < 13; i++) { let x = -10 + i * 50 + random(-12,12); brush.fill("#04141a", 235); brush.beginShape(0.4); brush.vertex(x-8,415); brush.vertex(x+22,415); brush.vertex(x+7,350+random(-25,15)); brush.endShape(true); }
  brush.fill("#f89a28", 240); brush.circle(112, 408, 4, 0.3); brush.circle(498, 404, 3.5, 0.3);
}
