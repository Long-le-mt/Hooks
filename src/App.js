import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div className="App">
      <Content onIncrease={increase} />
      <h1>{count}</h1>
      {/* <button onClick={increase}>Click me!</button> */}
    </div>
  );
}

export default App;
