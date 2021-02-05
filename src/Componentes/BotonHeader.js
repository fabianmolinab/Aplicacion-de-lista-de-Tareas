import React from 'react'
import { IconoNoCompletado } from '../elementos/IconoNoCompletado';

import styled from 'styled-components';

export const BotonHeaderStyles = styled.button`

	align-items: center;
  background: none;
	background: #004c92;
	border: none;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	display: flex;
	font-size: 16px;
	padding: 5px 10px;
`;

export const BotonHeader = () => {
	return (
		<BotonHeaderStyles>
			No mostrar completadas
			<IconoNoCompletado />
		</BotonHeaderStyles>
	)
}


