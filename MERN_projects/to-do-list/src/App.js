import { useState } from "react";
import "./Todolist";
import Todolist from "./Todolist.js";
import "./styles.css";

export default function App() {
  const [value, setvalue] = useState("");
  const [items, setitem] = useState([]);
  function store(event) {
    const inputValue = event.target.value;
    setvalue(inputValue);
  }
  function addtolist() {
    setitem((prevValue) => {
      return [...prevValue, value];
    });
    setvalue("");
  }
  function checked(id) {
    setitem((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <input type="text" name="items" value={value} onChange={store} />
      <button onClick={addtolist}> ADD </button>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <Todolist
                lochecked={checked}
                id={index}
                key={index}
                value={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
