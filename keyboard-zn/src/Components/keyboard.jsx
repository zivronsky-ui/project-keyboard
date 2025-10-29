import { useState } from "react";

// import "./App.css";

function Keyboard(props) {
  // console.log("props:" + props);

  const [string, setString] = useState("");
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
        "😛", // setString(string + letter);

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
    return (
      <span style={{ color: props.color, fontSize: props.fontSize }}>
        {letter}
      </span>
    );
  }

  const r = buildBtns(keyboards[props.index - 1].buttons);
  console.log(props);
  function deleteAll() {
    setString("");
  }

  return (
    <div>
      <div> {() => displayletter}</div>

      <div>{r}</div>
      <button onClick={deleteAll}>מחק הכל</button>
      <button
        onClick={() => {
          setString(string + " ");
        }}
      >
        {" "}
        רווח
      </button>
    </div>
  );
}
export default Keyboard;
