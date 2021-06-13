import { useState } from "react";
import "./styles.css";

export default function App() {
  const[Isstyle, setStyle]=useState();
function stylechanging(){
setStyle(!Isstyle);
}

  const styleHead = {
textDecoration: "line-through",
backgroundColor: "pink"
  }
  return (
    <div className="App">
      <h1 style={Isstyle?styleHead:null}>THIS IS MERN STACK </h1>
      <h2> Learn MERN with me !</h2>
    <button onClick={stylechanging}> CHANGE STYLE </button>
    </div>
  );
}
