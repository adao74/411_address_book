import React from "react";

const User = ({ user, HandleClick, isVisible, index }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <section>
      <h1>{fullName}</h1>
      <img src={user.picture.thumbnail} alt={`${fullName}'s thumbnail`} /><br/>
      <button onClick={() => HandleClick(index)}>
        {isVisible ? "Click to hide" : "Click to show"}
      </button>
      <section style={{ display: isVisible ? "block" : "none" }}>
        Cell phone: {user.cell} <br />
        Home phone: {user.phone} <br />
        Age: {user.dob.age} <br />
        DOB: {user.dob.date} <br />
        Email: {user.email} <br />
        Gender: {user.gender} <br />
        City: {user.location.city} <br />
        Coordinates: {user.location.coordinates.latitude}, {user.location.coordinates.longitude} <br />
        Country: {user.location.country} <br />
        Postcode: {user.location.postcode} <br />
        State: {user.location.state} <br />
        Street: {user.location.street.number}, {user.location.street.name} <br />
        Timezone: {user.location.timezone.description}, {user.location.timezone.offset} <br />
        Nationality: {user.nat} <br />
        Registered (date, age): {user.registered.date}, {user.registered.age}
      </section>
    </section>
  );
};

export default User;
