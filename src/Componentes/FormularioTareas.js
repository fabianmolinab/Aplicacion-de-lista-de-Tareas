import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { InputFormulario } from './InputFormulario';
import { BotonStyles } from '../Estilos/Boton.styles';
import { FormularioStyles } from '../Estilos/Formulario.styles';
import { Iconos } from '../Estilos/Iconos.styles';

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

      <BotonStyles>
        <Iconos formicon="true" icon={faPlusSquare} />
      </BotonStyles>
    </FormularioStyles>
  );
}
