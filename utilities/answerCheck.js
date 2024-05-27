const isCorrectAnswer = (userAnswer, correctAnswer, userName, correctAnswersCount) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  return correctAnswersCount;
};

export default isCorrectAnswer;
