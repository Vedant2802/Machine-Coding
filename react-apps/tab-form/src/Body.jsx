import React from "react";
import Settings from "./Settings";
import Interests from "./Interests";
import Profile from "./Profile";

function Body({ tabToSet }) {
  let Component;

  switch (tabToSet) {
    case "profile":
      Component = <Profile />;
      break;
    case "settings":
      Component = <Settings />;
      break;
    case "interests":
      Component = <Interests />;
      break;
    default:
      Component = <Profile />; // fallback
  }

  return <div>{Component}</div>;
}

export default Body;
