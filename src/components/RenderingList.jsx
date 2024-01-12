export default function RenderingList({ qwer, func }) {
  const playerList = [
    { index: "1", playerName: "Uttar Pradesh", playerScore: 0 },
    { index: "2", playerName: "Guja5554546rat", playerScore: 0 },
  ];
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
          <p>0</p>
          <button>+</button>
        </div>
      </div>
    );
  });
  return <div>{listItems}</div>;
}
/////////////////
