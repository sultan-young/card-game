import Animate from './animate-system'
import Render from './render-system'
import Sprite from './sprite-system'
import Time from './time-system'
import Event from './event-system'


interface ISystem {
    animateSystem: any,
    renderSystem: any,
    timeSystem: any,
    eventSystem: any,
};

class Game {
    public layout: HTMLCanvasElement | null;
    public animate: Object | null;
    public render: Object | null;
    public time: Object | null;
    public event: Object | null;

    constructor() {
        this.animate = null;
        this.render = null;
        this.time = null;
        this.event = null;
        this.layout = null;

    }

    init(layout: HTMLCanvasElement) {
        this.layout = layout;
        const ctx = this.layout.getContext('2d');
        this.animate = new Animate();
        this.render = new Render(this, ctx);
        this.time = new Time();
        this.event = new Event();
        // this.event.init()
        // const ctx = this.layout.getContext('2d');
        // let monster = new Sprite('monster', '怪兽一', '#000');
    }
}

const game = new Game();

export default game;