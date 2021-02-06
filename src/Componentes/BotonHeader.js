import React from 'react'
import styled from 'styled-components';

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Iconos } from '../elementos/Iconos';


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
			<Iconos icon={faEyeSlash} />
		</BotonHeaderStyles>
	)
}


