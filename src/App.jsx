import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState("1");

  const onClickCount = () => {
    setCount(count * "2");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCount}>Count</button>
    </div>
  );
}
