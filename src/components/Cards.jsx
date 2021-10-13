import React from "react";
import Card from "./Card.jsx";
import "./Cards.css";
export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities &&
        cities.map((elemento, i) => (
          <Card
            max={elemento.max}
            min={elemento.min}
            name={elemento.name}
            img={elemento.img}
            key={i}
            onClose={() => onClose(elemento.id)}
          />
        ))}
    </div>
  );
}
