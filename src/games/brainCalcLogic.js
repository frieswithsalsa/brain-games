import readlineSync from 'readline-sync';
import greetUser from '../utilities/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';
import getRandomNumber from '../numbersGenerator.js';

const userName = greetUser();

const runBrainCalc = () => {
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const operationsArray = ['+', '-', '*'];
    const randomOperation = Math.floor(Math.random() * operationsArray.length);
    const randomIndex = operationsArray[randomOperation];

    console.log(`Question: ${number1} ${randomIndex} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;

    switch (randomIndex) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        console.log('Error');
    }

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

export default runBrainCalc;
