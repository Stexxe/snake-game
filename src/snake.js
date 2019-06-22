import {TILE_SIZE} from './defaults';

export default class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.head = [0, 0];
    this.tail = [];
  }

  move() {
    const directionToFn = {
      left: (x, y) => [x - 1, y],
      right: (x, y) => [x + 1, y],
      up: (x, y) => [x, y - 1],
      down: (x, y) => [x, y + 1],
    };

    if (directionToFn[this.direction]) {
      this.head = directionToFn[this.direction](...this.head);
    }
  }

  eat(food) {
    console.log(food);
  }

  render() {
    const [x, y] = this.head;
    this.ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  get position() {
    return this.head;
  }

  set position(pos) {
    this.head = pos;
  }

  get direction() {
    return this.dir;
  }

  set direction(dir) {
    this.dir = dir;
  }
}