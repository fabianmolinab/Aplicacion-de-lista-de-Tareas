import React from 'react';
import styled from 'styled-components';

export default function Switch({ dark, setDark }) {

  const activeDark = () => {
    setDark(!dark);
  }

  return (
    <div>
      <ContenedorCheckBox>
        <SwitchInput type="checkbox" id="checkbox" onClick={activeDark} />
        <SwitchLabel htmlFor="checkbox" />
      </ContenedorCheckBox>
    </div>
  )
}

//Estilos
const ContenedorCheckBox = styled.div`
  position: relative;
`;

const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after{
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${SwitchLabel} {
    background: #4fbe79;

    &::after{
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

