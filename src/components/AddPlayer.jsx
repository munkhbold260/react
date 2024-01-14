import { playerList } from "../utils/playerList";

function AddPlayer({ func1 }) {
  return (
    <div>
      <button
        onClick={() => {
          func1(
            playerList.push({
              playerName: nameInput.value,
              scores: 10,
              index: playerList.length,
            })
          );

          nameInput.value = "";
          console.log(playerList);
        }}
      >
        Add PLayer
      </button>
      <input id="nameInput" type="" placeholder="insert new player Name" />
    </div>
  );
}
export default AddPlayer;
