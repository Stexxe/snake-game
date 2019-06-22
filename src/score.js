export default class Score {
  constructor(element) {
    this.element = element;
    this.prefix = this.element.innerText;
    this.score = 0;
  }

  add(value) {
    this.score += value;
  }

  render() {
    this.element.innerText = `${this.prefix} ${this.score}`;
  }
}