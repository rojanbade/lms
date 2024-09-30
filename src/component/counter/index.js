import React, { useState } from "react";
import Navbar from "../navbar";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Navbar />
      <h1>You Clicked {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default Counter;
