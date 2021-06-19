import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  height: 30px;
  width: ${p => p.width || '100%'};
  margin-right: ${p => p.marginRight || '0'};
  padding: 8px 16px;
  border: 1px solid #7e8fa4;
`;
