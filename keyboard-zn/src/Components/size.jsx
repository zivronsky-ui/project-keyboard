import { useState } from "react";
import Keyboard from "./keyboard";

function Size({ setSize }) {
  function changeSize(size) {
    console.log(size);

    setSize(size.fontSize);
  }
  return (
    <div>
      <button onClick={() => changeSize({ fontSize: "20px" })}>קטן</button>
      <button onClick={() => changeSize({ fontSize: "40px" })}>בינוני</button>
      <button onClick={() => changeSize({ fontSize: "60px" })}>גדול</button>
    </div>
  );
}
export default Size;
