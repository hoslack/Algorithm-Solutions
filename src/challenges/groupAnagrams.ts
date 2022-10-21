// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// TODO: implement this function to work with empty strings and single letter strings

// Add runtime complexity analysis here
// Add space complexity analysis here.

const groupAnagrams = (strs: string[]): string[][] => {
    const anagrams = new Map<string, string[]>()
    for (const str of strs) { // O(n)
        const sortedStr = str.split("").sort().join("") // O(n log n) for sorting the string and O(n) for joining the string and O(n) for splitting the string
        if (anagrams.has(sortedStr)) {
            anagrams.get(sortedStr)?.push(str) // O(1) for getting the value and O(1) for pushing the value
        } else {
            anagrams.set(sortedStr, [str]) // O(1) for setting the value and O(1) for pushing the value
        }   
    }
    return Array.from(anagrams.values()) // O(n) for creating the array
}

export default groupAnagrams