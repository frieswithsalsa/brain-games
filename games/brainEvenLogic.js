#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';

const userName = greetUser();

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    correctAnswersCount = isCorrectAnswer(
      userAnswer,
      correctAnswer,
      userName,
      correctAnswersCount
    );
    if (correctAnswersCount === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};

export default brainEven;
