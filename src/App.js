import Nav from "./components/Nav.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import data from "./data.js";
function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Cards cities={data}></Cards>
      </div>
    </div>
  );
}

export default App;
