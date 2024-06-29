#!/usr/bin/env node
import getRandomNumber from '../numbersGenerator.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?'

const progressionLength = 10;

const makeProgression = (num) => {
  const difference = getRandomNumber(1, 9);
  return Array(progressionLength)
    .fill(num)
    .map((elem, index) => elem + index * difference);
};

const startRound = () => {
    const startNum = getRandomNumber(1, 100);
    const progression = makeProgression(startNum);
    const hiddenIndex = getRandomNumber(0, progressionLength - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
