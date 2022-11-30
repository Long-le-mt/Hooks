import { upload } from "@testing-library/user-event/dist/upload";
import { useMemo, useReducer, useRef, useState } from "react";
import "./App.css";

// useState
// 1. Init state: 0
// 2. Actions: Up(state + 1) / Down(state - 1)

// useReducer
// Init state
// Actions: Up(state + 1) / Down(state - 1)
// Reducer
// Dispatch

// Init state
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
// state là initState mà do ta khởi tạo
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalia action");
  }
};

function App() {
  // Chạy lần đầu tiên nhưng hàm reducer chưa thực thi
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
