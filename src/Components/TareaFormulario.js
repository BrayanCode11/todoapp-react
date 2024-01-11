import { useState } from "react";
import React from "react";
import "../styles/TareaFormulario.css";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    const tareaNueva = {
      id: "32323",
      texto: "Hola",
    };
  };

  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
