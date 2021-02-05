import React, { useState } from 'react'
import styled from 'styled-components';

import { Header } from './Componentes/Header';
import { FormularioTareas } from './Componentes/FormularioTareas';


const Contenedor__app = styled.div`
box-shadow: 0 2px 10px rgba(139,139,139,.25);
border-radius: 3px;
display: grid;
height: 100%;
grid-template-rows: auto auto 1fr;
overflow: auto;
max-width: 700px;
max-height: 90vh;
width: 100%;
`;
export const App = () => {

  //Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState([{
    id: 1,
    descripcion: "Fabian es lindo",
    completado: false
  }]);

  return (
    <Contenedor__app>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </Contenedor__app>
  )
};
