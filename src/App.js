import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import ListaDeTareas from "./Components/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt="logo" className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
