const subtractProductAndSum = (num) => {
  let numberArray = Array.from(String(num), Number);
  let [product, sum] = [1, 0]
  for(let number of numberArray){
    product = product *number
    sum = sum + number
  }
  return product-sum
}
export default subtractProductAndSum
