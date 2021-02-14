import React from 'react'
import styled from 'styled-components';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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

export const BotonHeader = ({ cambiarMostrarCompletadas, mostrarCompletadas }) => {

	const toggleCompletadas = () => {
		cambiarMostrarCompletadas(!mostrarCompletadas);
	}


	return (
		<div>
			{ mostrarCompletadas ?
				<BotonHeaderStyles onClick={toggleCompletadas}>
					No mostrar completadas
						<Iconos icon={faEyeSlash} />
				</BotonHeaderStyles>
				:
				<BotonHeaderStyles onClick={toggleCompletadas}>
					Mostrar completadas
						<Iconos icon={faEye} />
				</BotonHeaderStyles>
			}
		</div>
	)
}


