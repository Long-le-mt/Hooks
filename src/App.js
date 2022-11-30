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
const initState = {
  job: "",
  jobs: [],
};

// Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    payload: payload,
    type: SET_JOB,
  };
};

const addJob = (payload) => {
  return {
    payload: payload,
    type: ADD_JOB,
  };
};

const deleteJob = (payload) => {
  return {
    payload,
    type: DELETE_JOB,
  };
};
// Reducer
// state là initState mà do ta khởi tạo
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      const newState = {
        ...state,
        job: action.payload,
      };

      console.log(newState);
      return newState;
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("invalia action");
  }
};

function App() {
  // Chạy lần đầu tiên nhưng hàm reducer chưa thực thi
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };

  return (
    <div>
      <h3>To do</h3>
      <input
        type="text"
        placeholder="Enter todo...."
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
