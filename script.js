/* global createCanvas, background, strokeWeight, strokeCap, ROUND, line  color, blendMode,  rotate, PI, translate, ellipse, rect,  noStroke ， fill */

function setup() {
  // Code here runs only once
  createCanvas(8000, 1000);
}

function draw() {
  // Code here runs continuously
  background(255);
  noStroke();

  
//blue
  fill(54,197,240);
  
  ellipse(115,65,50,50);
  rect(115,65,25,25);

  rect(50,105,60,50);
  ellipse(50,130,50,50);
  ellipse(115,130,50,50);
  
//green
  fill(46,182,125);

  ellipse(240,130,50,50);
  rect(215,130,25,25);

  rect(155,70,50,60);
  ellipse(180,130,50,50);
  ellipse(180,65,50,50);


//red
  fill(224,30,90);

  ellipse(50,195,50,50);
  rect(50,170,25,25);

  rect(90,195,50,60);
  ellipse(115,195,50,50);
  ellipse(115,255,50,50);


//yellow
  fill(236,178,46);
  
  ellipse(180,255,50,50);
  rect(155,230,25,25);

  rect(180,170,60,50);
  ellipse(180,195,50,50);
  ellipse(240,195,50,50);


/* second version */
  

  rotate(PI / -15.0);
  translate(-200, 110);

//blue
  fill(54,197,240,150);
  rect(580,90,150,50);
  ellipse(580,115,50,50);
  ellipse(730,115,50,50);
  


//green
  fill(46,182,125,190);

  rect(590,80,50,150);
  ellipse(615,80,50,50);
  ellipse(615,230,50,50);

//red
  fill(224,30,90,240);

  rect(580,165,150,50);
  ellipse(580,190,50,50);
  ellipse(730,190,50,50);

//yellow
  fill(236,178,46,240);

  rect(665,80,50,150);
  ellipse(690,80,50,50);
  ellipse(690,230,50,50);
  




}
