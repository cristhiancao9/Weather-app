import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button>X</button>
      </div>
      <div>
        <h5 className="card-title">Bogotá</h5>
        <div>
          <div>
            <p>Min</p>
            <p>12°</p>
          </div>
          <div>
            <p>Max</p>
            <p>27°</p>
          </div>
          <div>
            <img src="" width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
