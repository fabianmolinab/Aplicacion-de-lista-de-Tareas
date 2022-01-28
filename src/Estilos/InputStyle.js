import styled from 'styled-components'

// Estilos del Input
export const InputStyle = styled.input`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 15px;
  width: 100%;
  font-size: 20px;
  border-bottom: 2px solid #b8b8b8;
  &:focus {
    outline: none;
    border-bottom: 2px solid #007aea;
  }
`
