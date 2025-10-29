import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/keyboard";
import Language from "./Components/language";

import Size from "./Components/size";

function App() {
  const [size, setSize] = useState("50px");
  const [currentkeyboard, setKeyboard] = useState(1);

  function changeLanguage(index) {
    setKeyboard(index);
  }
  return (
    <div>
      <Keyboard fontSize={size} index={currentkeyboard} />
      <br />
      <Language changeLanguage={changeLanguage} />
      <br />
      <Size setSize={setSize} />
    </div>
  );
}

export default App;
