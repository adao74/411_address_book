import React from "react";

const User = ({ user, HandleClick, isVisible, index }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <section>
      <h1>{fullName}</h1>
      <img src={user.picture.thumbnail} alt={`${fullName}'s thumbnail`} />
      <button onClick={() => HandleClick(index)}>
        {isVisible ? "Click to hide" : "Click to show"}
      </button>
      <section style={{ display: isVisible ? "block" : "none" }}>yoyoo</section>
    </section>
  );
};

export default User;
