import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import "./components/style.css";
function App() {
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          let found = false;
          for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === ciudad.name) {
              found = true;
              break;
            }
          }
          if (found) {
            alert("Selecciona otra ciudad");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <div class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div>
        <Cards cities={cities} onClose={onClose}></Cards>
      </div>
    </div>
  );
}

export default App;
