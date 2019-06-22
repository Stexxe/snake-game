export default class Field {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isOutside([x, y]) {
    return !(x >= 0 && y >=0 && x < this.width && y < this.height);
  }

  get randomPosition() {
    const randNum = (max) => Math.floor(Math.random() * max);
    return [randNum(this.width), randNum(this.height)];
  }

  static isSamePosition([x1, y1], [x2, y2]) {
    return x1 === x2 && y1 === y2;
  }
}