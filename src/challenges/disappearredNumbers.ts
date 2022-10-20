const findDisappearedNumbers = (nums: number[]) => {
  const uniqueArray = [...Array.from(new Set(nums.sort()))]
  const completeArray = Array.from({length: nums.length}, (_, i) => i + 1)
  return completeArray.filter(x => !uniqueArray.includes(x));
}
export default findDisappearedNumbers
