import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';

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

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const randomNumberOne = Math.floor(Math.random() * 101);
    const randomNumberTwo = Math.floor(Math.random() * 101);

    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = findGcd(randomNumberOne, randomNumberTwo).toString();

    correctAnswersCount = isCorrectAnswer(
      userAnswer,
      correctAnswer,
      userName,
      correctAnswersCount,
    );
    if (correctAnswersCount === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};

export default brainGcd;
