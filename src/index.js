import Snake from './snake';
import Field from './field';
import Food from './food';
import Score from './score';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

loadAssets().then(({foodIcon}) => {
  const field = new Field(20, 20);

  const food = new Food(ctx, foodIcon);
  food.position = [10, 10];

  const snake = new Snake(ctx);
  snake.position = [[8, 8], [7, 8], [6, 8]];
  snake.direction = 'right';

  const score = new Score(document.getElementsByClassName('score')[0]);

  let prevFrameTime = Date.now();
  let elapsed = 0;
  let delay = 500;

  window.requestAnimationFrame(function callback() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const delta = Date.now() - prevFrameTime;
    elapsed += delta;

    food.render();
    score.render();

    if (elapsed >= delay) {
      elapsed = 0;
      snake.move();

      if (snake.meet(food.position)) {
        snake.eat();
        food.position = field.randomPosition;
        score.add(10);
      }

      if (snake.tail.some(snake.meet.bind(snake))) {
        gameOver();
      }

      if (!field.isInside(snake.position)) {
        gameOver();
      }
    }

    // if (score.points > 0 && score.points % 50 === 0) {
    //   delay -= 30;
    // }

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
});

function loadAssets() {
  return new Promise((resolve) => {
    const foodIcon = new Image();
    foodIcon.src = 'assets/apple.png';
    foodIcon.addEventListener('load', () => {
      resolve({foodIcon})
    });
  })
}

function gameOver() {
  document.getElementsByClassName('over')[0].style.display = 'block';
}
