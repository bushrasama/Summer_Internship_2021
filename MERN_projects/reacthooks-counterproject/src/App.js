import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [number,SetNumber] = useState(0);
  function Increment() {
    SetNumber(number + 1);
  }
  function Decrement() {
    SetNumber(number > 0 && number - 1);
  }
  return (
    <div className="App">
      <h1>Tally Counter App</h1>
      <h1>{number}</h1>
      <button className="myButton" onClick={Increment}> + </button>
      <button className="myButton" onClick={Decrement}> - </button>
   
    </div>
  );
}

