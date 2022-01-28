import React, { useState } from 'react'
import styled from 'styled-components'

// Styles!
import { InputEditarTarea } from '../Estilos/InputEditarTarea'
import { BotonEditarTareas } from '../Estilos/Boton.styles'
// :)

export const EditarTareas = ({ tarea, editandoTarea, cambiarEditandoTarea }) => {
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto)

  // Permite editar el formulario de la tarea
  const handleInputChange = (e) => {
    e.preventDefault()
    cambiarNuevaTarea(e.target.value)
  }

  // Al realizar el submit, oculta y cambia la tarea
  const handleSubmit = (e) => {
    e.preventDefault()
    cambiarEditandoTarea(!editandoTarea)
    tarea.texto = `${nuevaTarea}`
  }

  return (
    // <form>
    <FormularioEditarTarea action="" onSubmit={handleSubmit}>
      {/* Input type text */}
      <InputEditarTarea
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
      />

      {/* Buton */}
      <BotonEditarTareas type="submit">
        Actualizar
      </BotonEditarTareas>
    </FormularioEditarTarea>
  )
}

const FormularioEditarTarea = styled.form`
  display: flex;
`
