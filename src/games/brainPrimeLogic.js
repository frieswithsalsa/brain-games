#!/usr/bin/env node
import getRandomNumber from '../numbersGenerator.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const startRound = () => {
  const number = getRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
