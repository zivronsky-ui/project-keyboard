import { useState } from "react";

// import "./App.css";

function Keyboard(props) {
  console.log(props);
  const [string, setString] = useState("");

  if (!props.index) return;

  const keyboards = [
    { language: "עברית", buttons: ["כ", "ח", " "] },
    { language: "english", buttons: ["t", "d", " "] },
    { language: "emojis", buttons: [",", "(:", " "] },
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

  const r = buildBtns(keyboards[props.index - 1].buttons);

  return (
    <div>
      <h1>{string}</h1>

      <div>{r}</div>
    </div>
  );
}
export default Keyboard;
