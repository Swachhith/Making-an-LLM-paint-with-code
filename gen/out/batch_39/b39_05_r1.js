async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2efe6");
  brush.noStroke();
  brush.fill("#9ad4b8", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // back layer of canopy: lighter
  const back = ["#78c4a0", "#a0d484", "#6cb8b4"];
  for (let i = 0; i < 18; i++) {
    brush.fill(back[i%3], 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(30 + (i*149)%560, 40 + (i*71)%300, 70 + (i*29)%50, 0.8);
  }
  // trunks and vines in dusty pink/mauve
  const tr = [[110,0.9],[300,1.2],[480,0.8]];
  for (const [x,w] of tr) {
    brush.fill("#b27a8a", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5); brush.vertex(x-26*w,600); brush.vertex(x-14*w,300); brush.vertex(x-8*w,0); brush.vertex(x+10*w,0); brush.vertex(x+16*w,300); brush.vertex(x+28*w,600); brush.endShape(true);
  }
  // front canopy: darker pastel greens
  const fr = ["#4fa882", "#6ebc6a", "#3f9aa0", "#8cc84e"];
  for (let i = 0; i < 20; i++) {
    brush.fill(fr[i%4], 195); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(((i*197)%640) - 20, 20 + (i*83)%260, 55 + (i*31)%45, 0.9);
  }
  // fern fronds at bottom
  for (let i = 0; i < 8; i++) {
    brush.fill(i%2 ? "#3a8a6a" : "#5ab07a", 215); brush.fillBleed(0.25);
    const x = 40 + i*75, h = 90 + (i*37)%60;
    brush.beginShape(0.6); brush.vertex(x-30,600); brush.vertex(x-10,600-h); brush.vertex(x+40,600-h*0.6); brush.vertex(x+30,600); brush.endShape(true);
  }
  // blossoms
  for (let i = 0; i < 12; i++) { brush.fill(["#f08a9a","#f8c060","#8ac0e8"][i%3], 225); brush.fillBleed(0.3); brush.circle(50 + (i*211)%520, 330 + (i*61)%190, 16 + (i%3)*6, 0.6); }
}
