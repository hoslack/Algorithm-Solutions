// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
//
//   An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
//   You may assume all four edges of the grid are all surrounded by water.
//
//
//
//   Example 1:
//
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
//
//
// Constraints:
//
//   m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

const numIslands = (grid: string[][]): number => {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++
        dfs(grid, i, j)
      }
    }
  }
  return count
}

const dfs = (grid: string[][], i: number, j: number) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return
  }
  grid[i][j] = "0"
  dfs(grid, i + 1, j)
  dfs(grid, i - 1, j)
  dfs(grid, i, j + 1)
  dfs(grid, i, j - 1)
}

const numIslands1 = (grid: string[][]) => {
  let islandCount = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        islandCount++
        addWater(row, col, grid)
      }
    }
  }
  return islandCount
}

// convert
const addWater = (row: number, col: number, grid: string[][]) => {
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === "0"
  )
    return
  grid[row][col] = "0"
  addWater(row + 1, col, grid)
  addWater(row - 1, col, grid)
  addWater(row, col + 1, grid)
  addWater(row, col - 1, grid)
}

export default numIslands
