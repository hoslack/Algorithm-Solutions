const numIslands = (grid) => {
  let islandCount = 0
  for(let row=0; row<grid.length; row++){
    for(let col=0; col<grid[row].length; col++){
      if (grid[row][col]==='1'){
        islandCount++
        grid[row][col]='0'
      }
    }
  }
  return islandCount
}

const addWater = (right, left, grid) => {

}

export default numIslands
