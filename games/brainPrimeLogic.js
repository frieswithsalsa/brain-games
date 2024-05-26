#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const userName = greetUser();

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

export const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
