import React from "react";
import Settings from "./Settings";
import Interests from "./Interests";
import Profile from "./Profile";

function Body({ tabToSet, setFormData }) {
  let Component;

  switch (tabToSet) {
    case "profile":
      Component = <Profile setFormData={setFormData} />;
      break;
    case "settings":
      Component = <Settings />;
      break;
    case "interests":
      Component = <Interests />;
      break;
    default:
      Component = <Profile setFormData={setFormData} />; // fallback
  }

  return <div>{Component}</div>;
}

export default Body;
