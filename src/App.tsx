import React, {useEffect}  from 'react';
import { removeElement } from './challenges'

const App = () => {
  useEffect(()=>{
    console.log(removeElement([3,2,2,3],3))
  })
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
}

export default App;
