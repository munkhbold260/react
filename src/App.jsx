import { useState } from "react";
import Icon from "./components/Icon";
import Buttons from "./components/Buttons";
import Reset from "./components/Reset";
import "./styles/style.css";
import { playersList } from "./utils/playersList";
export default function App() {
  const firstScore = 0;
  const [score1, setScore1] = useState(firstScore);
  const [score2, setScore2] = useState(firstScore);
  const [score3, setScore3] = useState(firstScore);
  return (
    <div className="main">
      <div className="header">
        <h2>Play Score</h2>
        <Icon />
      </div>
      <div className="user">
        <h2>11</h2>
        <Buttons qwer={score1} func={setScore1} />
      </div>
      <div className="user">
        <h2>rich-star</h2>
        <Buttons qwer={score2} func={setScore2} />
      </div>
      <div className="user">
        <h2>great-star</h2>
        <Buttons qwer={score3} func={setScore3} />
      </div>
      <Reset
        first={firstScore}
        qwer1={score1}
        func1={setScore1}
        qwer2={score2}
        func2={setScore2}
        qwer3={score3}
        func3={setScore3}
      />
      <div className="test">
        {playersList.map(){}}
      </div>
    </div>
  );
}
