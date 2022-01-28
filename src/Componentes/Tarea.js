import React, { useState } from 'react'

// Estilos
import { IconCheck, Iconos } from '../Estilos/Iconos.styles'
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import {
  ListaTareasStyles,
  ListaTareasTextoStyles
} from '../Estilos/ListaTareas.styles'
import { ContenedorFlex } from '../Estilos/ContenedorFlex.styles'

// Componentes
import { EditarTareas } from './EditarTareas'

export const Tarea = ({ tarea, toogleCompletada, borrarTarea }) => {
  // Estado para mostar la sección de editar tarea
  const [editandoTarea, cambiarEditandoTarea] = useState(false)

  // Cambia el estado para que se muestre el form editar
  const cambiarEstadoEditar = () => {
    cambiarEditandoTarea(!editandoTarea)
  }

  return (
    <ListaTareasStyles>
      <IconCheck
        icon={tarea.completada ? faCheckSquare : faSquare}
        onClick={() => toogleCompletada(tarea.id)}
        formicon="true"
        listaicon
      />
      <ListaTareasTextoStyles>
        {/* Condicional que permite si: editandoTarea esta true muestra todo el formulario para mostrar el formulario de edicion */}
        {editandoTarea
          ? (
          <EditarTareas
            tarea={tarea}
            editandoTarea={editandoTarea}
            cambiarEditandoTarea={cambiarEditandoTarea}
          />
            )
          : (
              tarea.texto
            )}
      </ListaTareasTextoStyles>
      <ContenedorFlex>
        <Iconos icon={faEdit} onClick={cambiarEstadoEditar} listaicon />
        <Iconos
          icon={faTimes}
          onClick={() => borrarTarea(tarea.id)}
          listaicon
        />
      </ContenedorFlex>
    </ListaTareasStyles>
  )
}
