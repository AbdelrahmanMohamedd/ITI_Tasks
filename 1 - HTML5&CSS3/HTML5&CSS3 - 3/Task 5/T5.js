canvas=document.getElementById("myCanv");
var ctx=canvas.getContext("2d");

ctx.fillStyle = "rgba(50,100,255,0.5)";
ctx.translate(300,300);
var cntr=0;
var rotate=60;

interval=setInterval(function(){
if(cntr==600){
    ctx.fillStyle="white";
    ctx.fillRect(10, 10, 150, 50);
    rotate*=-1;  
}
if(cntr<0){
    rotate*=-1;
    ctx.fillStyle = "rgba(50,100,255,0.5)";
}
ctx.rotate(rotate * Math.PI / 360);
ctx.fillRect(10, 10, 150, 50);
    cntr += rotate;
},100)