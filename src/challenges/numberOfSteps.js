const numberOfSteps = (num) => {
  let steps = 0
  while(num){
    num%2===0 ? num=num/2 : num--
    steps++
  }
  return steps
}
export default numberOfSteps
