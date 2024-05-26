import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

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
  } return a + b;
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

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (correctAnswersCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainGcd;
