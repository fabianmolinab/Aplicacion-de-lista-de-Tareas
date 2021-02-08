import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { InputFormulario } from './InputFormulario';
import { BotonFormulario } from './BotonFormulario';
import { FormularioStyles } from '../elementos/FormularioStyles';

export const FormularioTareas = ({ tareas, cambiarTareas }) => {

  const [inputTarea, cambiarInputTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <FormularioStyles action="" onSubmit={handleSubmit}>

      <InputFormulario
        inputTarea={inputTarea}
        cambiarInputTarea={cambiarInputTarea}
      />

      <BotonFormulario />
    </FormularioStyles>
  );
}
