import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  });

  const handleAddJob = () => {
    const newJobs = [...jobs, job];

    // Save to local Storage
    localStorage.setItem("jobs", JSON.stringify(newJobs));
    setJobs([...jobs, job]);
    setJob("");
  };

  return (
    <div className="App">
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAddJob}>Add job</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
