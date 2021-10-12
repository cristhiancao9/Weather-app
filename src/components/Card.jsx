import React from "react";
import "../components/Card.css";
export default function Card() {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button className="btn btn-sm btn-danger">X</button>
      </div>
      <div className="card-body">
        <h5 className="card-title">Bogotá</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>12°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>27°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img src="" width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
