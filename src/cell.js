export default class Cell {

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  static of([x, y]) {
    return new Cell(x, y);
  }

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }

  equals([x, y]) {
    return x === this.x && y === this.y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}