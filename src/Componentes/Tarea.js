import React, { useState } from 'react';
import { Iconos } from '../Estilos/Iconos.styles';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FormularioEditarTareas } from './EditarTareas';


export const Tarea = ({ tarea, toogleCompletada, borrarTarea }) => {

  //Estado para mostar la sección de editar tarea
  const [editandoTarea, cambiarEditandoTarea] = useState(false);

  //Cambia el estado para que se muestre el form editar
  const cambiarEstadoEditar = () => {
    cambiarEditandoTarea(!editandoTarea)
  }




  return (
    <li>
      <Iconos
        icon={tarea.completada ? faCheckSquare : faSquare}
        onClick={() => toogleCompletada(tarea.id)}
        formicon="true"
      />
      <div>
        {/* Condicional que permite si: editandoTarea esta true muestra todo el formulario para mostrar el formulario de edicion */}
        {editandoTarea
          ?
          <FormularioEditarTareas
            tarea={tarea}
            editandoTarea={editandoTarea}
            cambiarEditandoTarea={cambiarEditandoTarea}
          />
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