// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

const reverseInteger = (x: number): number => {
  if (x < -2147483648 || x > 2147483647) {
    return 0;
  }
  type FlagType = -1 | 1;
  let flag: FlagType;
  if (x < 0) {
    flag = -1;
    x = x * -1;
  } else {
    flag = 1;
  }
  const integer = String(x).split("").reverse().join("");
  console.log(-2 ^ 31);
  if (
    Number(integer) * flag < -2147483648 ||
    Number(integer) * flag > 2147483647
  ) {
    return 0;
  }
  return Number(integer) * flag;
};

export default reverseInteger;
