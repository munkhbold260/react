import { useState } from "react";
// const playersList = [
//   { names: "player1" },
//   { names: "player2" },
//   { names: "player3" },
//   { names: "player4" },
// ];

function AddPlayer() {
  var list = [];
  const [gold, setGold] = useState(list);
  return (
    <button
      className="addPlayerBtn"
      onClick={() => {
        setGold(list.push({ names: "jhsdjh" }));
        console.log("sdjnjh");
        console.log(list);
      }}
    >
      {list}
    </button>
  );
}
export default AddPlayer;
