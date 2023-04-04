canvas=document.getElementById("myCanv");
var ctx=canvas.getContext("2d")
var x=10;
var y=10;
ctx.strokeStyle="brown"
ctx.lineCap="round"
ctx.lineWidth=5;
ctx.beginPath();
interval=setInterval(function(){
    ctx.lineTo(x, y);
    x++; y++;
    ctx.stroke()
        if(x==500){
            clearInterval(interval);
            alert("Animation end")
        }
    }, 10)