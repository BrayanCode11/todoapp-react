import React from "react";
import "../styles/Tarea.css"

function Tareas({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-icono">Elimminar</div>
    </div>
  );
}

export default Tareas;
