// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

const letterCombinations = (digits: string): string[] => {
  //
  const result: string[] = []

  // Create a map of digits to letters
  const map: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }

  // dfs function to generate all combinations of letters
  const dfs = (index: number, current: string) => {
    // If the current string is the same length as the digits, push it to the result array
    if (index === digits.length) {
      if (current.length) {
        result.push(current)
      }

      return
    }

    // Get the letters that the current digit maps to
    const letters = map[digits[index]]

    // Loop through the letters
    for (let i = 0; i < letters.length; i++) {
      // Add the letter to the current string and call dfs with the next digit
      dfs(index + 1, current + letters[i])
    }
  }

  // Call dfs with an index of 0 and an empty string
  dfs(0, "")

  return result
}

export default letterCombinations
