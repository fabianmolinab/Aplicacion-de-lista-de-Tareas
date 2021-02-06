import React, { useState } from 'react'

import { Header } from './Componentes/Header';
import { FormularioTareas } from './Componentes/FormularioTareas';
import { Contenedor } from './elementos/Contenedor';

export const App = () => {

  //Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState([{
    id: 1,
    descripcion: "Fabian es lindo",
    completado: false
  }]);

  return (
    <Contenedor>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </Contenedor>
  )
};
