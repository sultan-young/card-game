// let mouseX;
// let mouseY;
// cvs.addEventListener('mousemove', (e)=> {
//     mouseX = e.offsetX;
//     mouseY = e.offsetY;
// })
// cvs.addEventListener('mousedown', (e)=> {
//     let isCanMove = true;
//     let startX = e.offsetX;
//     let startY = e.offsetY;
//     let distanceX = 0;
//     let distanceY = 0;
//     cvs.addEventListener('mousemove', (e)=> {
//         if(!isCanMove) return;
        
//         monster.offsetX = monster.offsetX + (e.offsetX - startX);
//         monster.offsetY = monster.offsetY + (e.offsetY - startY);
//         startX = e.offsetX;
//         startY = e.offsetY;
//     })
//     cvs.addEventListener('mouseup', (e)=> {
//         isCanMove = false;
//         distanceX = 0;
//         startX = 0;
//         startY = 0;
//     })
// })
class Event {
    public mouseX: number | null;
    public mouseY: number | null;
    constructor() {
        this.mouseX = null;
        this.mouseY = null;
    }
    init() {
        
    }
}

export default Event;