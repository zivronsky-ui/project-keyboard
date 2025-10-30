import { useState } from "react";
import Keyboard from "./keyboard";

function Language({ changeLanguage }) {
  return (
    <div>
      {/* {currentkeyboard} */}
      <button onClick={() => changeLanguage(1)}>עברית</button>
      <button onClick={() => changeLanguage(2)}>english</button>
      <button onClick={() => changeLanguage(3)}>{": )"}</button>
    </div>
  );
}
export default Language;
