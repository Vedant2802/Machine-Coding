import React from "react";

function Settings({ data: { theme }, setData }) {
  const handleDataChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          checked={theme == "dark"}
          name="dark"
          onChange={(e) => handleDataChange(e)}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          checked={theme == "light"}
          name="light"
          // this is required when you want to pass extra args along with e
          //   onChange={(e) => handleDataChange(e)}
          // you can write this like this also
          onChange={handleDataChange}
        />
        Light
      </label>
    </div>
  );
}

export default Settings;
