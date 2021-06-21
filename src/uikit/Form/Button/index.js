import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  border: ${p => p.border || ''};
  background-color: ${p => p.backgroundColor || ''};
  color: ${p => p.color || ''};
  width: ${p => p.width || ''};
  height: ${p => p.height || ''};
  margin-top: ${p => p.marginTop || '0'};
`;
