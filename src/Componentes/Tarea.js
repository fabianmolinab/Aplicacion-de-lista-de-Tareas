import React, { useState } from 'react';
import { Iconos } from '../elementos/Iconos';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'


export const Tarea = ({ tarea, toogleCompletada }) => {

  const [editandoTarea, cambiarEditandoTarea] = useState(false);

  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  //Cambia el estado para que se muestre el form editar
  const cambiarEstadoEditar = () => {
    cambiarEditandoTarea(!editandoTarea)
  }

  //Permite editar la tarea
  const handleInputChange = (e) => {
    e.preventDefault();
    cambiarNuevaTarea(e.target.value);
  }

  // Al realizar el submit, oculta y cambiar la tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarEstadoEditar(false);
    tarea.texto = `${nuevaTarea}`;
  }


  return (
    <li>
      <Iconos
        icon={tarea.completada ? faCheckSquare : faSquare}
        onClick={() => toogleCompletada(tarea.id)}
        formicon="true"
      />
      <div>
        {editandoTarea
          ?
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              value={nuevaTarea}
              onChange={handleInputChange}
            />
            <button type="submit">
              Actualizar
            </button>
          </form>
          : tarea.texto
        }
      </div>
      <div>
        <Iconos icon={faEdit} onClick={cambiarEstadoEditar} />
        <Iconos icon={faTimes} />
      </div>
    </li>
  )
}