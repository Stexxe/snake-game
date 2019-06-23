import {TILE_SIZE} from './defaults';
import Cell from './cell';

export default class Food {

  constructor(ctx, icon) {
    this.ctx = ctx;
    this.icon = icon;
  }

  set position([x, y]) {
    this.pos = new Cell(x, y);
  }

  get position() {
    return this.pos;
  }

  render() {
    this.ctx.drawImage(this.icon, this.pos.x * TILE_SIZE, this.pos.y * TILE_SIZE);
  }
}