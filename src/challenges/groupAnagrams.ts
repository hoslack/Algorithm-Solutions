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


const groupAnagrams = (strs: string[]): string[][] => {

    function isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }
        if(s=="" && t==""){
            return true
        }
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
    
    
    
    const result = []
    
    while(strs.length>=1){
    const current = strs.shift() || ""
    const currentArr = [current]
    for(let i=0; i<strs.length; i++){
        if(isAnagram(current, strs[i])){
            currentArr.push(strs[i])
            strs.splice(i, 1)
        }
    }
    
    result.push(currentArr)
    }
    
    return result
    
    };

export default groupAnagrams