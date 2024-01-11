import { useState } from "react";
import User from "./User";
export default function () {
  const [score, setscore] = useState("");
  return (
    <div className="resetBtn">
      <button
        onClick={() => {
          setscore(score == 0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
