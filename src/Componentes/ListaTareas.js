import React from 'react'
import { Tarea } from './Tarea'

export const ListaTareas = ({ tareas }) => {
  return (
    <ul>
      {
        (tareas.length > 0) ? tareas.map((tarea) => {

          return <Tarea
            key={tarea.id}
            tarea={tarea}
          />
        })
          : <div>----Aun no hay tareas----</div>
      }
    </ul>
  )
}
