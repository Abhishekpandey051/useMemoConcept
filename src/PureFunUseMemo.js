import React, { useMemo, useState } from "react";

function PureFuncUseMemo() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(5);

  const multiCountMemo = useMemo(
    function multicount() {
      console.log("Multi count");

      return count * 2;
    },
    [count]
  );

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update count</button>

      <button onClick={() => setItem(item * 5)}>Update Item</button>
    </>
  );
}

export default PureFuncUseMemo;
