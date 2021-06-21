import styled from 'styled-components';

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #323c48;
  margin-right: ${p => p.marginRight || '0'};
`;
