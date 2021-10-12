import React from "react";
import Card from "./Card.jsx";
import "./Cards.css";
export default function Cards(props) {
  return (
    <div className="cards">
      {props.cities &&
        props.cities.map((elemento, i) => (
          <Card
            max={elemento.max}
            min={elemento.min}
            name={elemento.name}
            img={elemento.img}
            key={i}
          />
        ))}
    </div>
  );
}
