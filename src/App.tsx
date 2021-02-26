import React, { useEffect } from "react";
import { reverseInteger } from "./challenges";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  useEffect(() => {
    console.log(reverseInteger(1534236469));
  });
  return (
    <div className="App">
      <h2>Hello Tests</h2>
    </div>
  );
};

export default App;
