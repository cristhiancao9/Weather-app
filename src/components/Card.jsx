import React from "react";
import "../components/Card.css";
/* import Clock from "./Time"; */
export default function Card({ min, max, name, img, onClose }) {
  return (
    <div className="principal">
      <div className="container">
        <div className="btnDiv">
          <button className="xBtn" onClick={onClose}>
            X
          </button>
        </div>
        <h1 className="espaciosMinMax">{name}</h1>
        <div className="maxMin">
          <div>
            <h4 className="espaciosMinMax">Min</h4>
            <h4 className="espaciosMinMax">{min}ºC</h4>
          </div>
          <div>
            <h4 className="espaciosMinMax">Max</h4>
            <h4 className="espaciosMinMax">{max}ºC</h4>
          </div>
          <div>
            <img
              className="tamañoImg"
              src={"https://openweathermap.org/img/wn/" + img + "@2x.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
