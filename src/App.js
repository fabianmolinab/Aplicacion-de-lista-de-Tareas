import React from 'react'
import styled from 'styled-components';

import { Header } from './Componentes/Header';

export const App = () => {

  const Contenedor = styled.div`
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

  return (

    <Contenedor>
      <Header />
    </Contenedor>
  )
};
