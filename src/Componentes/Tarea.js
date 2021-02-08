import React from 'react';
import { Iconos } from '../elementos/Iconos';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'


export const Tarea = ({ tarea }) => {
  return (

    <li>
      <Iconos
        icon={faCheckSquare}
        formicon="true"
      />
      <div>
        {tarea.texto}
      </div>
      <div>
        <Iconos icon={faEdit} />
        <Iconos icon={faTimes} />
      </div>
    </li>
  )
}