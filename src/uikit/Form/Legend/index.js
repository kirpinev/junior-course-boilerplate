import styled from 'styled-components';

export const Legend = styled.legend`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #323c48;
  margin-bottom: ${p => p.marginBottom || '0'};
  margin-top: ${p => p.marginTop || '0'};
`;
