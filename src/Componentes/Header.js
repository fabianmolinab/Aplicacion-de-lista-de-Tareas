import React from 'react';
import styled from 'styled-components';

import { BotonHeader } from './BotonHeader';
import { Tituloh1 } from '../elementos/Tituloh1';
import { Contenedor } from '../elementos/Contenedor';

const Encabezado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background:  #007AEA;
  color: #fff;
  border-radius: 3px 3px 0px 0px;
`;



export const Header = ({ cambiarMostrarCompletadas, mostrarCompletadas }) => {
  return (
    <Contenedor>
      <Encabezado>
        <Tituloh1> Lista de Tareas</Tituloh1>
        {/* ---Boton no completado--- */}


        <BotonHeader
          cambiarMostrarCompletadas={cambiarMostrarCompletadas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </Encabezado>
    </Contenedor>
  )
};
