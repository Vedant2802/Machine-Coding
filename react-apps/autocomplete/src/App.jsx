import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]); // start as []
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const getData = async (param) => {
    if (cache[input]) {
      setData(cache[input]);
      return;
    }

    const res = await fetch(`https://dummyjson.com/recipes/search?q=${param}`);
    const json = await res.json();
    setData(Array.isArray(json.recipes) ? json.recipes : []);
    setCache((prev) => ({
      ...prev,
      [input]: json?.recipes,
    }));
  };

  useEffect(() => {
    if (!input.trim()) {
      setData([]);
      return;
    }
    const timer = setTimeout(() => getData(input), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search recipes..."
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <div className="result-container">
          {data.map((r) => (
            <span key={r.id} className="results">
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
