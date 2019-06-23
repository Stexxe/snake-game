import {TILE_SIZE} from './defaults';

export default class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.head = [0, 0];
    this.tail = [];
  }

  move() {
    const directionToFn = {
      left: ([x, y]) => [x - 1, y],
      right: ([x, y]) => [x + 1, y],
      up: ([x, y]) => [x, y - 1],
      down: ([x, y]) => [x, y + 1],
    };

    if (directionToFn[this.direction]) {
      const prevPosition = [this.head, ...this.tail];
      this.head = directionToFn[this.direction](this.head);
      this.tail = prevPosition.slice(0, prevPosition.length - 1)
    }
  }

  eat(food) {
    console.log(food);
  }

  render() {
    this.renderBlock(this.head);

    this.ctx.save();
    this.ctx.fillStyle = 'green';
    this.tail.forEach(this.renderBlock.bind(this));
    this.ctx.restore();
  }

  renderBlock([x, y]) {
    this.ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  get position() {
    return this.head;
  }

  set position([head, ...tail]) {
    this.head = head;
    this.tail = tail;
  }

  get direction() {
    return this.dir;
  }

  set direction(dir) {
    if (!this.isCounterDirection(dir)) {
      this.dir = dir;
    }
  }

  isCounterDirection(direction) {
    return {
      left: 'right',
      right: 'left',
      up: 'down',
      down: 'up',
    }[direction] === this.direction;
  }
}