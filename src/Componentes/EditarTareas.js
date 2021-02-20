import React, { useState } from 'react'
import styled from 'styled-components';

import { InputEditarTarea } from '../Estilos/InputEditarTarea';
import { BotonEditarTareas } from '../Estilos/Boton.styles';

export const FormularioEditarTareas = ({ tarea, editandoTarea, cambiarEditandoTarea }) => {

  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  //Permite editar el formulario de la tarea
  const handleInputChange = (e) => {
    e.preventDefault();
    cambiarNuevaTarea(e.target.value);
  }

  // Al realizar el submit, oculta y cambia la tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarEditandoTarea(!editandoTarea);
    tarea.texto = `${nuevaTarea}`;
  }

  return (
    <FormularioEditarTarea action="" onSubmit={handleSubmit}>
      <InputEditarTarea
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
      />
      <BotonEditarTareas type="submit">
        Actualizar
      </BotonEditarTareas>
    </FormularioEditarTarea>
  )
}

const FormularioEditarTarea = styled.form`
  background: none;
  display: flex;
  font-size: 20px;
	font-family: 'Roboto', sans-serif;
`
