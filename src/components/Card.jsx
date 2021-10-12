import React from "react";
import "../components/Card.css";
export default function Card({ min, max, name }) {
  return (
    <div className="card">
      <div className="container">
        <div id="closeIcon" className="row">
          <button className="btn btn-sm btn-danger">X</button>
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
              <img src="" width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
