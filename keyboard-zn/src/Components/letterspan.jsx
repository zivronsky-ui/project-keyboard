// function LetterSpan({ letter, color, fontSize }) {
//   return (
//     <span style={{ color: color, fontSize: fontSize, marginLeft: "5px" }}>
//       {letter}
//     </span>
//   );
// }

// export default LetterSpan;

function LetterSpan({ letters = [] }) {
  return (
    <div>
      {letters.map((l, i) => (
        <span
          key={i}
          style={{
            color: l.color,
            fontSize: l.fontSize,
            marginRight: "2px",
          }}
        >
          {l.char}
        </span>
      ))}
    </div>
  );
}

export default LetterSpan;
