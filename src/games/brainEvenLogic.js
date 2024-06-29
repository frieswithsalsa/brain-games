#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../utilities/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';
import getRandomNumber from '../index.js';

const userName = greetUser();

const runBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

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

export default runBrainEven;
