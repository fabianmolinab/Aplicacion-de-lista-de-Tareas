import React, { useState } from 'react'
import { InputFormulario } from './InputFormulario';
import { BotonFormulario } from './BotonFormulario';

import styled from 'styled-components';


const FormularioTareasStyles = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
padding: 20px;
box-shadow: 0 2px 10px rgba(139,139,139,.25);
`

export const FormularioTareas = ({ tareas, cambiarTareas }) => {

  const [inputTarea, cambiarInputTarea] = useState('');

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
    <FormularioTareasStyles action="" onSubmit={handleSubmit}>

      <InputFormulario
        inputTarea={inputTarea}
        cambiarInputTarea={cambiarInputTarea}
      />

      <BotonFormulario />
    </FormularioTareasStyles>
  );
}
