import {TILE_SIZE} from './defaults';
import Cell from './cell';

export default class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.head = [0, 0];
    this.tail = [];
    this.growed = [];
  }

  move() {
    const directionToFn = {
      left: ([x, y]) => [x - 1, y],
      right: ([x, y]) => [x + 1, y],
      up: ([x, y]) => [x, y - 1],
      down: ([x, y]) => [x, y + 1],
    };

    if (directionToFn[this.direction]) {
      this.tail = this.position.slice(0, this.position.length - 1).concat(this.growed);
      this.growed = [];
      this.head = Cell.of(directionToFn[this.direction](this.head));
    }
  }

  meet(cell) {
    return cell.equals(this.head);
  }

  eat() {
   this.growed = [this.tail[this.tail.length - 1]];
  }

  render() {
    this.ctx.save();
    this.ctx.fillStyle = 'green';
    this.tail.forEach(this.renderBlock.bind(this));
    this.ctx.restore();

    this.renderBlock(this.head);
  }

  renderBlock([x, y]) {
    this.ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  get position() {
    return [this.head, ...this.tail];
  }

  set position([head, ...tail]) {
    this.head = Cell.of(head);
    this.tail = tail.map(Cell.of);
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