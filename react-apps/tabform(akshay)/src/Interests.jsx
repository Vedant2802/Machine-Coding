import React from "react";

function Interests({ data: { interests }, setData }) {
  const handleDataChange = (e, name) => {
    setData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name]
        : prevData.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="travelling"
          id=""
          checked={interests.includes("travelling")}
          onChange={(e) => handleDataChange(e, name)}
        />
        Travelling
      </label>
      <label>
        <input
          type="checkbox"
          name="music"
          id=""
          checked={interests.includes("music")}
          onChange={(e) => handleDataChange(e, name)}
        />
        Music
      </label>
    </div>
  );
}

export default Interests;
