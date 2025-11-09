import React from "react";

function Profile() {
  return (
    <div className="profile">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="age">Age</label>
      <input type="text" id="age" name="age" />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
    </div>
  );
}

export default Profile;
