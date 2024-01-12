export default function Reset({
  qwer1,
  func1,
  qwer2,
  func2,
  qwer3,
  func3,
  firstScore,
}) {
  return (
    <button
      className="resetBtn"
      onClick={() => {
        func1((qwer1 = firstScore));
        func2((qwer2 = firstScore));
        func3((qwer3 = firstScore));
      }}
    >
      Reset
    </button>
  );
}
