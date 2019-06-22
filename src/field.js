export default class Field {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isOutside([x, y]) {
    return !(x >= 0 && y >=0 && x < this.width && y < this.height);
  }
}