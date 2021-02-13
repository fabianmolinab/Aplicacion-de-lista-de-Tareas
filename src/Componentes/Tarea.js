import React, { useState } from 'react';
import { Iconos } from '../elementos/Iconos';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'


export const Tarea = ({ tarea, toogleCompletada, borrarTarea }) => {

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

  // Al realizar el submit, oculta y cambia la tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarEditandoTarea(!editandoTarea);
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
        <Iconos icon={faTimes} onClick={() => borrarTarea(tarea.id)} />
      </div>
    </li>
  )
}