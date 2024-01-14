import { playerList } from "../utils/playerList";
export default function RenderingList({ func, qwer }) {
  const listItems = playerList.map((element) => {
    return (
      <div className="user">
        <h3>{element.playerName}</h3>
        <div className="score">
          <button
            onClick={() => {
              func(qwer - 1);
            }}
          >
            -
          </button>
          <p> {element.scores} </p>
          <button
            onClick={() => {
              func((element.scores = element.scores + 1));
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
