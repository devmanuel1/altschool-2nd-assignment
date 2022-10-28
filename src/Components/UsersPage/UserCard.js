import React from "react";
import "../../Styles/UserCard.css";

const Handler = ({ user }) => {
  const {
    picture: { large },
    name: { title, first, last },
    location: { city, country },
    cell,
    email,
    registered: {date}

  } = user;

  return (
    <div className="user_card_container">
      {/* card image side div  */}
      <div className="card_image_div">
        <img src={large} alt="user-img" />
      </div>

      {/* information text div  */}
      <div className="card_text_div">
        <h3>{title + " " + first + " " + last}</h3>
        <i>Location: {city+ ", " + country}</i>
        <span>Phone: {cell}</span>
        <span>Email: {email}</span>
        <span>Registered: {date}</span>
      </div>
    </div>
  );
};

export default Handler;
