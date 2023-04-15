export const generateRandomColor = (): string => {
  const maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  return randomNumber.toString(16);
};
