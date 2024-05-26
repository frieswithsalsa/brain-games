#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const userName = greetUser();

const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
  const randomNumber = Math.floor(Math.random() * 101);
  console.log(`Question: ${randomNumber}`);
  const userAnswer =  readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`)
        break
        } 
        if (correctAnswersCount === 3) {
            console.log(`Congratulations, ${userName}!`)
        }
    }
};

export default brainEven;