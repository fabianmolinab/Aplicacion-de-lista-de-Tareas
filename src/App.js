import React, { useState } from 'react'

import { Header } from './Componentes/Header';
import { FormularioTareas } from './Componentes/FormularioTareas';
import { Contenedor } from './elementos/Contenedor';
import { ListaTareas } from './Componentes/ListaTareas';

export const App = () => {

  //Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState([]);

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);



  return (
    <Contenedor>
      <Header
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
        mostrarCompletadas={mostrarCompletadas}
      />

      <FormularioTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
      />

      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </Contenedor>
  )
};