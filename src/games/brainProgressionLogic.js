#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (num, difference) => Array(progressionLength)
  .fill(num)
  .map((elem, index) => elem + index * difference);

const startRound = () => {
  const startNum = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 9);
  const progression = makeProgression(startNum, difference);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
