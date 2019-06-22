import {TILE_SIZE} from './defaults';

export default class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  move() {
    const directionToFn = {
      left: () => {this.x -= 1},
      right: () => {this.x += 1},
      up: () => {this.y -= 1},
      down: () => {this.y += 1},
    };

    if (directionToFn[this.direction]) {
      directionToFn[this.direction]();
    }
  }

  eat(food) {
    console.log(food);
  }

  render() {
    this.ctx.fillRect(this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  get position() {
    return [this.x, this.y];
  }

  set position([x, y]) {
    this.x = x;
    this.y = y;
  }

  get direction() {
    return this.dir;
  }

  set direction(dir) {
    this.dir = dir;
  }
}