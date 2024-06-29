import readlineSync from 'readline-sync';
import greetUser from '../utilities/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';
import getRandomNumber from '../index.js';

const userName = greetUser();

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

const runGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const { number1 } = getRandomNumber();
    const { number2 } = getRandomNumber();

    console.log(`Question: ${number1} ${number2}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = findGcd(number1, number2).toString();

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

export default runGcd;
