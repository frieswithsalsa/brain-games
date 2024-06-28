#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../utilities/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';

const userName = greetUser();

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const runBrainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    if (isCorrectAnswer(userAnswer, correctAnswer, userName)) {
      correctAnswersCount += 1;
    } else {
      return;
    }

    if (correctAnswersCount === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};

export default runBrainPrime;
