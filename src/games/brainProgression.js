import readlineSync from 'readline-sync';
import greetUser from '../utilities/cli.js';
import isCorrectAnswer from '../utilities/answerCheck.js';
import getRandomNumber from '../numbersGenerator.js';

const userName = greetUser();

const progressionLength = 10;

const makeProgression = (num) => {
  const difference = getRandomNumber(1, 9);
  return Array(progressionLength)
    .fill(num)
    .map((elem, index) => elem + index * difference);
};

const runBrainProgression = () => {
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const startNum = getRandomNumber(1, 100);
    const progression = makeProgression(startNum);
    const hiddenIndex = getRandomNumber(0, progressionLength - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

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

export default runBrainProgression;
