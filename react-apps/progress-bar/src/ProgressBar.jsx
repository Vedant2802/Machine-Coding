import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(progress);
    }, 50);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{ transform: `translateX(${offset}px)` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
