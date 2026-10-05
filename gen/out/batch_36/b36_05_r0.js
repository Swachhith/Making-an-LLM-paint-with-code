async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3ece0");
  brush.noStroke();
  // teal backdrop wash
  brush.fill("#127a80", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,0],[600,0],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0a4a55", 180); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  [[0,300],[600,260],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // kites in the air, diamonds with tails
  const kites = [[110,110,"#ff7a1a"],[260,70,"#f9c74f"],[430,120,"#e63946"],[520,40,"#ff9f43"],[360,200,"#fff1d6"]];
  for (const k of kites) {
    brush.fill(k[2], 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    [[k[0],k[1]-45],[k[0]+32,k[1]],[k[0],k[1]+55],[k[0]-32,k[1]]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
    brush.fill("#0a3038", 140);
    brush.beginShape(0.1);
    [[k[0],k[1]-45],[k[0]+32,k[1]],[k[0],k[1]+55]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
    brush.fill(k[2], 200);
    for (let t = 1; t < 4; t++) brush.circle(k[0] + sin(t * 70) * 14, k[1] + 55 + t * 22, 7, 0.4);
  }
  // body, big
  brush.fill("#b7410e", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[130,600],[150,470],[220,420],[380,420],[450,470],[470,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#f08a24", 190); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  [[190,600],[200,490],[250,450],[350,450],[400,490],[410,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // arm holding bundle of kites
  brush.fill("#d89a6a", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  [[430,480],[470,420],[500,340],[525,350],[505,440],[470,520]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // neck, head, hat
  brush.beginShape(0.6);
  [[275,430],[280,375],[325,375],[330,430]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.circle(303, 335, 44, 0.25);
  brush.fill("#f9c74f", 235); brush.fillBleed(0.2);
  brush.beginShape(0.5);
  [[245,315],[262,270],[345,270],[362,315],[390,325],[220,325]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // dark hair and face shadow
  brush.fill("#2a1810", 200);
  brush.circle(285, 345, 8, 0.2); brush.circle(322, 345, 8, 0.2);
}
