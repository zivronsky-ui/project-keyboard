import { useState } from "react";
import LetterSpan from "./letterspan";

function Keyboard(props) {
  const [string, setString] = useState("");
  const [letters, setLetters] = useState([]);

  if (!props.index) return;

  const keyboards = [
    {
      language: "עברית",
      buttons: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "/",
        "'",
        "ק",
        "ר",
        "א",
        "ט",
        "ו",
        "ן",
        "ם",
        "פ",
        "ש",
        "ד",
        "ג",
        "כ",
        "ע",
        "י",
        "ח",
        "ל",
        "ך",
        "ף",
        "ז",
        "ס",
        "ב",
        "ה",
        "נ",
        "מ",
        "צ",
        "ת",
        "ץ",
        ",",
        ".",
        ";",
        ":",
      ],
    },
    {
      language: "english",
      buttons: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "/",
        ";",
        ":",
        "'",
        '"',
        "[",
        "]",
        "\\",
      ],
    },
    {
      language: "emojis",
      buttons: [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "😂",
        "🤣",
        "😊",
        "😇",
        "🙂",
        "🙃",
        "😉",
        "😌",
        "😍",
        "🥰",
        "😘",
        "😗",
        "😙",
        "😚",
        "😋",
        "😛",
        "😝",
        "😜",
        "🤪",
        "🤨",
        "🧐",
        "🤓",
        "😎",
        "🥳",
        "😏",
        "😒",
        "😞",
        "😔",
        "😟",
        "😕",
        "🙁",
        "☹️",
        "😣",
        "😖",
        "😫",
        "😩",
        "🥺",
        "😢",
        "😭",
        "😤",
        "😠",
        "😡",
        "🤬",
        "🤯",
      ],
    },
  ];

  // function buildBtns(letters) {
  //   let something = letters.map((letter) => {
  //     return (
  //       <button className="letterbtn" onClick={() => displayletterspan(letter)}>
  //         {letter}
  //       </button>
  //     );
  //   });
  //   return something;
  // }

  // function updateString(letter) {
  //   setString(string + letter);
  // }

  function handleClick(letter) {
    // store both letter + current style
    setLetters((prev) => [
      ...prev,
      { char: letter, color: props.color, fontSize: props.fontSize },
    ]);
  }

  function deleteAll() {
    setLetters([]);
  }
  function deleteLast() {
    setLetters((prev) => prev.slice(0, -1));
  }
  function addSpace() {
    setLetters((prev) => [...prev, { char: "  " }]);
  }
  // function deleteAll() {
  //   setString("");
  // }
  // function displayletterspan(letter) {
  //   console.log(letter);
  //   console.log(props);

  //   return <LetterSpan r={r} props={props} />;
  // }
  const currentKeyboard = keyboards[props.index - 1];
  // const r = keyboards[props.index - 1].buttons;

  return (
    <div>
      <LetterSpan letters={letters} />

      <div>
        {currentKeyboard.buttons.map((letter) => (
          <button key={letter} onClick={() => handleClick(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <button onClick={deleteAll}>מחק הכל</button>
      <button onClick={addSpace}>רווח</button>
      <button onClick={deleteLast}>מחק</button>
    </div>
  );
}
export default Keyboard;
