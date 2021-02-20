import React, { useState } from 'react'

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
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
      />
      <button type="submit">
        Actualizar
      </button>
    </form>
  )
}
