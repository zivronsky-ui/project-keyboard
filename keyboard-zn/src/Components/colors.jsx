import { useState } from "react";
import Keyboard from "./keyboard";

function Color() {
  const [textcolor, setColor] = useState("green");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div>
      <button onClick={() => changeColor("cornflowerblue")}>blue</button>
      <button onClick={() => changeColor("rosepink")}>pink</button>
      <button onClick={() => changeColor("sage")}>green</button>
    </div>
  );
}
export default Color;
