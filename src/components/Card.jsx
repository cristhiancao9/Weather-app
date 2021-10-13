import React from "react";
import "../components/Card.css";
import Clock from "./Time";
export default function Card({ min, max, name, img, onClose }) {
  return (
    <div className="card">
      <div className="container">
        <div id="closeIcon" className="row">
          <button onClick={onClose} className="btn">
            X
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img
                src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
                width="90"
                height="90"
                alt=""
              />
            </div>
            <div>
              <Clock></Clock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
