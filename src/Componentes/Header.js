import React from 'react';

import { Encabezado } from '../Estilos/Encabezado.styles';
import { Contenedor } from '../Estilos/Contenedor.styles';
import { Tituloh1 } from '../Estilos/Tituloh1.styles';
import { BotonHeader } from './BotonHeader';


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
