import React from "react";
import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-icono">
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  );
}

export default Tareas;
