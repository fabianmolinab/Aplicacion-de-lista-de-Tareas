import React, { useState } from 'react'

import { Header } from './Componentes/Header';
import { FormularioTareas } from './Componentes/FormularioTareas';
import { Contenedor } from './elementos/Contenedor';

export const App = () => {

  //Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState([]);
  console.log(tareas);

  return (
    <Contenedor>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </Contenedor>
  )
};
