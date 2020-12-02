import React, {useEffect}  from 'react';
import { isPalindrome } from './challenges'

const App = () => {
  useEffect(()=>{
    console.log(isPalindrome(-121))
  })
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
}

export default App;
