import styled from 'styled-components';

export const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  opacity: 0;
  cursor: pointer;
  padding: 8px 16px;

  &:checked ~ div {
    background-color: #323c48;
    border-radius: 15px;
    color: #fff;
  }
`;
