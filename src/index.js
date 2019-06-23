import Snake from './snake';
import Field from './field';
import Food from './food';
import Score from './score';
import Game from './game';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const game = new Game();

game.loadAssets().then(({foodIcon}) => {
  const field = new Field(20, 20);

  const food = new Food(ctx, foodIcon);
  food.position = [10, 10];

  const snake = new Snake(ctx);
  snake.position = [[8, 8], [7, 8], [6, 8]];
  snake.direction = 'right';

  const score = new Score(document.getElementsByClassName('score')[0]);

  game.delay = 200;

  game.onTick = () => {
    if (game.over) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.move();

    if (snake.meet(food.position)) {
      snake.eat();
      food.position = field.randomPosition;
      score.add(10);
    }

    const snakeEatsSelf = snake.tail.some(snake.meet.bind(snake));
    if (snakeEatsSelf || field.isOutside(snake.position)) {
      game.over = true;
    }

    snake.render();
    food.render();
    score.render();
  };

  game.start();

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