// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

const isAnagram = (s: string, t: string): boolean =>  {
//     const sMap = new Map<string, number>()
//     const tMap = new Map<string, number>()
//     for (const char of s) {
//         if (sMap.has(char)) {
//             sMap.set(char, sMap.get(char)! + 1)
//         } else {
//             sMap.set(char, 1)
//         }
//     }
//     for (const char of t) {
//         if (tMap.has(char)) {
//             tMap.set(char, tMap.get(char)! + 1)
//         } else {
//             tMap.set(char, 1)
//         }
//     }
//     if (sMap.size !== tMap.size) {
//         return false
//     }
//     for (const [key, value] of sMap) {
//         if (tMap.get(key) !== value) {
//             return false
//         }
//     }
//     return true


    if(s.length !== t.length){
        return false
    }
    // time (nlogn) space O(n)
    const sArr = s.split("").sort()
    const tArr = t.split("").sort()

    let flag = true

    if(tArr.join() === sArr.join()){
        flag = true
    }else {
        flag = false
    }
 
 return flag

};

export default isAnagram