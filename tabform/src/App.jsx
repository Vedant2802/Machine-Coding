import { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details";
import Interests from "./components/Interests";
import Settings from "./components/Settings";

function App() {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { name: "details", Component: <Details /> },
    { name: "interests", Component: <Interests /> },
    { name: "settings", Component: <Settings /> },
  ];

  const tabMap = {
    details: <Details />,
    interests: <Interests />,
    settings: <Settings />,
  };

  return (
    <div className="main-container">
      <header className="tabs">
        {tabs.map((item, index) => (
          <nav
            key={index}
            className="items"
            onClick={() => setActiveTab(item.name)}
          >
            {item.name}
          </nav>
        ))}
      </header>
      <div className="component">{tabMap[activeTab]}</div>
    </div>
  );
}

export default App;
