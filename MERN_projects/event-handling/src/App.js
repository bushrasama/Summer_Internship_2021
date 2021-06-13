import { useState } from "react";
import "./styles.css";

export default function App() {
  const [heading, setheading] = useState("");
  const [submittedText, setSubmittext] = useState("SUBMITTED");
  const [isSubmitted, setisSubmit] = useState(false);
  const [mouseover, onmouseover] = useState(false);
  function MouseLeave() {
    onmouseover(false);
  }
  function MouseOver() {
    onmouseover(true);
  }
  function submitfun() {
    setisSubmit(!isSubmitted);
  }
  function changeHeading(event) {
    setheading(event.target.value);
  }

  return (
    <div className="App">
      <h1>{isSubmitted ? submittedText : "Hello " + heading}</h1>
      <input onChange={changeHeading} className="css-input" value={heading} />
      <br />
      <br />
      <button
        style={{ backgroundColor: mouseover ? "red" : "yellow" }}
        onMouseOver={MouseOver}
        onMouseLeave={MouseLeave}
        onClick={submitfun}
      >
        SUBMIT
      </button>
    </div>
  );
}
