#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator!');
  }
};

const startRound = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const operator = operations[getRandomNumber(0, operations.length - 1)];
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = calculate(randomNumber1, randomNumber2, operator).toString();
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
