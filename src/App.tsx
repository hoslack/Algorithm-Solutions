import React, { useEffect } from "react";
import { compress } from "./challenges";

const App = () => {
  useEffect(() => {
    console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
  });
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
};

export default App;
