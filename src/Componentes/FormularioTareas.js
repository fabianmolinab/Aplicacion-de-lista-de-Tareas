import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState('');

  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    cambiarTareas(
      [
        ...tareas,
        {
          id: 4,
          texto: inputTarea,
          completada: false
        }
      ]
    );
    cambiarInputTarea('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </form>
  );
}
