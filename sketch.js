var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  red= createButton("RED");
  red.position(100,50);
  red.mousePressed(red_bg);

  green=createButton("GREEN");
  green.position(250,50);
  green.mousePressed(green_bg)
}

function draw() {


}

function red_bg(){
  background(r,g,b);
  r=255;
  g=0;
  b=0;
}
function green_bg()
{r=0;
  g=255;
  b=0;
}