import React from 'react';
import { Products } from '../containers';
import { GlobalStyle } from '../styles';
import { withLogRender } from '../hocs';

const ProductsWithLogger = withLogRender(Products);

export const App = () => (
  <>
    <GlobalStyle />
    <ProductsWithLogger />
  </>
);
