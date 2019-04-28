import React from "react";
import tooltip from "./components/Tooltip";
import ReactDemo from "@andreibuntsev/react-demo";

function App() {
  let TooltippedComponent = tooltip(<input />, {
    text: "Awesome tooltip!!"
  });
  return (
    <div className="App">
      <TooltippedComponent />
      <ReactDemo />
    </div>
  );
}

export default App;
