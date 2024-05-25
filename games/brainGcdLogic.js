import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const userName = greetUser();

const findGcd = (a, b) => {
    while (a != 0 & b != 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    } return a + b;
}

export const brainGcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let correctAnswersCount = 0;
    const answersToWin = 3;

    while (correctAnswersCount < answersToWin) {
        let randomNumberOne = Math.floor(Math.random() * 101);
        let randomNumberTwo = Math.floor(Math.random() * 101);
        
        console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
        
        const userAnswer =  readlineSync.question('Your answer: ');
        
        let correctAnswer = findGcd(randomNumberOne, randomNumberTwo).toString();

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