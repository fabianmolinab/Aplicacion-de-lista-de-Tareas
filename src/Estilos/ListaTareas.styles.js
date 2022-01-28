import styled from 'styled-components'

export const ListaTareasStyles = styled.li`
  align-items: center;
  color: ${({ theme }) => theme.text};
  display: grid;
  font-size: 18px;
  height: 60px;
  grid-template-columns: auto 1fr auto;
  padding: 0 20px;
  &:hover {
    opacity: 0.5;
  }
  &:nth-child(even) {
    background: ${({ theme }) => theme.body};
  }
`

export const ListaTareasTextoStyles = styled.div`
  text-align: left;
  width: 100%;
`
