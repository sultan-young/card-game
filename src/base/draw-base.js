// 封装绘制的图形
function draw (x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI*2)
    ctx.closePath();
  }