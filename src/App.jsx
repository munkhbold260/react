import { useState } from "react";
import "./styles/style.css";
import Icon from "./components/Icon";
// import Buttons from "./components/Buttons";
import Reset from "./components/Reset";
import AddPlayer from "./components/AddPlayer";
import RenderingList from "./components/RenderingList";
import { playerList } from "./utils/playerList";

///////////////////////////////////////////////

//////////////////////////////////////////
export default function App() {
  const [score, setScore] = useState(playerList.scores);
  const [addplayer, setAddPlayer] = useState(playerList);
  const [sort, setSort] = useState(playerList.score);
  return (
    <div className="main">
      <div className="header">
        <h2>Play Score</h2>
        <Icon />
      </div>

      <RenderingList qwer={score} func={setScore} />
      <div className="addOrReset">
        <AddPlayer qwer1={playerList.scores} func1={setAddPlayer} />
        <Reset
          qwer={playerList.scores}
          func={setScore}
          qwer2={playerList.scores}
          func2={setSort}
        />
      </div>
    </div>
  );
}

// { <div className="user">
//         <h2>1881</h2>
//         <Buttons qwer={score1} func={setScore1} />
//       </div>

//       <div className="user">
//         <h2>11</h2>
//         <Buttons qwer={score1} func={setScore1} />
//       </div>
//       <div className="user">
//         <h2>rich-star</h2>
//         <Buttons qwer={score2} func={setScore2} />
//       </div>
//       <div className="user">
//         <h2>great-star</h2>
//         <Buttons qwer={score3} func={setScore3} />
//       </div>
// }
