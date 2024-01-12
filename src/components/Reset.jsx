export default function Reset({
  qwer1,
  func1,
  qwer2,
  func2,
  qwer3,
  func3,
  first,
}) {
  return (
    <div className="resetBtn">
      <button
        onClick={() => {
          func1((qwer1 = first));
          func2((qwer2 = first));
          func3((qwer3 = first));
        }}
      >
        Reset
      </button>
    </div>
  );
}
