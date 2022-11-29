import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(`Mounted or Re-render lần ${count}`);

    return () => {
      console.log(`Clean up lần ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
}

export default Content;
