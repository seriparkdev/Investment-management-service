export const useMaskingNumber = (number: string) => {
  const first = number.slice(0, 1);
  const middle = number.slice(1, -1);
  const last = number.slice(-1);
  let masking = '';

  for (let i = 0; i < middle.length; i++) {
    masking += '*';
  }

  const marskedNumber = first + masking + last;
  return marskedNumber;
};
