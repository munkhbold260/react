export default function Buttons({ qwer, func }) {
  return (
    <div className="score">
      <button
        onClick={() => {
          func(qwer - 1);
        }}
      >
        -
      </button>
      <p>{qwer}</p>
      <button
        onClick={() => {
          func(qwer + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
