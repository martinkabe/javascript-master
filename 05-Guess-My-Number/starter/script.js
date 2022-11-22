'use strict';

/*
let message = document.querySelector('.message');
console.log(message.textContent);
document.querySelector('.message').textContent = '👍Correct number';
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

const displayMessage = msg => {
  document.querySelector('.message').textContent = msg;
};

const guess = function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  // console.log(guessNumber, typeof guessNumber);
  if (!guessNumber) {
    // When there is no number
    displayMessage('🤦‍♀️ No number');
  } else if (guessNumber === secretNumber) {
    // When player wins
    displayMessage('😉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highScore = highScore > score ? highScore : score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guessNumber > secretNumber) {
    // When number is too high
    if (score > 1) {
      displayMessage('📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    // When number is too low
    if (score > 1) {
      displayMessage('📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', guess);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.highscore').textContent = highScore;

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
