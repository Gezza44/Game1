
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

var enemies1 = [];
var enemies2 = [];
var enemies3 = [];
var enemies4 = [];
var enemies5 = [];
var enemies6 = [];
var enemies7 = [];
var enemies8 = [];
var enemies9 = [];
var enemies10 = [];



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



  ctx.font = "30px Arial";
  ctx.textAlign = "right";


window.setInterval(function(){  
 
  ctx.enemies1.push ({x:0, y:Math.random()*canvas.height});
  ctx.enemies2.push ({x:x+speed2, y:y});
  ctx.enemies3.push ({x:x+speed3, y:y});
  ctx.enemies4.push ({x:x+speed4, y:y});
  ctx.enemies5.push ({x:x+speed5, y:y});
  ctx.enemies6.push ({x:x+speed6, y:y});
  ctx.enemies7.push ({x:x+speed7, y:y});
  ctx.enemies8.push ({x:x+speed8, y:y});
  ctx.enemies9.push ({x:x+speed9, y:y});
  ctx.enemies10.push ({x:x+speed10, y:y});

//what does ctx mean
  //do I need .push
  // ?
 
  

  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(mousePos.x-10,mousePos.y-10,20,20);
  ctx.fillStyle = "black";
  ctx.fillText(Math.round(timer), canvas.width - 10, 30 );
  timer += 1/60;
  
  
  ctx.fillStyle = "green";
 
  ctx.fillRect(enemies1.x,enemies1.y,20,20);
  ctx.fillRect(enemies2.x,enemies2.y,20,20);
  ctx.fillRect(enemies3.x,enemies3.y,20,20);
  ctx.fillRect(enemies4.x,enemies4.y,20,20);
  ctx.fillRect(enemies5.x,enemies5.y,20,20);
  ctx.fillRect(enemies6.x,enemies6.y,20,20);
  ctx.fillRect(enemies7.x,enemies7.y,20,20);
  ctx.fillRect(enemies8.x,enemies8.y,20,20);
  ctx.fillRect(enemies9.x,enemies9.y,20,20);
  ctx.fillRect(enemies10.x,enemies10.y,20,20);

 
}, 1000/60);
  

canvas.addEventListener('mousemove', function(evt) {
  var rect = canvas.getBoundingClientRect(); 
  mousePos = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}, false); 
// what does this mean ^






