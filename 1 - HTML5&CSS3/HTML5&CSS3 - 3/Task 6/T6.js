flag=true;
var counter=0;
canvas=document.getElementById("myCanv");
var ctx=canvas.getContext("2d");
ctx.beginPath()
ctx.fillStyle="yellow";
ctx.arc(200, 200, 100, 0, Math.PI,true);
ctx.fill();
ctx.strokeStyle="black";
ctx.lineWidth=1;    
ctx.stroke();
ctx.closePath();
ctx.beginPath()
ctx.fillStyle="yellow";
ctx.arc(200, 200, 100, 0, Math.PI,false);
ctx.fill();
ctx.strokeStyle="black";
ctx.lineWidth=1;    
ctx.stroke();
ctx.closePath();


interval=setInterval(function(){
    if(flag==true){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath()
    ctx.fillStyle="yellow";
    ctx.arc(200, 200, 100, 0, Math.PI,true);
    ctx.fill();
    ctx.strokeStyle="black";
    ctx.lineWidth=1;    
    ctx.stroke();
    ctx.closePath();
        flag=false;
    }
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.fillStyle="yellow";
        ctx.arc(200, 200, 100, 0, Math.PI,false);
        ctx.fill();
        ctx.strokeStyle="black";
        ctx.lineWidth=1;    
        ctx.stroke();
        ctx.closePath();
        flag=true;
    }
    counter++
    if(counter==10){
        ctx.beginPath()
        ctx.fillStyle="yellow";
        ctx.arc(200, 200, 100, 0, Math.PI,true);
        ctx.fill();
        ctx.strokeStyle="black";
        ctx.lineWidth=1;    
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath()
        ctx.fillStyle="yellow";
        ctx.arc(200, 200, 100, 0, Math.PI,false);
        ctx.fill();
        ctx.strokeStyle="black";
        ctx.lineWidth=1;    
        ctx.stroke();
        ctx.closePath();
        clearInterval(interval)
    }
},500)