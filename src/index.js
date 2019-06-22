import Snake from './snake';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const snake = new Snake(ctx);
snake.direction = 'right';

let prevFrameTime = Date.now();
let elapsed = 0;

window.requestAnimationFrame(function callback() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const delta = Date.now() - prevFrameTime;
  elapsed += delta;

  if (elapsed >= 500) {
    snake.move();
    elapsed = 0;
  }

  snake.render();

  prevFrameTime = Date.now();
  window.requestAnimationFrame(callback);
});

window.addEventListener('keydown', (e) => {
  const keyToDirection = {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
  };

  if (keyToDirection[e.key]) {
    snake.direction = keyToDirection[e.key];
  }
});
