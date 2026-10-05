async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#170f20");
  brush.noStroke();
  // night sky warm: rust at top to amber glow near horizon
  brush.fill("#9a3a14", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,60); brush.vertex(600,40); brush.vertex(600,440); brush.vertex(0,440); brush.endShape(true);
  brush.fill("#e0802a", 215); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,250); brush.vertex(600,260); brush.vertex(600,450); brush.vertex(0,450); brush.endShape(true);
  brush.fill("#f4c050", 205);
  brush.beginShape(0.5); brush.vertex(60,350); brush.vertex(540,345); brush.vertex(560,455); brush.vertex(40,455); brush.endShape(true);
  // dark top
  brush.fill("#150c20", 200); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,130); brush.vertex(300,110); brush.vertex(0,150); brush.endShape(true);
  // hill
  brush.fill("#0a060f", 250); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,530); brush.vertex(120,490); brush.vertex(230,440); brush.vertex(380,440); brush.vertex(490,480); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // castle: curtain wall, towers, battlements
  brush.fill("#0a060f", 250);
  brush.beginShape(0.1); brush.vertex(200,460); brush.vertex(200,385); brush.vertex(400,385); brush.vertex(400,460); brush.endShape(true);
  for (const [x0,x1,top] of [[180,235,310],[255,295,350],[305,345,335],[360,420,285]]) {
    brush.beginShape(0.1); brush.vertex(x0,470); brush.vertex(x0,top); brush.vertex(x1,top); brush.vertex(x1,470); brush.endShape(true);
    brush.beginShape(0.1); brush.vertex(x0-8,top+4); brush.vertex((x0+x1)/2,top-48); brush.vertex(x1+8,top+4); brush.endShape(true);
  }
  for (let x = 205; x < 395; x += 28) { brush.beginShape(0.1); brush.vertex(x,392); brush.vertex(x,368); brush.vertex(x+16,368); brush.vertex(x+16,392); brush.endShape(true); }
  brush.fill("#ffd070", 255); for (const [x,y] of [[207,350],[385,330],[280,420],[325,415],[390,400]]) brush.circle(x,y,5,0.2);
  brush.fill("#f8d890", 235);
  for (let i = 0; i < 34; i++) brush.circle((i*131+20)%600, 12 + (i*47)%210, 1.6 + (i%4)*0.4, 0.3);
  // r2: re-state castle opaque and sharp against the glow
  brush.fill("#07040c", 255);
  brush.beginShape(0.1); brush.vertex(195,475); brush.vertex(195,380); brush.vertex(405,380); brush.vertex(405,475); brush.endShape(true);
  for (const [x0,x1,top] of [[175,238,305],[252,298,348],[304,348,332],[358,424,280]]) {
    brush.beginShape(0.1); brush.vertex(x0,478); brush.vertex(x0,top); brush.vertex(x1,top); brush.vertex(x1,478); brush.endShape(true);
    brush.beginShape(0.1); brush.vertex(x0-10,top+4); brush.vertex((x0+x1)/2,top-55); brush.vertex(x1+10,top+4); brush.endShape(true);
  }
  brush.beginShape(0.5); brush.vertex(0,540); brush.vertex(160,490); brush.vertex(300,470); brush.vertex(450,490); brush.vertex(600,530); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#ffe090", 255); for (const [x,y] of [[205,350],[390,325],[275,420],[330,415],[375,400],[400,350]]) brush.circle(x,y,5.5,0.2);
  brush.fill("#fff0c0", 255); brush.circle(480,90,3,0.2); brush.circle(90,110,3,0.2);
}
