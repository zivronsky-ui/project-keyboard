import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/keyboard";
import Language from "./Components/language";
import Color from "./Components/colors";
import Size from "./Components/size";

function App() {
  const [size, setSize] = useState("50px");
  const [currentkeyboard, setKeyboard] = useState(1);
  const [color, setColor] = useState("black");

  function changeLanguage(index) {
    setKeyboard(index);
  }
  return (
    <div>
      <Keyboard fontSize={size} index={currentkeyboard} color={color} />
      <br />
      <Language changeLanguage={changeLanguage} />
      <br />
      <Size setSize={setSize} />
      <Color setColor={setColor} />
    </div>
  );
}

export default App;
