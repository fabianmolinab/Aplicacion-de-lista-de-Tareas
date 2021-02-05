import React from 'react'
import styled from 'styled-components'


export const InputFormulario = ({ inputTarea, cambiarInputTarea }) => {

  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  }

  return (
    <Input
      type="text"
      placeholder="Escribe una tarea"
      value={inputTarea}
      onChange={(e) => handleInput(e)}
    />
  )
}
const Input = styled.input`
  border: none;
	padding: 15px;
	width: 100%;
	font-size: 20px;
	font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid #b8b8b8;
  &:focus {
    outline: none;
	  border-bottom: 2px solid #007AEA; 
  }
`
