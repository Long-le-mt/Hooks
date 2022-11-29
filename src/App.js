import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkedRadioId, setCheckedRadioId] = useState();
  const [listCheckedCheckBoxId, setListCheckedCheckBoxId] = useState([]);

  const handleSubmit = () => {
    console.log("submit", {
      name,
      email,
      checkedRadioId,
      listCheckedCheckBoxId,
    });
  };

  const handleCheck = (id) => {
    const checked = listCheckedCheckBoxId.includes(id);
    console.log("checked", checked);
    if (checked) {
      // uncheck
      const newChecked = listCheckedCheckBoxId.filter((item) => item !== id);
      setListCheckedCheckBoxId(newChecked);
    } else {
      setListCheckedCheckBoxId([...listCheckedCheckBoxId, id]);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checkedRadioId === course.id}
            onChange={(e) => setCheckedRadioId(course.id)}
          />
          {course.name}
        </div>
      ))}

      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={listCheckedCheckBoxId.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
