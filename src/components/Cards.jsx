import React from "react";
import Card from "./Card.jsx";
import "./Cards.css";
export default function Cards(props) {
  return (
    <div className="cards">
      {props.cities.map((elemento, i) => (
        <Card
          max={elemento.main.temp_max}
          min={elemento.main.temp_min}
          name={elemento.name}
          img={elemento.weather[0].icon}
          key={i}
        />
      ))}
    </div>
  );
}
