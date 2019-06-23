export default class Field {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isOutside(cells) {
    return !cells.every(this.isCellInside.bind(this));
  }

  isCellInside([x, y]) {
    return x >= 0 && y >=0 && x < this.width && y < this.height
  }

  get randomPosition() {
    const randNum = (max) => Math.floor(Math.random() * max);
    return [randNum(this.width), randNum(this.height)];
  }
}