import React, { useEffect, useState } from 'react'

import { Header } from './Componentes/Header';
import { FormularioTareas } from './Componentes/FormularioTareas';
import { Contenedor } from './elementos/Contenedor.styles';
import { ListaTareas } from './Componentes/ListaTareas';

export const App = () => {

  //Valor inicial con las tareas del LocalStorage
  const tareasGuardadas = localStorage.getItem('tareas') ?
    JSON.parse(localStorage.getItem('tareas'))
    : [];

  //Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardando en el LocalStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  //Hook para mostrar tareas completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);

  //Estado Mostrar Completadas
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

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