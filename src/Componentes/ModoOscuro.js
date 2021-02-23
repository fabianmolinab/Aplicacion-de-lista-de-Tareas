import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import Switch from './Switch';
//import { StylesDark } from '../Estilos/StylesDark.styles';

export const ModoOscuro = () => {


  const [dark, setDark] = useState(false);

  return (
    <div>
      <Switch dark={dark} setDark={setDark} />

      {(dark) ?
        <Styles />
        : !dark
      }
      {/* <StylesDark dark={dark} /> */}

    </div>
  )
}

const Styles = createGlobalStyle`
  html{
    color: #FAFAFA;
    background-color: black;
  }
`;
