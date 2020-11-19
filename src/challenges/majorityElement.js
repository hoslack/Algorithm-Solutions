const majorityElement = (nums=[]) => {
  const hash = {}
  let keyName = 0
  let counter = 0

  for(let i=0; i<nums.length; i++ ){
    !hash[nums[i]] ? hash[nums[i]]=1 : hash[nums[i]]++

    if (hash[nums[i]]>counter){
      counter = hash[nums[i]]
      keyName = nums[i]
    }
  }
  return keyName
}
export default majorityElement
