import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';

const userName = greetUser();

const brainCalc = () => {
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const randomNumberOne = Math.floor(Math.random() * 101);
    const randomNumberTwo = Math.floor(Math.random() * 101);
    const operationsArray = ['+', '-', '*'];
    const randomOperation = Math.floor(Math.random() * operationsArray.length);
    const randomIndex = operationsArray[randomOperation];

    console.log(
      `Question: ${randomNumberOne} ${randomIndex} ${randomNumberTwo}`
    );
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer;

    switch (randomIndex) {
      case '+':
        correctAnswer = randomNumberOne + randomNumberTwo;
        break;
      case '-':
        correctAnswer = randomNumberOne - randomNumberTwo;
        break;
      case '*':
        correctAnswer = randomNumberOne * randomNumberTwo;
        break;
      default:
        console.log('Error');
    }
    correctAnswersCount = isCorrectAnswer(
      userAnswer.toString(),
      correctAnswer.toString(),
      userName,
      correctAnswersCount
    );
    if (correctAnswersCount === answersToWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};

export default brainCalc;
