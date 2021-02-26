const singleNumber = (array: number[]) => {
  return array.reduce((a, b) => a ^ b);
};

export default singleNumber;
