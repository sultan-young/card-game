export default class Sprite {
    public id:number;
    public type:string;
    public name:string;
    public offsetX:number;
    public offsetY:number;
    public color:string;
    constructor(type:string, name:string, color:string) {
        this.id = Date.now();
        this.type = type;
        this.name = name;
        this.offsetX = 0;
        this.offsetY = 0;
        this.color = color;
    }
}