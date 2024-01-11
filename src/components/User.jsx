import { useState } from "react";

export default function () {
  const [score, setScore] = useState(10);
  return (
    <div className="score">
      <button
        onClick={() => {
          setScore(score - 1);
        }}
      >
        -
      </button>
      <p>{score}</p>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
