import React, { useState, useEffect } from "react";

const Card = ({ image, name, status, species, location, origin }) => {
  const [alive, setAlive] = useState();
  useEffect(() => {
    if (status === "Alive") {
      setAlive("greenyellow");
    } else if (status === "Dead") {
      setAlive("red");
    } else {
      setAlive("grey");
    }
  }, [status]);

  return (
    <div className="card-block">
      <img className="characters-image" src={image} alt="img" />
      <div className="cartoon-card">
        <a href="##" className="characters-name">
          {name}
        </a>
        <div className="live-conteiner">
          <p className="live-circle" style={{ background: alive }}></p>
          <span>{status}</span> - <span>{species}</span>
        </div>
        <p className="back-lettering">Last known location:</p>
        <a href="##" className="orange-hover location">
          {location.name}
        </a>
        <p className="back-lettering">First seen in:</p>
        <a href="##" className="orange-hover location">
          {origin.name}
        </a>
      </div>
    </div>
  );
};

export default Card;
