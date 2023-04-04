var canvas = document.getElementById('myCanv');
var ctx = canvas.getContext('2d');

var grd1=ctx.createRadialGradient(150,150,90,150,150,100);
grd1.addColorStop(0.7, "blue");
grd1.addColorStop(0.6, "darkblue");
ctx.fillStyle=grd1;
ctx.arc(150, 150, 120, 0, 2*Math.PI)
ctx.fill()
ctx.font = "110px calibri";
ctx.fillStyle="white";
ctx.fillText("A", 120, 180);
