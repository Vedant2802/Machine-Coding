import React, { useEffect, useRef, useState } from "react";

function App() {
  const OTP_LENGTH = 5;
  const [inputArr, setInputArr] = useState(Array(OTP_LENGTH).fill(""));
  const refArr = useRef([]);

  const handleOnChange = (raw, index, e) => {
    const digit = (raw || "").replace(/\D/g, "").slice(-1);
    setInputArr((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    digit && refArr.current[index + 1]?.focus();
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !inputArr[index]) {
      refArr.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <>
      <h1>Validate OTP</h1>
      <div className="otp-container">
        {Array.from({ length: OTP_LENGTH }, (_, index) => (
          <input
            key={index}
            id={`input_${index}`}
            type="text"
            className="otp"
            maxLength={1}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e.target.value, index, e)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (refArr.current[index] = el)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
