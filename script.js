var text= document.getElementById("text");

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var mousePos = {x:360, y:-240};

var timer = 0;




var enemies = [];
 {

  enemies.push({x:0, y:Math.random()*canvas.height});

}







// var button = {x:20, y:30, w:80, h:40}; see line 26

ctx.font = "30px Arial";

ctx.textAlign = "right";




window.setInterval(function(){  

  {

  enemies[].x += math.random()*4;

}

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";

  ctx.fillRect(mousePos.x-10,mousePos.y-10,20,20);

  // ctx.fillRect(button.x,button.y, button.w, button.h);

  ctx.fillStyle = "black";

  ctx.fillText(Math.round(timer), canvas.width - 10, 30 );

  timer += 1/60;

  

  

  ctx.fillStyle = "green";

{

    ctx.fillRect(enemies[].x,enemies[].y,20,20);

  }

}, 1000/60);

  




canvas.addEventListener('mousemove', function(evt) {

  var rect = canvas.getBoundingClientRect(); 

  mousePos = {

    x: evt.clientX - rect.left,

    y: evt.clientY - rect.top

  };

}, false )
