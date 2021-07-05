import styled from 'styled-components';

export const Button = styled.button`
  font: normal normal 14px/14px 'OpenSans', Arial, sans-serif;
  border: 1px solid #323c48;
  box-sizing: border-box;
  background: none;
  margin-right: ${p => p.marginRight || '0'};
  margin-top: ${p => p.marginTop || '0'};
  padding: 9px 63px;
  cursor: pointer;
`;
