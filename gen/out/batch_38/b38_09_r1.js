async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b0e16");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#2e3568", 205);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,400); brush.vertex(-40,400); brush.endShape(true);
  brush.fill("#9a3a6a", 195);
  brush.beginShape(0.5); brush.vertex(-40,240); brush.vertex(640,220); brush.vertex(640,420); brush.vertex(-40,420); brush.endShape(true);
  brush.fill("#e87a2f", 205);
  brush.beginShape(0.5); brush.vertex(-40,330); brush.vertex(640,320); brush.vertex(640,420); brush.vertex(-40,420); brush.endShape(true);
  brush.fill("#f4b860", 190);
  brush.beginShape(0.5); brush.vertex(60,370); brush.vertex(300,360); brush.vertex(320,420); brush.vertex(60,425); brush.endShape(true);
  // sea
  brush.fill("#1a3a70", 205);
  brush.beginShape(0.5); brush.vertex(-40,405); brush.vertex(640,405); brush.vertex(640,490); brush.vertex(-40,495); brush.endShape(true);
  brush.fill("#e8904a", 150);
  brush.beginShape(0.5); brush.vertex(80,420); brush.vertex(300,425); brush.vertex(280,480); brush.vertex(100,480); brush.endShape(true);
  brush.fill("#f4e8d0", 150);
  brush.beginShape(0.5); brush.vertex(-40,470); brush.vertex(640,462); brush.vertex(640,490); brush.vertex(-40,495); brush.endShape(true);
  brush.fill("#5a4a50", 205);
  brush.beginShape(0.8); brush.vertex(-40,490); brush.vertex(640,470); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#9a6a5a", 175);
  brush.beginShape(0.8); brush.vertex(-40,545); brush.vertex(640,525); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#e0a060", 120);
  brush.beginShape(0.5); brush.vertex(60,520); brush.vertex(300,510); brush.vertex(330,560); brush.vertex(80,575); brush.endShape(true);
  // surfer
  brush.fill("#050609", 245); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(380,340); brush.vertex(422,340); brush.vertex(428,440); brush.vertex(376,440); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(380,432); brush.vertex(402,432); brush.vertex(400,525); brush.vertex(380,525); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(406,432); brush.vertex(428,432); brush.vertex(432,525); brush.vertex(410,525); brush.endShape(true);
  brush.circle(400, 320, 15, 0.3);
  brush.beginShape(0.3); brush.vertex(372,345); brush.vertex(392,345); brush.vertex(410,430); brush.vertex(395,432); brush.endShape(true);
  brush.fill("#e0c898", 235);
  brush.beginShape(0.5); brush.vertex(432,290); brush.vertex(458,280); brush.vertex(478,505); brush.vertex(446,512); brush.endShape(true);
  brush.fill("#c0502a", 200);
  brush.beginShape(0.5); brush.vertex(442,360); brush.vertex(452,358); brush.vertex(460,440); brush.vertex(450,442); brush.endShape(true);
  brush.fill("#ffd27a", 235);
  brush.circle(80, 140, 3.5, 0.2); brush.circle(500, 90, 3, 0.2); brush.circle(250, 60, 2.5, 0.2); brush.circle(540, 190, 2.5, 0.2); brush.circle(160, 40, 2, 0.2); brush.circle(60, 450, 4, 0.2);
  brush.fill("#e0a050", 190);
  brush.circle(500, 440, 5, 0.2); brush.circle(530, 445, 4, 0.2);
}
