import React from "react";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const bars = [5, 10, 15, 40, 60, 70];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>Progress Bar</div>
      {show && bars.map((p) => <ProgressBar progress={p} key={`${p + 5}`} />)}
    </>
  );
}

export default App;
