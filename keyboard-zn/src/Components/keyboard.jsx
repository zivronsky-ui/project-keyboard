import { useState } from "react";

// import "./App.css";

function Keyboard(props) {
  // console.log("props:" + props);

  const [string, setString] = useState("nvbv");
  if (!props.index) return;

  const keyboards = [
    { language: "עברית", buttons: ["כ", "ח", " "] },
    { language: "english", buttons: ["t", "d"] },
    { language: "emojis", buttons: [",", "(:"] },
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
  console.log(props);

  return (
    <div>
      <div style={{ fontSize: props.fontSize }}> {string}</div>

      <div>{r}</div>
    </div>
  );
}
export default Keyboard;
