import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const userName = greetUser();

const randomInt = (min, max) => {
    const randomNum = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNum)
}

const progressionLength = 10;

const makeProgression = (num) => {
    const difference = randomInt(1, 9);
    return Array(progressionLength)
    .fill(num)
    .map((elem, index) => elem + index * difference)
}


    export const brainProgression = () => {
    console.log('What number is missing in the progression?');
    
    let correctAnswersCount = 0;
    const answersToWin = 3;

    while (correctAnswersCount < answersToWin) {
        const startNum = randomInt(1, 100);
        const progression = makeProgression(startNum);
        const hiddenIndex = randomInt(0, progressionLength - 1);
        const correctAnswer = progression[hiddenIndex];
        progression[hiddenIndex] = '..'
        const question = progression.join(' ');

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question ('Your answer: ');

        if (parseInt(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`)
        break
        }
    }
    if (correctAnswersCount === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
}