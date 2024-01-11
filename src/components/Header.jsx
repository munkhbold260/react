import "../styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <button onClick={() => scoreInc(value--)}>-</button>
      <input type="value" value={10} />
      <button>+</button>
    </div>
  );
}
