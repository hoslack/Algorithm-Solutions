import React, {useEffect}  from 'react';
import { numIslands } from './challenges'

const App = () => {
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  useEffect(()=>{
    console.log(numIslands(grid))
  })
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
}

export default App;
