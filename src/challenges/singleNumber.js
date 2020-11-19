const singleNumber = (array) => {
  return array.reduce((a,b) => a^b)
}

export default singleNumber
