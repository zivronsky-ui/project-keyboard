import { useState } from "react";
import Keyboard from "./keyboard";

function Language() {
  const [currentkeyboard, setKeyboard] = useState(<Keyboard index={1} />);

  function changeLanguage(index) {
    setKeyboard(<Keyboard index={index} />);
  }

  return (
    <div>
      {currentkeyboard}
      <br />
      <button onClick={() => changeLanguage(1)}>עברית</button>
      <button onClick={() => changeLanguage(2)}>english</button>
      <button onClick={() => changeLanguage(3)}>{": )"}</button>
    </div>
  );
}
export default Language;
