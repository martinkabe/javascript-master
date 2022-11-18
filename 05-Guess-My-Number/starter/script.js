'use strict';

/*
let message = document.querySelector('.message');
console.log(message.textContent);
document.querySelector('.message').textContent = '👍Correct number';
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

const guess = function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  if (!guessNumber) {
    document.querySelector('.message').textContent = '🤦‍♀️ No number';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = '😉 Correct number';
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', guess);
