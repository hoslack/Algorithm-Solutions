import React, {useEffect}  from 'react';
import { fibonacci } from './challenges'

const App = () => {
  useEffect(()=>{
    console.log(fibonacci(10))
  })
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
}

export default App;
