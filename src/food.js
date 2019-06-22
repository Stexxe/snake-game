import {TILE_SIZE} from './defaults';

export default class Food {

  constructor(ctx, icon) {
    this.ctx = ctx;
    this.icon = icon;
  }

  set position([x, y]) {
    this.x = x;
    this.y = y;
  }

  render() {
    this.ctx.drawImage(this.icon, this.x * TILE_SIZE, this.y * TILE_SIZE);
  }
}