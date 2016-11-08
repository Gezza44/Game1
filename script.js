
var text= document.getElementById("text");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mousePos = {x:360, y:-240};
var timer = 0;


var speed1 = Math.random()*4;
var speed2 = Math.random()*4;
var speed3 = Math.random()*4;
var speed4 = Math.random()*4;
var speed5 = Math.random()*4;
var speed6 = Math.random()*4;
var speed7 = Math.random()*4;
var speed8 = Math.random()*4;
var speed9 = Math.random()*4;
var speed10 = Math.random()*4;

var enemies = [];
for (var i=0; i<10; i++) {
  enemies1.push({x:0, y:Math.random()*canvas.height});
  enemies2.push({x:0, y:Math.random()*canvas.height});
  enemies3.push({x:0, y:Math.random()*canvas.height});
  enemies4.push({x:0, y:Math.random()*canvas.height});
  enemies5.push({x:0, y:Math.random()*canvas.height});
  enemies6.push({x:0, y:Math.random()*canvas.height});
  enemies7.push({x:0, y:Math.random()*canvas.height});
  enemies8.push({x:0, y:Math.random()*canvas.height});
  enemies9.push({x:0, y:Math.random()*canvas.height});
  enemies10.push({x:0, y:Math.random()*canvas.height});
}


  ctx.font = "30px Arial";
  ctx.textAlign = "right";


window.setInterval(function(){  
  for (var i=0; i<10; i++) {
  enemies1[i].x += speed1;
  enemies2[i].x += speed2;
  enemies3[i].x += speed3;
  enemies4[i].x += speed4;
  enemies5[i].x += speed5;
  enemies6[i].x += speed6;
  enemies7[i].x += speed7;
  enemies8[i].x += speed8;
  enemies9[i].x += speed9;
  enemies10[i].x += speed10;  
}
  });
 
  

  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(mousePos.x-10,mousePos.y-10,20,20);
  // ctx.fillRect(button.x,button.y, button.w, button.h);
  ctx.fillStyle = "black";
  ctx.fillText(Math.round(timer), canvas.width - 10, 30 );
  timer += 1/60;
  
  
  ctx.fillStyle = "green";
  for (var i=0; i<enemies.length; i++) {
    ctx.fillRect(enemies[i].x,enemies[i].y,20,20);
  }
, 1000/60);
  

canvas.addEventListener('mousemove', function(evt) {
  var rect = canvas.getBoundingClientRect(); 
  mousePos = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
, false) // "}" b4 "," bc chrome told me to

/* //Im not using a button, this is a button
canvas.addEventListener('click', function() {
  if (mousePos.x >= button.x && mousePos.x <= button.x + button.w) {
    if (mousePos.y >= button.y && mousePos.y <= button.y + button.h ) {
      console.log("Button CLicked");
    }
  }
} );
*/




