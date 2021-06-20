import React from 'react';
import { Products } from '../containers';
import { GlobalStyle } from '../styles';
import { logRender } from '../hocs';

const ProductsWithLogger = logRender(Products);

export const App = () => (
  <>
    <GlobalStyle />
    <ProductsWithLogger />
  </>
);
