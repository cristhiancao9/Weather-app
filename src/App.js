import Nav from "./components/Nav.jsx";
import "./App.css";
import Card from "./components/Card.jsx";
import data from "./data.js";
function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
