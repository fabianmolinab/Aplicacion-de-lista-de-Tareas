import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Estilos de los iconos
export const Iconos = styled(FontAwesomeIcon)`
font-size: 15px;
margin-left: 10px;


${props => props.formicon && css`
  font-size: 22px;
  color: #80BE4E;
  margin-left: 1px;
  cursor: pointer;
`}
`;

