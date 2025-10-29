import { useState } from "react";
// import "./App.css";

function Keyboard() {
  const [string, setString] = useState("nvbv");
  const keyboards = [
    { language: "עברית", buttons: ["t", "d"] },
    { language: "english", buttons: ["t", "d"] },
    { language: "emojis", buttons: ["t", "d"] },
  ];

  function buildBtns(letters) {
    let something = letters.map((letter) => {
      return (
        <button className="letterbtn" onClick={() => displayletter(letter)}>
          {letter}
        </button>
      );
    });
    return something;
  }
  function displayletter(letter) {
    setString(string + letter);
  }
  const r = buildBtns(keyboards[0].buttons);

  return (
    <div>
      {string}

      <div>{r}</div>
    </div>
  );
}
export default Keyboard;
