import "../src/styles/style.css";
import Icon from "./components/Icon";
import User from "./components/User";
import Reset from "./components/Reset";

import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(5);
  return (
    <div className="main">
      <div className="header">
        <h2>Play Score</h2>
        <Icon />
      </div>
      <div className="user">
        <h2>munkhbold</h2>
        <User />
      </div>
      <div className="user">
        <h2>rich-star</h2>
        <User />
      </div>
      <div className="user">
        <h2>great-star</h2>
        <User />
      </div>
      <Reset />
    </div>
  );
}
