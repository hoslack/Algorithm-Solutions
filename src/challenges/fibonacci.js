const fibonacci = (number) => {
  //  get the fibonacci numbers upto the last provided
  // return the last number
  let fibonacciArray = [0,1]
  for(let i=0; i<number; i++){
    fibonacciArray.push(fibonacciArray[i]+fibonacciArray[i+1])
  }
  // remove two numbers from the length because we had started with 0 and 1
  return fibonacciArray[fibonacciArray.length-2]
}
export default fibonacci
