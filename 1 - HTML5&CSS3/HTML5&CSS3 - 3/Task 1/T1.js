var canvas = document.getElementById('Canv');
var ctx = canvas.getContext('2d');

var grad2 = ctx.createLinearGradient(250, 250, 250, 0);
        grad2.addColorStop(0.7, "blue")
        grad2.addColorStop(0.1, "white")
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, 400, 500);

        
var grad1 = ctx.createLinearGradient(500, 500, 500, 0);
        grad1.addColorStop(0.3, "green")
        grad1.addColorStop(0.1, "white")
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 250, 400, 250);


ctx.beginPath()
ctx.moveTo(290,250)
ctx.lineTo(290,150)
ctx.lineTo(100,150)
ctx.lineTo(100,250)
ctx.lineWidth=5;
ctx.stroke()