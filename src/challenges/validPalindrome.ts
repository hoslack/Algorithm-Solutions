// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

const isPalindrome = (s: string): boolean => {
  const alphanumeric = s.toLowerCase().replace(/[^a-z0-9]/g, "")
  const reversed = alphanumeric.split("").reverse().join("")

  return alphanumeric === reversed
}

// Time complexity: O(n)
// Space complexity: O(n)
const isPalindromeTwoPointer = (s: string): boolean => {
  const alphanumeric = s.toLowerCase().replace(/[^a-z0-9]/g, "") // O(n) time, O(n) space
  let left = 0 // O(1) space
  let right = alphanumeric.length - 1 // O(1) space

  while (left < right) {
    // O(n) time
    if (alphanumeric[left] !== alphanumeric[right]) {
      // O(1) time
      return false // O(1) time
    }

    left += 1 // O(1) time
    right -= 1 // O(1) time
  }

  return true
}

export default isPalindrome
