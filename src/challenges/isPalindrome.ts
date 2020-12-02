// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
//     Follow up: Could you solve it without converting the integer to a string?
//
//
//
//     Example 1:
//
// Input: x = 121
// Output: true
// Example 2:
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//     Example 3:
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//     Example 4:
//
// Input: x = -101
// Output: false

// @ts-ignore

const reverseInt = (num: number): number => {
    let reversedNumber = 0, lastDigit =0;
    while(num!==0){
        lastDigit = num % 10 // get the last digit of the number
        num = parseInt(String(num / 10)) //remove the last digit from the original number
        reversedNumber = (reversedNumber * 10) + lastDigit
        if (reversedNumber < Math.pow(-2, 31) || reversedNumber > Math.pow(2, 31) - 1) return 0
    }
    return reversedNumber
}
const isPalindrome = (x: number): boolean  => {
    if((x<0 || x%10 === 0) && x !== 0){
        return false
    }
    return x===reverseInt(x)
};

export default isPalindrome

