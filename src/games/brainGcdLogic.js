#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const startRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2).toString();
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
