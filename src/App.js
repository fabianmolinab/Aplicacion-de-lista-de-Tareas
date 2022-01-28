import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FormularioTareas } from './Componentes/FormularioTareas'
import { Header } from './Componentes/Header'
import { ListaTareas } from './Componentes/ListaTareas'
import { EstilosGlobales } from './Componentes/Modo Oscuro/EstilosGlobales'
import { Switch } from './Componentes/Modo Oscuro/Switch'
import { darkTheme, lightTheme } from './Componentes/Modo Oscuro/Temas'
import { Contenedor } from './Estilos/Contenedor.styles'

export const App = () => {
  // Valor inicial con las tareas del LocalStorage
  const tareasGuardadas = localStorage.getItem('tareas')
    ? JSON.parse(localStorage.getItem('tareas'))
    : []

  // Hook para cambiar estado de submit
  const [tareas, cambiarTareas] = useState(tareasGuardadas)

  // Guardando en el LocalStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  // Hook para mostrar tareas completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true)

  // Mostrar Completadas
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
  }, [mostrarCompletadas])

  // Hook Modo Oscuro
  const [theme, setTheme] = useState('light')

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <EstilosGlobales />
        <Switch theme={theme} setTheme={setTheme} />
        <Contenedor>
          <Header
            cambiarMostrarCompletadas={cambiarMostrarCompletadas}
            mostrarCompletadas={mostrarCompletadas}
          />
          {/* Formulario donde se escribe la tarea */}
          <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />

          <ListaTareas
            tareas={tareas}
            cambiarTareas={cambiarTareas}
            mostrarCompletadas={mostrarCompletadas}
          />
        </Contenedor>
      </>
    </ThemeProvider>
  )
}
