import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import "./tabform.css";

export function Tabform() {
  const [currentTab, setCurrentTab] = useState(null);
  console.log(currentTab);
  return (
    <div className="main">
      <Header setCurrentTab={setCurrentTab} />
      <Body tabToSet={currentTab} />
    </div>
  );
}
