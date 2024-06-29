const getRandomNumber = () => {
  const number1 = Math.floor(Math.random() * 101);
  const number2 = Math.floor(Math.random() * 101);
  return { number1, number2 };
};

export default getRandomNumber;
