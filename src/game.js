export default class Game {
  constructor() {
    this._over = false;
    this.tickFn = () => {};
    this.delay = 500;
  }

  set onTick(fn) {
    this.tickFn = fn;
  }

  start() {
    let elapsed = 0;
    let prevFrameTime = Date.now();

    const callback = () => {
      const delta = Date.now() - prevFrameTime;
      elapsed += delta;

      if (elapsed >= this.delay) {
        elapsed = 0;
        this.tickFn();
      }

      prevFrameTime = Date.now();
      window.requestAnimationFrame(callback);
    };

    window.requestAnimationFrame(callback);
  }

  loadAssets() {
    return new Promise((resolve) => {
      const foodIcon = new Image();
      foodIcon.src = 'assets/apple.png';
      foodIcon.addEventListener('load', () => {
        resolve({foodIcon})
      });
    })
  }

  set over(bool) {
    this._over = bool;

    if (this.over) {
      document.getElementsByClassName('over')[0].style.display = 'block';
    }
  }

  get over() {
    return this._over;
  }
}