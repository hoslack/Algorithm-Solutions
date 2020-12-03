import React, {useEffect}  from 'react';
import { meetingRooms } from './challenges'

const App = () => {
  useEffect(()=>{
    console.log(meetingRooms([[1,2], [1,3]]))
  })
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
}

export default App;
