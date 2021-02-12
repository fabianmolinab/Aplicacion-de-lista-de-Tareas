import React from 'react'
import { Tarea } from './Tarea'

export const ListaTareas = ({ tareas, cambiarTareas }) => {

  const toogleCompletada = (id) => {

    cambiarTareas(tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }

      } return tarea

    }));
  }

  return (
    <ul>
      {
        (tareas.length > 0) ? tareas.map((tarea) => {

          return <Tarea
            key={tarea.id}
            tarea={tarea}
            toogleCompletada={toogleCompletada}
          />
        })
          : <div>----Aun no hay tareas----</div>
      }
    </ul>
  )
}
