async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe3cb");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#c8a060", 185);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,440); brush.vertex(-40,440); brush.endShape(true);
  brush.fill("#a9694a", 170);
  brush.beginShape(0.5); brush.vertex(-40,220); brush.vertex(640,190); brush.vertex(640,440); brush.vertex(-40,450); brush.endShape(true);
  brush.fill("#e8c880", 160);
  brush.beginShape(0.5); brush.vertex(-40,60); brush.vertex(400,40); brush.vertex(420,200); brush.vertex(-40,210); brush.endShape(true);
  brush.fill("#f4e0a8", 190); brush.circle(150, 300, 90, 0.6);
  brush.fill("#6a7a40", 185); brush.fillBleed(0.25);
  brush.beginShape(0.7); brush.vertex(-40,405); brush.vertex(300,390); brush.vertex(640,410); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#4a4a28", 205);
  brush.beginShape(0.7); brush.vertex(-40,490); brush.vertex(300,465); brush.vertex(640,495); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#8a7a3a", 170);
  brush.beginShape(0.5); brush.vertex(20,540); brush.vertex(300,505); brush.vertex(340,550); brush.vertex(60,590); brush.endShape(true);
  brush.fill("#3a3a1e", 170);
  for (const x of [440, 490, 540, 580]) { brush.beginShape(0.3); brush.vertex(x,400); brush.vertex(x+20,400); brush.vertex(x+26,470); brush.vertex(x-4,470); brush.endShape(true); }
  brush.fill("#2a1f16", 240); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(345,250); brush.vertex(390,250); brush.vertex(402,385); brush.vertex(335,385); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(340,375); brush.vertex(367,375); brush.vertex(360,480); brush.vertex(332,480); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(370,375); brush.vertex(398,375); brush.vertex(410,478); brush.vertex(380,478); brush.endShape(true);
  brush.circle(368, 230, 16, 0.3);
  brush.beginShape(0.5); brush.vertex(330,205); brush.vertex(408,210); brush.vertex(396,226); brush.vertex(342,226); brush.endShape(true);
  brush.fill("#3a2c20", 225);
  brush.beginShape(0.2); brush.vertex(408,175); brush.vertex(425,175); brush.vertex(448,485); brush.vertex(431,485); brush.endShape(true);
  brush.fill("#7a7a76", 225);
  brush.beginShape(0.6); brush.vertex(412,175); brush.vertex(310,128); brush.vertex(235,160); brush.vertex(315,162); brush.vertex(414,205); brush.endShape(true);
  brush.fill("#2a1f16", 180);
  brush.beginShape(0.6); brush.vertex(300,480); brush.vertex(520,470); brush.vertex(540,500); brush.vertex(310,510); brush.endShape(true);
  brush.fill("#5a5a58", 235);
  brush.beginShape(0.6); brush.vertex(414,178); brush.vertex(320,140); brush.vertex(260,170); brush.vertex(322,166); brush.vertex(416,196); brush.endShape(true);
}
