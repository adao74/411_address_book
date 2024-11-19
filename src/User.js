import React from "react";

const User = ({user, HandleClick, isVisible, index}) => {

    return (
        <section>
            <h1>{user.name}</h1>
            <img src={user.picture.thumbnail}></img>
            <button onClick={ () => HandleClick(index)}>{isVisible? "Click to hide" : "Click to show"}</button>
            <section style={{display: isVisible? "block" : "none" }}>yoyoo</section>
        </section>
    )
}

export default User