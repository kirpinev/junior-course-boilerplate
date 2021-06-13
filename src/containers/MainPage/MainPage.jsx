import React from 'react';
import { ProductsList } from '../../components';
import { Container, Title } from '../../uikit';
import products from '../../products.json';

export const MainPage = () => (
  <Container maxWidth="736px">
    <Title as="h1">Список товаров</Title>
    <ProductsList products={products} />
  </Container>
);
