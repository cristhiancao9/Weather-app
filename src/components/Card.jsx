import React from "react";
import Style from "../components/Card.module.css";
/* import Clock from "./Time"; */
export default function Card({ min, max, name, imge, onClose }) {
  return (
    <div className={Style.principal}>
      <div className={Style.container}>
        <div className={Style.btnDiv}>
          <button className={Style.xBtn} onClick={onClose}>
            X
          </button>
        </div>
        <h1 className={Style.espaciosMinMax} className={Style.colorTitulo}>
          {name}
        </h1>
        <div className={Style.maxMin}>
          <div>
            <h4 className={Style.espaciosMinMax}>Min</h4>
            <h4 className={Style.espaciosMinMax}>{min}ºC</h4>
          </div>
          <div>
            <h4 className={Style.espaciosMinMax}>Max</h4>
            <h4 className={Style.espaciosMinMax}>{max}ºC</h4>
          </div>
          <div>
            <img
              className={Style.tamañoImg}
              src={"https://openweathermap.org/img/wn/" + imge + "@2x.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
