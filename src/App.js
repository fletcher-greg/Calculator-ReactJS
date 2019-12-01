import React from "react";
import Calculator from "./pages/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calculator />
      <button onClick={() => console.log("hi")}> hi</button>
    </div>
  );
}

export default App;
