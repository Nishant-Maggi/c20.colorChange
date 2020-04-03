// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var r = 0;
var g = 50;
var b=255;

function setup(){

  createCanvas(1000,800);

}

function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,1000,0,255); 

  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,200,800,50,255); 

  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,0,1000,255,0); 

  // Use the map() function to do so. 
  

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  console.log(r,g,b);

  // Create an ellipse that will move around with you mouse about the X axis.
  fill (255);

  ellipse(mouseX,400,50,50);
  ellipse.x = mouseX;
  
  // Remember to fill the canvas with white paint before creating the ellipse.
  
  
}