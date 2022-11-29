import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const money = [120, 122, 123];
function App() {
  // Không nên ntn, sẽ  thực thi sau mỗi lần re-render
  // const total = money.reduce((total, cur) => total + cur);

  const [counter, setCounter] = useState(() => {
    const total = money.reduce((total, cur) => total + cur);

    return total;
  });

  const handleIncrease = () => {
    // setCounter(counter + 1);
    setCounter((preState) => preState + 1);
  };
  console.log("oke");
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
