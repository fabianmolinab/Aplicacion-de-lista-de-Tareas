import React from 'react'
import { Tarea } from './Tarea'

export const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {

  const toogleCompletada = (id) => {

    cambiarTareas(tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }

      } return tarea

    }));
  }

  const borrarTarea = (id) => {

    cambiarTareas(tareas.filter((tarea) => {
      if (tarea.id !== id) {
        return tarea;
      }
      return;
    }));
  }

  return (
    <ul>
      {
        (tareas.length > 0) ? tareas.map((tarea) => {
          // Mostrar completadas
          if (mostrarCompletadas) {
            return <Tarea
              key={tarea.id}
              tarea={tarea}
              toogleCompletada={toogleCompletada}
              borrarTarea={borrarTarea}
            />
            //Mostrar no completadas
          } else if (!tarea.completada) {
            return <Tarea
              key={tarea.id}
              tarea={tarea}
              toogleCompletada={toogleCompletada}
              borrarTarea={borrarTarea}
            />
          }
          return;

        })
          : <div>----Aun no hay tareas----</div>
      }
    </ul>
  )
}
