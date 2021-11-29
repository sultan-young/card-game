import './style/index.css';
import { createCanvas } from './layouts/canvas'
import game from './system'

// 初始化出一个game
// game生成一个

const canvas = createCanvas(800, 400);
canvas.id = 'cvs';
document.body.appendChild(canvas);
game.init(canvas);

