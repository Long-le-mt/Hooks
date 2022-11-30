import { memo, useEffect, useRef, useState } from "react";

function Content(props) {
  const { count, handlerCount } = props;
  const handleIncrease = () => {
    handlerCount(20);
  };

  console.log("re-render");
  return (
    <div>
      <h1>hello anh em</h1>
      <button onClick={handleIncrease}>Content increase</button>
    </div>
  );
}

export default memo(Content);
