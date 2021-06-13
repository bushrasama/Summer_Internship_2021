import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setnumber] = useState(0);

  useEffect(() => {
    if (number === 8) {
      alert("Your have reached number 8");
    }
  });
  return (
    <div className="App">
      <h1>Hello {number}</h1>
      <button
        onClick={() => {
          return setnumber(number + 1);
        }}
      >
        {" "}
        Change{" "}
      </button>
    </div>
  );
}
