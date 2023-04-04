var canvas = document.getElementById('myCanv');
var ctx = canvas.getContext('2d');
var img=new Image();
img.src="./HNY.jpg"

img.onload=function(){
    ctx.drawImage(img, 0,0,500,500)
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur=5;
    ctx.shadowColor = "gray";
    ctx.font = "70px Calibri ";
    ctx.fillStyle = "white";
    ctx.fillText("Happy",300, 150);
    ctx.fillText("New " ,300, 200);
    ctx.fillText("Year" ,300, 250);
}