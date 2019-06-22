export default class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  move() {
    const directionToFn = {
      left: () => {this.x -= 32},
      right: () => {this.x += 32},
      up: () => {this.y -= 32},
      down: () => {this.y += 32},
    };

    if (directionToFn[this.direction]) {
      directionToFn[this.direction]();
    }
  }

  render() {
    this.ctx.fillRect(this.x, this.y, 32, 32);
  }

  get direction() {
    return this.dir;
  }

  set direction(dir) {
    this.dir = dir;
  }
}