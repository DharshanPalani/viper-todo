import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>Click the button below</h1>
      <button onClick={() => HandleClick()}>Button:{count}</button>
    </>
  );
}

export default App;
