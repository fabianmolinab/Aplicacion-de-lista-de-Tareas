import styled from "styled-components";

export const InputEditarTarea = styled.input`
	background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
	border: none;
	border-bottom: 2px solid #b8b8b8;
	background: none;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
	margin-right: 20px;
`