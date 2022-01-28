import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Estilos de los iconos
export const Iconos = styled(FontAwesomeIcon)`
  font-size: 15px;
  margin-left: 10px;

  ${(props) =>
    props.formicon &&
    css`
      font-size: 22px;
      color: #80be4e;
      margin-left: 1px;
      cursor: pointer;
    `}
  ${(props) =>
    props.listaicon &&
    css`
      cursor: pointer;
      font-size: 16px;
      margin-left: 20px;
      transition: 0.3s ease all;
    `}
`

export const IconCheck = styled(Iconos)`
  margin-right: 20px;
  font-size: 26px;
`
