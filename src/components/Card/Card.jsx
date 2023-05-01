import React from "react";
import "./Card.css";

const Card = ({ userName, profilImage,profilUrl }) => {
  return (
    <div className="cardContainer">
      <img src={profilImage} alt="" />
      <p>{userName}</p>
      
      <a href={profilUrl} target="_blank">Read More</a>
    </div>
  );
};

export default Card;
