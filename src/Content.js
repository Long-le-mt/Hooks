import { memo, useEffect, useRef, useState } from "react";

function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <div>
      <h1>hello anh em</h1>
      <button onClick={onIncrease}>Content increase</button>
    </div>
  );
}

export default memo(Content);
