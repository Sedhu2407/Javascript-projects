'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let dummArr = [];
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('.score').textContent = score;
    dummArr.push(score);
    dummArr.sort();
    dummArr.reverse();
    console.log(dummArr);
    document.querySelector('.highscore').textContent = dummArr[0];
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too High ⬆';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Better luck next time';
      document.querySelector('.guess').value = '';
      if (dummArr[0]) {
        document.querySelector('.highscore').textContent = dummArr[0];
      } else {
        document.querySelector('.highscore').textContent = '0';
      }
    }
  } else {
    document.querySelector('.message').textContent = 'Too Low ⬇';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Better luck next time';
      document.querySelector('.guess').value = '';
      if (dummArr[0]) {
        document.querySelector('.highscore').textContent = dummArr[0];
      } else {
        document.querySelector('.highscore').textContent = '0';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = dummArr[0];
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
