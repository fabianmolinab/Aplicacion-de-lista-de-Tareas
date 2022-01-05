import { createGlobalStyle } from "styled-components";

export const EstilosGlobales = createGlobalStyle`

  // Se añade a su árbol de componentes donde inyectarán estilos globales en el documento
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

