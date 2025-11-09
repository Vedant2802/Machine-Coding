import { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import "./tabform.css";

export function Tabform() {
  const [currentTab, setCurrentTab] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });
  console.log(currentTab);
  console.log(formData);
  return (
    <div className="main">
      <Header setCurrentTab={setCurrentTab} />
      <Body tabToSet={currentTab} setFormData={setFormData} />
    </div>
  );
}
