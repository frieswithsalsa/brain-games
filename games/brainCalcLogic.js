import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const userName = greetUser();

export const brainCalc = () => {
    console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const randomNumberOne = Math.floor(Math.random() * 101);
    let randomNumberTwo = Math.floor(Math.random() * 101);
    const operationsArray = ['+', '-', '*'];
    const randomOperation = Math.floor(Math.random() * operationsArray.length);
    let randomIndex = operationsArray[randomOperation];

    console.log(`Question: ${randomNumberOne} ${randomIndex} ${randomNumberTwo}`);
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
        console.log('Error')
        }

    if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    correctAnswersCount += 1;
    } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    break
    };
    if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
        };
    }
}
