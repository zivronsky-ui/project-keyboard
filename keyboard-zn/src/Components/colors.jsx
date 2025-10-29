import { useState } from "react";
import Keyboard from "./keyboard";

function Color({ setColor }) {
  function changeColor(color) {
    console.log(color);

    setColor(color.color);
  }
  return (
    <div>
      <button onClick={() => changeColor({ color: "red" })}>אדום</button>
      <button onClick={() => changeColor({ color: "green" })}>ירוק</button>
      <button onClick={() => changeColor({ color: "black" })}>שחור</button>
    </div>
  );
}
export default Color;
