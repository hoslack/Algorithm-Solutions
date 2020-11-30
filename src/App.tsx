import React, {useEffect}  from 'react';
import { productExceptSelf } from './challenges'

const App = () => {
  useEffect(()=>{
    console.log(productExceptSelf([1,2,3,4]))
  })
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
}

export default App;
