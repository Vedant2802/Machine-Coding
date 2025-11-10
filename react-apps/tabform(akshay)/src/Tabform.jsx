import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

function Tabform() {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "Akshat",
    age: 25,
    email: "akshat.shanky@gmail.com",
    interests: ["travelling"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data?.name?.trim()) {
          err.name = "Name cannot be empty";
        }
        setError(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (!data?.interests?.length) {
          err.interests = "Select at least one";
        }
        setError(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => true,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prev) => prev - 1);
  };
  const handleSubmitClick = () => {
    //Make api call
    console.log(data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      {activeTab === tabs.length - 1 && (
        <button onClick={handleSubmitClick}>Submit</button>
      )}
      {activeTab < tabs.length - 1 && (
        <button onClick={handleNextClick}>Next</button>
      )}
      {activeTab > 0 && <button onClick={handlePrevClick}>Previous</button>}
    </div>
  );
}

export default Tabform;
