import { useState } from "react";
import "./styles/style.css";
import Icon from "./components/Icon";
import Buttons from "./components/Buttons";
import Reset from "./components/Reset";
import AddPlayer from "./components/AddPlayer";
import RenderingList from "./components/RenderingList";
///////////////////////////////////////////////

//////////////////////////////////////////
export default function App() {
  const firstScore = 0;
  const [score1, setScore1] = useState(firstScore);

  return (
    <div className="main">
      <div className="header">
        <h2>Play Score</h2>
        <Icon />
      </div>
      <div className="user">
        <h2>1881</h2>
        <Buttons qwer={score1} func={setScore1} />
      </div>

      <RenderingList qwer={score1} func={setScore1} />
      <div className="addOrReset">
        <AddPlayer />
        <Reset firstScore={firstScore} qwer1={score1} func1={setScore1} />
      </div>
    </div>
  );
}

{
  /* <div className="user">
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
      </div> */
}
