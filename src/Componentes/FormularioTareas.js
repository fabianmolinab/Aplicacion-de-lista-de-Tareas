import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { BotonStyles } from '../Estilos/Boton.styles';
import { FormularioStyles } from '../Estilos/Formulario.styles';
import { Iconos } from '../Estilos/Iconos.styles';
import { InputStyle } from '../Estilos/InputStyle';

export const FormularioTareas = ({ tareas, cambiarTareas }) => {

  const [inputTarea, cambiarInputTarea] = useState('');

  //Permite modificar el formulario del ingresar tarea
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  }

  // Ejecuta el Submit y agrega la tarea
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTarea !== '') {
      cambiarTareas(
        [
          ...tareas,
          {
            id: uuidv4(),
            texto: inputTarea,
            completada: false
          }
        ]
      );
      cambiarInputTarea('');
    }
  }

  return (
    <FormularioStyles action="" onSubmit={handleSubmit}>
      {/* Estilos de tipo Input */}
      <InputStyle
        type="text"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />

      <BotonStyles>
        <Iconos formicon="true" icon={faPlusSquare} />
      </BotonStyles>
    </FormularioStyles>
  );
}
