import React from "react";

function Tareas({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-icono">Elimminar</div>
    </div>
  );
}

export default Tareas;
