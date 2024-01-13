import { playerList } from "../utils/playerList";
export default function RenderingList({ func }) {
  const listItems = playerList.map((element) => {
    return (
      <div className="user">
        <h3>{element.playerName}</h3>
        <div className="score">
          <button
            onClick={() => {
              func((element.score = element.score - 1));
            }}
          >
            -
          </button>
          <p> {element.score} </p>
          <button
            onClick={() => {
              func((element.score = element.score + 1));
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  });
  return <div>{listItems}</div>;
}
/////////////////
