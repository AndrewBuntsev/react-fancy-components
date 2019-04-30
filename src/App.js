import React from "react";
import { tooltip } from "./components/tooltip/Tooltip";

function App() {
  let TooltippedComponent = tooltip(<input />, {
    text: "Awesome tooltip!!",
    style: {
      fontWeight: "bold"
    }
  });
  return (
    <div className="App">
      <TooltippedComponent />
    </div>
  );
}

export default App;
