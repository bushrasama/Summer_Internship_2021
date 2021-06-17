import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
export default function App() {
  const [num, setnum] = useState(1);
  const [moves, setmoves] = useState();
  const [name, setname] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.forms[0].name);
      setname(res.data.forms[0].name);
      setmoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <div className="App">
      <h1>YOU CHOSE {num} VALUE </h1>
      <select
        value={num}
        onChange={(event) => {
          setnum(event.target.value);
        }}
      >
        <option value="1"> 1 </option>
        <option value="25"> 25 </option>
        <option value="7"> 7 </option>
        <option value="4"> 4 </option>
        <option value="29"> 29 </option>
      </select>
      <h2> YOU CHOSE {name} POKEMON</h2>
      <h3> THE NUMBER OF MOVES ARE = {moves} </h3>
    </div>
  );
}
