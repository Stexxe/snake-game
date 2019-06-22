import Snake from './snake';
import Field from './field';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const field = new Field(20, 20);
const snake = new Snake(ctx);
snake.position = [5, 5];
snake.direction = 'right';

let prevFrameTime = Date.now();
let elapsed = 0;

window.requestAnimationFrame(function callback() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const delta = Date.now() - prevFrameTime;
  elapsed += delta;

  if (elapsed >= 500) {
    snake.move();

    if (field.isOutside(snake.position)) {
      gameOver();
    }

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

function gameOver() {
  document.getElementsByClassName('over')[0].style.display = 'block';
}
