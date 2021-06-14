import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: ${p => p.maxWidth || '736px'};
  margin: 0 auto;
`;
