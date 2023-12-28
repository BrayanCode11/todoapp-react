import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          alt="logo"
          className="freecodecamp-logo"
        />
      </div>
    </div>
  );
}

export default App;
