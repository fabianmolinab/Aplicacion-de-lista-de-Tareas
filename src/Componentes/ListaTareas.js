import React from 'react'
import styled from 'styled-components';
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
    <ListaUl>
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
          : <MensajeListaTareas>----Aun no hay tareas----</MensajeListaTareas>
      }
    </ListaUl>
  )
}

// Estilos

export const ListaUl = styled.ul`
  list-style: none;
	height: 100%;
	overflow: auto;
`
export const MensajeListaTareas = styled.div`
  text-align: center;
	color: #b8b8b8;
	font-size: 20px;
	padding: 40px 20px;

`
