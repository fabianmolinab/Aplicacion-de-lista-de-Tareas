import React, { useState } from 'react'

import { Header } from './Componentes/Header';
import { FormularioTareas } from './Componentes/FormularioTareas';
import { Contenedor } from './elementos/Contenedor';
import { ListaTareas } from './Componentes/ListaTareas';

export const App = () => {

  //Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState([]);

  return (
    <Contenedor>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </Contenedor>
  )
};