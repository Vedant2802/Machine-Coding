import React from "react";

function Profile({ data: { name, email, age }, setData }) {
  //   const { name, age, email } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <label>Name : </label>
      <input
        type="text"
        name=""
        id="name"
        value={name}
        onChange={(e) => handleDataChange(e, "name")}
      />
      <label>Email : </label>
      <input
        type="text"
        name=""
        id="email"
        value={email}
        // onChange={handleDataChange}
        onChange={(e) => handleDataChange(e, "email")}
      />
      <label>Age : </label>
      <input
        type="number"
        name=""
        id="age"
        value={age}
        // onChange={handleDataChange}
        onChange={(e) => handleDataChange(e, "age")}
      />
    </div>
  );
}

export default Profile;
