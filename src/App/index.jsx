import React from 'react';
import { Provider } from 'react-redux';
import Products from '../containers/Products';
import { store } from '../store';
import { withLogRender } from '../hocs';
import { GlobalStyle } from '../styles';

const ProductsWithLogger = withLogRender(Products);

export const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ProductsWithLogger />
  </Provider>
);
