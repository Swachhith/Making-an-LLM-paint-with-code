async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e8d4");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  const wash = (c, o, pts, k) => {
    brush.fill(c, o);
    brush.beginShape(k || 0.5);
    pts.forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  };
  wash("#1c0e22", 230, [[225,100],[660,80],[660,660],[225,660]], 0.4);
  wash("#0e0612", 225, [[290,190],[660,180],[660,660],[290,660]], 0.4);
  wash("#4a2a3a", 190, [[230,120],[300,120],[290,500],[230,500]], 0.4);
  for (let i = 0; i < 7; i++) {
    wash(i % 2 ? "#f0c020" : "#d0101a", 225, [[220+i*60,40],[285+i*60,40],[292+i*60,140],[228+i*60,148]], 0.3);
    wash(i % 2 ? "#c89010" : "#8a0a10", 160, [[225+i*60,100],[290+i*60,100],[292+i*60,144],[228+i*60,148]], 0.3);
  }
  wash("#2a0e08", 235, [[225,430],[660,425],[660,660],[225,660]], 0.35);
  wash("#8a4a14", 220, [[235,435],[660,432],[660,500],[235,505]], 0.35);
  const fruit = ["#e84a10","#d8b010","#c81a28","#78a020"];
  for (let i = 0; i < 8; i++) {
    brush.fill(fruit[i % 4], 225);
    brush.circle(270 + i * 40, 418 + (i % 2) * 6, 17, 0.8);
  }
  // seller
  wash("#0e5a8a", 230, [[470,430],[482,268],[548,268],[560,430]], 0.45);
  wash("#08304a", 200, [[515,270],[548,270],[560,430],[520,430]], 0.45);
  wash("#e0a070", 230, [[500,285],[505,262],[530,262],[535,285]], 0.3);
  brush.fill("#e0a070", 230);
  brush.circle(517, 245, 25, 0.6);
  brush.fill("#0a0408", 240);
  brush.circle(517, 230, 22, 0.8);
  wash("#5a4860", 170, [[-20,555],[220,545],[230,600],[-20,610]], 0.6);
}
