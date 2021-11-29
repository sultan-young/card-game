// 主要做绘制操作

export default class Render {
    public scope: any;
    public ctx: any;
    constructor(scope:any, ctx: any) {
        this.scope = scope;
        this.ctx = ctx;
        window.requestAnimationFrame(this.main.bind(this));
    }
    main() {
        this.ctx.clearRect(0,0,800,400)
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.arc(200, 200 ,50,0,Math.PI*2)
        this.ctx.closePath();
        this.ctx.fill()
        // this.draw(monster.offsetX, monster.offsetY, monster.color);
        // this.ctx.fill()
        // if(this.ctx.isPointInPath(mouseX,mouseY)) {
        //     monster.color = 'green'
        // } else {
        //     monster.color = '#000'
        // }
        // //这里使用`Math.min()`确保元素刚好停在200px的位置。
    
        window.requestAnimationFrame(this.main.bind(this));
    }
    draw (x: number, y: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x,y,50,0,Math.PI*2)
        this.ctx.closePath();
      }
}