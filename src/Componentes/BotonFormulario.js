import React from 'react'
import styled from "styled-components";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Iconos } from '../elementos/Iconos';


export const BotonFormularioStyles = styled.button`
  position: absolute;
	bottom: 40px;
	right: 20px;
	border: none;
	background: none;
	cursor: pointer;
`


export const BotonFormulario = () => {
	return (
		<BotonFormularioStyles type="submit">
			<Iconos formicon="true" icon={faPlusSquare} />
		</BotonFormularioStyles>
	)
}
