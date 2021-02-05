import React from 'react';
import styled from 'styled-components';

import { Boton } from '../elementos/Boton';
import { IconoNoCompletado } from '../elementos/IconoNoCompletado';

const Contenedor = styled.div`
    max-width: 700px;
    width: 100%;
    height: 100%;
    max-height: 90vh;
    overflow: auto;
    box-shadow: 0 2px 10px rgba(139,139,139,.25);
    border-radius: 3px;
    display: grid;
    grid-template-rows: auto auto 1fr;

  `;
const Encabezado = styled.header`
  //--verde: #80BE4E;
  --azul: #007AEA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background: var(--azul);
  color: #fff;
  border-radius: 3px 3px 0px 0px;
`;

const TituloHeader = styled.h1`
    font-weight: 400;
	  font-size: 24px;
   `;

export const Header = () => {

  return (

    <Contenedor>
      <Encabezado>
        <TituloHeader> Lista de Tareas</TituloHeader>
        <Boton>
          No mostrar completadas
          <IconoNoCompletado />
        </Boton>
      </Encabezado>
    </Contenedor>
  )
};
